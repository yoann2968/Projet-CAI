import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';
import './prof-list-item.js';
import './my-prof-detail.js';

class MyRechercherCours extends (PageViewElement) {

  render() {
    return html`
      ${this.showHTML()}
      <div>
      ${this.showProfs()}
      </div>`;
  }

  constructor(){
    super();
    this.prof = new Array();
    this.buttonClicked=false;
    this.detail=false;
    this.detailProf="test";
  }

  connectedCallback(){
    super.connectedCallback();
    
    this._getData();
  }

  async _getData() {
    try {
      const response = await fetch('../data/cours.json');
      this.prof = await response.json();
    }
    catch (err) {
      console.log('fetch failed', err);
    }
  }

  updateProfs(){

    this.buttonClicked=true;
    this._getData();
    this.update();
  }

  showHTML(){
    if(this.buttonClicked && this.detail==false){
      return html`
      <div>
      ${SharedStyles}
      <div class="Title1">
      <h2>Professeurs disponibles</h2>
      </div>
      <section>
      <p>Trier par : <button @click="${this.sortByName}">Nom</button>
      <button @click="${this.sortByMatiere}">Matière</button>
      <button @click="${this.sortByPrix}">Prix</button></p>
      </section>
      </div>
    `;
    }
    else if(this.buttonClicked && this.detail){
      return html``;
    }
    else{
      return html`
      <div>
      ${SharedStyles}
      
      <div class="Title1">
      <h2>Recherche des professeurs disponibles</h2>
      </div>
      <section>
      <p><h2><button class="buttonLogin" @click="${this.updateProfs}">Rechercher</button></h2></p>
      </section>
      </div>
    `;
    }
  }

  showProfs(){
    if(this.buttonClicked && this.detail==false){
      return this.prof.map((item) => html`  
        ${SharedStyles}
        <section><p><a href="javascript:void(0);" @click="${this.showDetail}" id="${item.professeur}" class="a">               
        <prof-list-item 
          professeur="${item.professeur}"
          matiere="${item.matiere}"
          prix="${item.prix}">
        </prof-list-item>
        </a></p></section>`);
    }
    else if(this.buttonClicked && this.detail){
      return html`  
        ${SharedStyles}               
        <my-prof-detail
        professeur="${this.detailProf}">
        </my-prof-detail>`;      
    }
  }

  sortByName() {

  this.prof.sort(function (a, b) {

    var nameA = a.professeur.toUpperCase();
    var nameB = b.professeur.toUpperCase();
   
    if (nameA < nameB) {return -1;} 
    else if (nameA > nameB) {return 1;}
    else {return 0;}
  });

  this.updateProfs();
  }

  sortByMatiere() {

  this.prof.sort(function (a, b) {

    var nameA = a.matiere.toUpperCase();
    var nameB = b.matiere.toUpperCase();
   
    if (nameA < nameB) {return -1;} 
    else if (nameA > nameB) {return 1;}
    else {return 0;}
  });

  this.updateProfs();
  }

  sortByPrix() {
    this.prof.sort(function (a, b) {
    return a.prix - b.prix;
    });
  this.updateProfs();
  }

  showDetail(event){

    this.detail=true;
    for(let i=0; i<8; i++){
      if(event.path[i].className=="a"){
        this.detailProf=event.path[i].id;
      }
    }
    this.update();
    //remonter en haut de la page
    window.top.window.scrollTo(0,0);

  }

}

window.customElements.define('my-rechercher-cours', MyRechercherCours);


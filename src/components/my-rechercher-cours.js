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
    if(this.buttonClicked){
      return html`
      <div>
      ${SharedStyles}
      <section>
      <h3>Professeurs disponibles</h3>
      <p>Trier par : <button @click="${this.sortByName}">Nom</button>
      <button @click="${this.sortByMatiere}">Matière</button>
      <button @click="${this.sortByPrix}">Prix</button></p>
      </section>
      </div>
    `;
    }else{
      return html`
      <div>
      ${SharedStyles}
      <section>
      <h3>Recherche des professeurs disponibles</h3>
      <p><button @click="${this.updateProfs}">Rechercher</button></p>
      </section>
      </div>
    `;
    }
  }

  showProfs(){
    if(this.buttonClicked){
      return this.prof.map((item) => html`  
        ${SharedStyles}
        <section><p><a href="rechercher-cours/prof-detail">               
        <prof-list-item 
          professeur="${item.professeur}"
          matiere="${item.matiere}"
          prix="${item.prix}">
        </prof-list-item>
        </a></p></section>`);
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

}

window.customElements.define('my-rechercher-cours', MyRechercherCours);


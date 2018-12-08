import { html, LitElement } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';


class MyProfDetail extends LitElement {

  render() {
    this.showAvis();
    console.log(this.details.avis[0]);
    console.log(this.details.avis);
    console.log(this.details);
    return html`
      <style>
      img {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px;
        width: 50px;
        float: left;
      }
      img:hover {
        box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
      }
      </style>
      ${SharedStyles}

      <div><a href="javascript:window.location.reload()"><img src="/src/img/back.png"></a>
      
      <h2>${this.professeur}</h2></div>
      <section></section>
      <section>
      <p>${this.details.age} ans</p>
      </section>
      <section>
      <p>Matière enseignée : ${this.details.matiere}</p>
      </section>
      <section>
      <p>Avis : ${this.showAvis()}</p>
      </section>

      `;
  }

  constructor(){

    super();
    this.professeur = "test";
    this.details = new Array();
    this.details.avis = new Array();
  }

  static get properties() {
    return {
      professeur : {
        type: String,
        observer: '_onChange',
      },
      details : {
        type: Object,
      },
    };
  }

  async _onChange() {
    if(this.professeur=="test"){return;}
    var fileName = String(this.professeur.toLowerCase()).replace(/ /g,"_");
    const url = `../data/Professeur/${fileName}.json`;
    try {
      const response = await fetch(url);
      this.details = await response.json();
      this.details = this.details[0];
    }
    catch (err) {
    }
  }

  connectedCallback(){
    super.connectedCallback();
    
    this._onChange();
  }

  showAvis(){
    /*if(this.professeur == "test"){return;}
    console.log("ok");
    let str = new String();
    for(let i=0; i<this.professeur.avis.length; i++){
        console.log(this.professeur.avis[i]);
    }*/
  }

}

// Associate the new class with an element name
window.customElements.define('my-prof-detail', MyProfDetail);
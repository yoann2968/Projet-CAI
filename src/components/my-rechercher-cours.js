import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';

class MyRechercherCours extends (PageViewElement) {

  render() {
    return html`
      <div>
        ${SharedStyles}
        ${this.prof.map((item) => html` <section><p>Professeur : ${item.prenom} ${item.nom} </p><br><br></section>`)}
      </div>
    `;
  }

  constructor(){
    super();

    this.prof = new Array();  
  }

  connectedCallback(){
    super.connectedCallback();
    
    this._getData();
  }

  async _getData() {
    try {
      const response = await fetch('../data/Professeur/jean_du_jardin.json');
      this.prof = await response.json();
    }
    catch (err) {
      console.log('fetch failed', err);
    }
  }
}

window.customElements.define('my-rechercher-cours', MyRechercherCours);

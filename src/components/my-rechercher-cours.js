import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';

class MyRechercherCours extends (PageViewElement) {

  render() {
    return html`
      <div>
      ${SharedStyles}
      <section>
      <h3>Professeurs disponibles</h3>
      <p><button @click="${this.show}">Rechercher</button></p>
      </section>
      </div>
      <div>
        ${this.prof.map((item) => html` <section><p>${item.professeur} - ${item.matiere}</p><br><br></section>`)}
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
      const response = await fetch('../data/cours.json');
      this.prof = await response.json();
    }
    catch (err) {
      console.log('fetch failed', err);
    }
  }

  show(){

    this._getData();
    this.update();
  }

}

window.customElements.define('my-rechercher-cours', MyRechercherCours);


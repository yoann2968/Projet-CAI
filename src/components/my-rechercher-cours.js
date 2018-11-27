import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';

class MyRechercherCours extends (PageViewElement) {
  render() {
    return html`
      ${SharedStyles}
      <section>
        <p>Rechercher un cours</p>
        <br><br>
      </section>
    `;
  }
}

window.customElements.define('my-rechercher-cours', MyRechercherCours);

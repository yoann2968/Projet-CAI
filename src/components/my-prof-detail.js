import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';


class ProfDetail extends (PageViewElement) {

  render() {
    return html`
      <style>
      img {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px;
        width: 50px;
      }
      img:hover {
        box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
      }
      </style>
      <div>
      <p><a href="/rechercher-cours"><img src="/src/img/back.png"></a></p>
      </div>`;
  }

  constructor(){
    super();
  }

}

// Associate the new class with an element name
customElements.define('my-prof-detail', ProfDetail);
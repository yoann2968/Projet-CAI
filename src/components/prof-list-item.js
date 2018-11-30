// Import PolymerElement class and html helper definition
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { SharedStyles } from './shared-styles.js';

// Define the element's class element
export class ProfListItem extends PolymerElement {

  static get template() {
    return html`
      [[SharedStyles]]
      <h4>[[professeur]]</h4>
      [[matiere]]
      <h3>Prix : [[prix]]€/h</h3>
    `;
  }

  static get properties() {
    return {
      professeur : {
        type: String,
      },
      matiere : {
        type: String,
      },
      prix : {
        type: String,
      },
    }
  }
}

// Associate the new class with an element name
customElements.define('prof-list-item', ProfListItem);
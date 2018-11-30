// Import PolymerElement class and html helper definition
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { SharedStyles } from './shared-styles.js';

// Define the element's class element
export class ProfListItem extends PolymerElement {

  static get template() {
    return html`
      [[SharedStyles]]
      [[professeur]] - [[matiere]]
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
    }
  }
}

// Associate the new class with an element name
customElements.define('prof-list-item', ProfListItem);
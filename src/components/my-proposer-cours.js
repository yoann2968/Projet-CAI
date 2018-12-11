import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';


class MyProposerCours extends (PageViewElement) {
  render() {
    return html`
      ${SharedStyles}

    `;
  }

  static get properties() { 
    return {

    }
  }

}

window.customElements.define('my-proposer-cours', MyProposerCours);

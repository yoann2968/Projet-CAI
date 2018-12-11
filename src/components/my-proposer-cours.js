import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';


class MyProposerCours extends (PageViewElement) {
  render() {
    return html`
      ${SharedStyles}
      <div class="Title1">
      <h2>Proposez votre cours</h2>
      </div>
      <section> 
      <form method="post" action="traitement.php">
      <p>
        <label for="pseudo">Votre pseudo :</label>
        <input type="text" name="pseudo" id="pseudo" placeholder="Ex : Zozor" size="30" maxlength="10" />
      </p>
    </form>
    </section>
    `;
  }

  static get properties() { 
    return {

    }
  }

}

window.customElements.define('my-proposer-cours', MyProposerCours);

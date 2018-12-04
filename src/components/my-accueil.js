/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyAccueil extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <div class="Title1">
        <h2>Un <gras>service en ligne</gras> pour la réussite scolaire du CP à la Terminale</h2>
      </div>
      <h3>Vous <gras>recherchez</gras> un professeur particulier?</h3>
      <img class="Icone1" src="/images/Icone2.png" alt="Icone 1 can't appear">
      <div class="sent1"> Trouvez le <gras>facilement</gras> en ligne dans l'onglet <gras>Rechercher cours</gras> </div><br><br><br>
      <img class="Icone2" src="/images/Icone6.png" alt="Icone 2 can't appear">
      <div class="sent2"> <gras>Triez</gras> les professeurs proposés selon <gras>divers critères</gras> (Prix, géolocalisation, ...)  </div><br><br>
      <h3>Vous <gras>êtes</gras> un professeur particulier et vous souhaiteriez <gras>proposer vos services</gras>?</h3>
      <img class="Icone3" src="/images/Icone3.png" alt="Icone 3 can't appear">
      <div class="sent3"> Proposez-les <gras>facilement</gras> depuis l'onglet <gras>Proposer cours</gras> </div><br><br><br>
      <img class="Icone4" src="/images/Icone4.png" alt="Icone 4 can't appear">
      <div class="sent4"> Ensuite, il ne vous reste plus qu'à <gras>attendre</gras>! </div><br>
    `;
  }
}

window.customElements.define('my-accueil', MyAccueil);

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

class MyLogin extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <div class="Title1">
        <h2>Rentrez vos informations pour vous connecter</h2>
      </div>
      

      <h3>Connectez vous à votre compte</h3>
      <form class="Login">
        <p>
            <label for="pseudo">Votre pseudo :</label>
            <input type="text" name="pseudo1" class="pseudo1" placeholder="Ex : Zozor" size="30" maxlength="10" />
        </p>
        <p>
            <label for="pseudo">Votre mot de passe :</label>
            <input type="text" name="mdp1" class="mdp1" placeholder="Entrez votre mot de passe" size="30" maxlength="10" />
        </p>
        <button class="buttonLogin">Se connecter</button>
      </form><br>

      <div class="Title1">
        <h2>Pas encore inscrit?</h2>
      </div>
      <h3>Inscrivez-vous à l'aide du formulaire ci-dessous: Le login et le mot de passe vous servirons par la suite pour vous connecter</h3>

      <form class="Register">
        <p>
            <label for="pseudo">Votre pseudo :</label>
            <input type="text" name="pseudo2" class="pseudo2" placeholder="Ex : Zozor" size="30" maxlength="10" />
        </p>
        <p>
            <label for="pseudo">Votre mot de passe :</label>
            <input type="text" name="mdp2" class="mdp2" placeholder="Entrez votre mot de passe" size="30" maxlength="10" />
        </p>
        <button class="buttonRegister">S'enregistrer</button>
      </form><br>
   
    `;

    
  }







}

window.customElements.define('my-login', MyLogin);
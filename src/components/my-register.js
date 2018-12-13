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

class MyRegister extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <div class="Title1">
        <h2>Pas encore inscrit?</h2>
      </div>
      <h3>Inscrivez-vous à l'aide du formulaire ci-dessous: Le login et le mot de passe vous servirons par la suite pour vous connecter</h3>
      ${this.showRegister()}
    `;

  }

  static get properties() { 
    return {
    }
  }

  constructor(){
    super();
    this.sendRequest();
  }

  showRegister(){
    return html`
    <form class="Register">
    <p>
        <label for="pseudo">Votre pseudo :</label>
        <input type="text" name="pseudo__" placeholder="Ex : Zozor" size="30" maxlength="10" />
    </p>
    <p>
        <label for="pseudo">Votre mot de passe :</label>
        <input type="text" name="mdp_____" placeholder="Entrez votre mot de passe" size="30" maxlength="10" />
    </p>
    <button class="buttonRegister">S'enregistrer</button>
  </form><br>
    `;
  }

  sendRequest(){
    let url = document.location.href;
    let valide = true; //LET PORTEE DE BLOC ALORS QUE VAR PORTEE DE FONCTION
    let answers = (url.substring(31)).split("&");
    console.log("url: ",url)
    console.log("answers: ",answers)

    for(let i = 0; i<answers.length; i++){
      answers[i]=answers[i].substring(9);
      if(answers[i]==""){
        valide = false;
      }
    }
    console.log("answers2: ",answers)
    if(valide){//SI LES DONNEES RENSEIGNEES VALIDES : ENVOI
      
      //PREPARATION DU JSON
      let JsonFile = JSON.stringify({
        "login": answers[0],
        "mdp": answers[1]
    });

      var xhr = new XMLHttpRequest();
      var url_server = "url"; //MODIFIER CET URL
      xhr.open("POST", url_server, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var json = JSON.parse(xhr.responseText);
        }
      };
      xhr.send(JsonFile);
      /*alert("Vous vous êtes bien enregistré"); VOIR COMMENT FAIRE POUR QU'A L'ACTUALISATION DE LA PAGE CELUI-CI NE SOIT PAS AFFICHE*/
    }

  }

}

window.customElements.define('my-register', MyRegister);
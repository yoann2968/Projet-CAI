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
      ${this.showLogin()}
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

  showLogin(){
    return html`
    <form class="Login">
    <p>
        <label for="pseudo">Votre pseudo :</label>
        <input type="text" name="pseudo__" placeholder="Ex : Zozor" size="30" maxlength="10" />
    </p>
    <p>
        <label for="pseudo">Votre mot de passe :</label>
        <input type="text" name="mdp_____" placeholder="Entrez votre mot de passe" size="30" maxlength="10" />
    </p>
    <button class="buttonLogin" @click="${(e) => this._ButtonClicked(e)}">Se connecter</button>
    </form><br>
    `;
  }

  sendRequest(){
    this.utilisateur="test";
    let url = document.location.href;
    let valide = true; //LET PORTEE DE BLOC ALORS QUE VAR PORTEE DE FONCTION
    let answers = (url.substring(28)).split("&");
    console.log("url: ",url)
    console.log("answers: ",answers)

    for(let i = 0; i<answers.length; i++){
      answers[i]=answers[i].substring(9);
      if(answers[i]==""){
        valide = false;
      }
    }
    console.log("answers2: ",answers)
    if(valide){ //SI LES DONNEES RENSEIGNEES VALIDES : ENVOI
      
      //PREPARATION DU JSON
      let JsonFile = JSON.stringify({
        "login": answers[0],
        "mdp": answers[1]
    });

      var xhr = new XMLHttpRequest();
      var url_server = "http://127.0.0.1:3000/login"; //MODIFIER CET URL avec http://127.0.0.1:3000/login
      xhr.open("POST", url_server, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var json = JSON.parse(xhr.responseText);
          console.log("REPONSE : ",json.pseudo)
          console.log("REPONSE : ",json.mdp)
          if (answers[0]==json.pseudo && answers[1]==json.mdp){
            valide=true;
          }
          else {
            valide=false;
          }
        }
      };
      xhr.send(JsonFile);
      history.pushState(null,null,"/login");
    }
    else{
      valide=false;
    }
    this.VALIDE=valide;
  }

  _ButtonClicked(){
    if (this.VALIDE){
      alert("Vous vous êtes bien connecté");
    }
    else{
      alert("Erreur, un champ n'a pas été renseigné correctement");
    }
  }

}

window.customElements.define('my-login', MyLogin);
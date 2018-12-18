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
      <form>
      <section> 
      <h3>Qui êtes-vous ?</h3>
      ${this.showWhoAreYou()}
      </section>
      <section> 
      <h3>Quel cours proposez-vous ?</h3>
      ${this.showCours()}
      </section>
      <section> 
      <h3>... Quelques détails supplémentaires</h3>
      ${this.showDetails()}
      </section>
      <section> 
      <h3>Vous contacter</h3>
      ${this.showContact()}
      </section>
      <section> 
      <p><h2>
      <button class="buttonLogin">Soumettre</button></h2>
      </p></section> 
      </form>
    `;
  }

  static get properties() { 
    return {
    }
  }

  constructor(){
    super();
    this.sendRequest();
    this.first==true;
  }

  showWhoAreYou(){
    return html`
      <p>
        <label for="professeur">Nom complet :</label>
        <input type="text" name="professeur" id="professeur" placeholder="Ex : Jean Lassalle" size="30" maxlength="40" />
      </p><p>
        <label for="age">Date de naissance :</label>
        <input type="date" name="age_______" id="age"/>
      </p><p>
        <label for="matiere">Matière enseignée :</label>
        <SELECT name="matiere___" size="1">
        <OPTION>Anglais<OPTION>Français<OPTION>Mathématiques<OPTION>Physique-Chimie<OPTION>Informatique
        </SELECT>
      </p>
    `;
  }

  showCours(){
    return html`
      <p>
        <label for="jour">Jour de la semaine :</label>
        <SELECT name="jour______" size="1">
        <OPTION>Lundi<OPTION>Mardi<OPTION>Mercredi<OPTION>Jeudi<OPTION>Vendredi<OPTION>Samedi<OPTION>Dimanche
        </SELECT>
        </p><p>
        <label for="heure">À partir de :</label>
        <input type="time" name="heure_____" id="heure"/>
      </p><p>
        <label for="longueur">Durée du cours :</label>
        <SELECT name="longueur__" size="1">
        <OPTION>1<OPTION>1.30<OPTION>2<OPTION>2.30<OPTION>3
        </SELECT>heure(s)
      </p><p>
        <label for="places">Nombre de places :</label>
        <input type="number" name="places____" id="places" min="1" max="5"/>
      </p>
    `;
  }

  showDetails(){
    return html`
      <p>
        <label for="prix">Taux horaire souhaité :</label>
        <input type="number" name="prix______" id="prix" min="1" max="50"/>€/h
      </p><p>Lieu du cours :</p><p>
        <label for="ville">Ville :</label>
        <input type="text" name="ville_____" id="ville" placeholder="Ex : Brest" size="30" maxlength="40" />
      </p><p>
        <label for="adresse">Adresse :</label>
        <input type="text" name="adresse___" id="adresse" placeholder="Ex : 1 rue de la Liberté" size="30" maxlength="60" />
      </p>
    `;
  }

  showContact(){
    return html`
      <p>
        <label for="mail">Adresse mail :</label>
        <input type="email" name="mail______" id="mail" placeholder="Ex : jean.lassalle@gmail.com" size="30" maxlength="50" />
      </p><p>
        <label for="tel">Numéro de téléphone :</label>
        <input type="text" name="tel_______" id="tel" placeholder="Ex : 0607080910" size="30" maxlength="10" />
      </p>
    `;
  }

  sendRequest(){
    let valide=true;
    let url = document.location.href;
    let answers = (url.substring(37)).split("&");
    for(let i = 0; i<answers.length; i++){
      answers[i]=answers[i].substring(11);
      answers[i]=answers[i].replace(/[+]/g," ");
      if(i==1 && answers[i]!=""){
        answers[i]=2018-(answers[i].substring(0,4));
      }
      if(i==4 && answers[i]!=""){
        if(answers[i].substring(5,7)=="00"){
          answers[i]=(answers[i].substring(0,2));
        }
        else{
          answers[i]=((answers[i].substring(0,2)).concat(".")).concat(answers[i].substring(5,7));
        }
      }
      if(i==10 && answers[i]!=""){
        answers[i]=answers[i].replace(/%40/g,"@");
      }
      if(answers[i]==""){
        valide = false;
      }
    }
    if(valide){//SI LES DONNEES RENSEIGNEES VALIDES : ENVOI
      
      //PREPARATION DU JSON
      let JsonFile = JSON.stringify({
        "nom": answers[0],
        "age": answers[1],
        "prix": answers[7],
        "matiere": answers[2],
        "ville": answers[8],
        "adresse": answers[9],
        "cours": [
          {
          "jour":answers[3],
          "heure":answers[4],
          "longueur":answers[5],
          "places": answers[6]
          }
        ],
        "avis": [
        ],
        "contact": [
          answers[10],
          answers[11]
        ]
    });

      var xhr = new XMLHttpRequest();
      var url_server = "http://127.0.0.1:3000/createCour"; //MODIFIER CET URL avec http://127.0.0.1:3000/createCours
      xhr.open("POST", url_server, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var json = JSON.parse(xhr.responseText);
        }
      };
      xhr.send(JsonFile);
      alert("Le formulaire a bien été enregistré ! :)");
    }
    history.pushState(null,null,"/proposer-cours");
  }

}

window.customElements.define('my-proposer-cours', MyProposerCours);

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
      <input type="submit" value="Submit">
      </form>
      <?php
  echo $_POST['professeur'];
?>
    `;
  }

  static get properties() { 
    return {
    }
  }

  constructor(){
    super();
    this.chemin = document.location.href;
    console.log((this.chemin.substring(37)).split("&"));
  }

  showWhoAreYou(){
    return html`
      <p>
        <label for="professeur">Nom complet :</label>
        <input type="text" name="professeur" id="professeur" placeholder="Ex : Jean Lassalle" size="30" maxlength="40" />
      </p><p>
        <label for="age">Date de naissance :</label>
        <input type="date" name="age" id="age"/>
      </p><p>
        <label for="matiere">Matière enseignée :</label>
        <SELECT name="matiere" size="1">
        <OPTION>Anglais<OPTION>Français<OPTION>Mathématiques<OPTION>Physique-Chimie<OPTION>Informatique
        </SELECT>
      </p>
    `;
  }

  showCours(){
    return html`
      <p>
        <label for="jour">Jour de la semaine :</label>
        <SELECT name="jour" size="1">
        <OPTION>Lundi<OPTION>Mardi<OPTION>Mercredi<OPTION>Jeudi<OPTION>Vendredi<OPTION>Samedi<OPTION>Dimanche
        </SELECT>
        </p><p>
        <label for="heure">À partir de :</label>
        <input type="time" name="heure" id="heure"/>
      </p><p>
        <label for="matiere">Durée du cours :</label>
        <SELECT name="matiere" size="1">
        <OPTION>1h<OPTION>1h30<OPTION>2h<OPTION>2h30<OPTION>3h
        </SELECT>
      </p><p>
        <label for="places">Nombre de places :</label>
        <input type="number" name="heure" id="heure" min="1" max="5"/>
      </p>
    `;
  }

  showDetails(){
    return html`
      <p>
        <label for="professeur">Taux horaire souhaité :</label>
        <input type="number" name="prix" id="prix" min="1" max="50"/>€/h
      </p><p>Lieu du cours :</p><p>
        <label for="ville">Ville :</label>
        <input type="text" name="ville" id="ville" placeholder="Ex : Brest" size="30" maxlength="40" />
      </p><p>
        <label for="adresse">Adresse :</label>
        <input type="text" name="adresse" id="adresse" placeholder="Ex : 1 rue de la Liberté" size="30" maxlength="60" />
      </p>
    `;
  }

  showContact(){
    return html`
      <p>
        <label for="mail">Adresse mail :</label>
        <input type="email" name="mail" id="mail" placeholder="Ex : jean.lassalle@gmail.com" size="30" maxlength="50" />
      </p><p>
        <label for="tel">Numéro de téléphone :</label>
        <input type="text" name="tel" id="tel" placeholder="Ex : 0607080910" size="30" maxlength="10" />
        <button @click="${this.sendForm}">Rechercher</button>
      </p>
    `;
  }

}

window.customElements.define('my-proposer-cours', MyProposerCours);

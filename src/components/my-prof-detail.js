import { html, LitElement } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';


class MyProfDetail extends LitElement {

  render() {
    return html`
      <style>
      img {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px;
        width: 50px;
      }
      img:hover {
        box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
      }
      </style>
      ${SharedStyles}

      <p><a href="javascript:window.location.reload()"><img src="/src/img/back.png"></a></p>
      <section>
      <h3>${this.professeur}</h3>
      </section>`;
  }

  constructor(){

    super();
    this.professeur="test";
  }

  static get properties() {
    return {
      professeur : {type: String}
    };
  }

}

// Associate the new class with an element name
window.customElements.define('my-prof-detail', MyProfDetail);
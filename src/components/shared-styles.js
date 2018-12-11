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

export const SharedStyles = html`
<style>

div.sent1{
  width: 300px;
  heigth: 100px;
  border: 2px solid #000000; 
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}

div.sent2{
  width: 300px;
  heigth: 100px;
  border: 2px solid #000000; 
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 12px;
}

div.sent3{
  width: 300px;
  heigth: 100px;
  border: 2px solid #000000; 
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}

div.sent4{
  width: 300px;
  heigth: 100px;
  border: 2px solid #000000; 
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 12px;
}

.Icone1, .Icone2, .Icone3, .Icone4 {
  margin-left: 700px;
  float:left;
}

h3 {
  font-size: 28px;
  font-weight: normal;
  text-align: center;
  color: var(--app-dark-text-color);
}

.Title1 {
  background-color: lightblue;
  background-attachment: fixed;
}

gras {
  font-weight: bold;
}

.buttonLogin {
  background-color: #555555; /* Black */
  border: 2px solid #555555;
  border-radius: 8px;
  color: white;
  display: inline-block;
  font-size: 16px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}  

.buttonLogin:hover {
  background-color: #FFFFFF; /* White */
  color: black;
}

.Login {
  margin-left: auto;
  margin-right: auto;
}  

.buttonRegister {
  background-color: #EE0000; /* Black */
  border: 2px solid #EE0000;
  border-radius: 8px;
  color: white;
  display: inline-block;
  font-size: 16px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}  

.buttonLogin:hover {
  background-color: #FFFFFF; /* White */
  color: red;
}

.Register {
  margin-left: auto;
  margin-right: auto;
}  


  :host {
    display: block;
    box-sizing: border-box;
  }

  section {
    padding: 24px;
    background: var(--app-section-odd-color);
  }

  section > * {
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
  }

  section:nth-of-type(even) {
    background: var(--app-section-even-color);
  }

  a {
    color: black;
  }

  h2 {
    font-size: 24px;
    text-align: center;
    color: var(--app-dark-text-color);
  }

  @media (min-width: 460px) {
    h2 {
      font-size: 36px;
    }
  }

  .circle {
    display: block;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    text-align: center;
    border-radius: 50%;
    background: var(--app-primary-color);
    color: var(--app-light-text-color);
    font-size: 30px;
    line-height: 64px;
  }
</style>
`;

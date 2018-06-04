function main() {
  import(/* webpackMode: 'eager' */ './components/my-app.js');
}

if (!window.customElements || !('attachShadow' in Element.prototype)) {
  import(/* webpackChunkName: 'sd-ce-polyfill' */ '@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce.js').then(main);
} else {
  main();
}

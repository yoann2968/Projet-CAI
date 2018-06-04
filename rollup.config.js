import resolve from 'rollup-plugin-node-resolve';
import path from 'path';

export default {
  input: ['src/index.js'],
  output: {
    dir: 'rollup_dist',
    format: 'es'
  },
  experimentalCodeSplitting: true,
  experimentalDynamicImport: true,
  plugins: [
    resolve({
      // use "module" field for ES6 module if possible
      module: true, // Default: true

      // use "jsnext:main" if possible
      // – see https://github.com/rollup/rollup/wiki/jsnext:main
      jsnext: true,  // Default: false

      // If true, inspect resolved files to check that they are
      // ES2015 modules
      modulesOnly: true, // Default: false
    }),
    {
      resolveDynamicImport(specifier, parent) {
        if (specifier.charAt(0) !== '.')
          return path.resolve(__dirname, 'node_modules', specifier);
      }
    }
  ]
};

// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: './index.js',
  output: [
      {
          file: 'dist/fwi.browser.js',
          format: 'iife'
      },
  ],
  plugins: [
      resolve(),
      babel()
  ]
}
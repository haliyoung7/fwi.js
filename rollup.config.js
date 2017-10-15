// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: './index.js',
  output: [
      {
          file: 'dist/fwi.es.js',
          format: 'es'
      },
  ],
  plugins: [
      resolve()
  ]
}
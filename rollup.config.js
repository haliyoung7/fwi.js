import babel from 'rollup-plugin-babel';
import multiEntry from 'rollup-plugin-multi-entry';

export default [
    {
        entry: 'src/*.js',
        dest: 'dist/fwi.es.js',
        format: 'es',
        plugins: [multiEntry()]
    },
    {
        entry: 'src/*.js',
        dest: 'dist/fwi.common.js',
        format: 'cjs',
        plugins: [multiEntry(), babel({ plugins: ['external-helpers'] })],
        moduleName: 'fwi'
    },
    {
        entry: 'src/*.js',
        dest: 'dist/fwi.browser.js',
        format: 'iife',
        plugins: [multiEntry(), babel()],
        moduleName: 'fwi'
    }
];
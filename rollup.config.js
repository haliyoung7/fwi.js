import multiEntry from 'rollup-plugin-multi-entry';

export default [
    {
        entry: 'src/*.js',
        dest: 'dist/fwi.es.js',
        format: 'es',
        plugins: [multiEntry()],
        moduleName: 'fwi'
    },
    {
        entry: 'src/*.js',
        dest: 'dist/fwi.umd.js',
        format: 'umd',
        plugins: [multiEntry()],
        moduleName: 'fwi'
    },
    {
        entry: 'src/*.js',
        dest: 'dist/fwi.browser.js',
        format: 'iife',
        plugins: [multiEntry()],
        moduleName: 'fwi'
    }
];
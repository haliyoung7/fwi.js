import babel from 'rollup-plugin-babel';
import multiEntry from 'rollup-plugin-multi-entry';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

export default [
    {
        entry: 'src/*.js',
        dest: 'dist/fwi.es.js',
        format: 'es',
        plugins: [
            multiEntry()
        ]
    },
    {
        entry: 'src/*.js',
        dest: 'dist/fwi.common.js',
        format: 'cjs',
        plugins: [
            multiEntry(),
            babel({ plugins: ['external-helpers'] }),
            resolve(),
            commonjs()
        ],
        moduleName: 'fwi'
    },
    {
        entry: 'src/*.js',
        dest: 'dist/fwi.browser.js',
        format: 'iife',
        plugins: [
            multiEntry(),
            babel(),
            resolve(),
            commonjs()
        ],
        moduleName: 'fwi'
    },
    {
        entry: 'src/*.js',
        dest: 'dist/fwi.browser.min.js',
        format: 'iife',
        plugins: [
            multiEntry(),
            babel(),
            resolve(),
            commonjs(),
            uglify()
        ],
        moduleName: 'fwi'
    },
    {
        entry: 'color_manipulations/color_utils.js',
        dest: 'dist/color_utils.js',
        format: 'iife',
        plugins: [
            resolve(),
            commonjs(),
            builtins(),
            globals()
        ],
        moduleName: 'color'
    }
];
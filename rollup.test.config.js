import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default [
    {
        entry: 'index.js',
        dest: 'dist/promise_test.js',
        format: 'iife',
        plugins: [
              resolve(),
              babel(),
              commonjs()
        ]
    }
];
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
	// Browser-friendly UMD build.
	{
		input: 'src/main.js',
		output: {
            file: pkg.browser,
            format: 'umd',
            name: 'packageSample'
        },
		plugins: [
			resolve(), // so Rollup can find external libraries
			commonjs(), // so Rollup can convert external libraries to an ES module
			babel({
				exclude: ['node_modules/**']
			})
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	{
        input: 'src/main.js',
        // external: ['lodash'] // An array of external libraries
        output: [
            {
                file: pkg.main,
                format: 'cjs'
            },
            {
                file: pkg.module,
                format: 'es'
            }
        ],
		plugins: [
			babel({
				exclude: ['node_modules/**']
			})
		]
	}
];

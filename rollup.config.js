import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import sass from 'node-sass'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import { defineConfig } from 'rollup';
import typescript from 'rollup-plugin-typescript2';

const rollupConfig =  defineConfig([
    {
        input: 'src/index.ts',
        output: [ 
            {
                file: "release/index.js",
                sourcemap: false,
                
            },
        ],
        plugins: [
            typescript({
                rollupCommonJSResolveHack: false,
                clean: true,
            }),
            peerDepsExternal(),
            commonjs({ 
                include: 'node_modules/**',
            }),
            resolve(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled',
            }),
            postcss({
            preprocessor: (content, id) => new Promise((res) => {
                const result = sass.renderSync({ file: id })

                res({ code: result.css.toString() })
            }),
            plugins: [autoprefixer],
            modules: {
                scopeBehaviour: 'global',
            },
            sourceMap: true,
            extract: true,
            }),
            
        ],
    },
    {
        input: 'src/index.ts',
        output: [ 
            {
                file: "release/index.esm.js",
                sourcemap: false,
                type:"esm",
                
            },
        ],
        plugins: [
            typescript({
                rollupCommonJSResolveHack: false,
                clean: true,
            }),
            peerDepsExternal(),
            commonjs({ 
                include: 'node_modules/**',
            }),
            resolve(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled',
            }),
            postcss({
            preprocessor: (content, id) => new Promise((res) => {
                const result = sass.renderSync({ file: id })

                res({ code: result.css.toString() })
            }),
            plugins: [autoprefixer],
            modules: {
                scopeBehaviour: 'global',
            },
            sourceMap: true,
            extract: true,
            }),
            
        ],
    },
    {
        input: 'src/index.ts',
        output: [ 
            {
                file: "release/index.umd.js",
                sourcemap: false,
                type:"umd",
                
            },
        ],
        plugins: [
            typescript({
                rollupCommonJSResolveHack: false,
                clean: true,
            }),
            peerDepsExternal(),
            commonjs({ 
                include: 'node_modules/**',
            }),
            resolve(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled',
            }),
            postcss({
            preprocessor: (content, id) => new Promise((res) => {
                const result = sass.renderSync({ file: id })

                res({ code: result.css.toString() })
            }),
            plugins: [autoprefixer],
            modules: {
                scopeBehaviour: 'global',
            },
            sourceMap: true,
            extract: true,
            }),
            
        ],
    },
    {
        input: 'src/index.ts',
        output: [ 
            {
                file: "release/index.mjs.js",
                sourcemap: false,
                type:"mjs",
                
            },
        ],
        plugins: [
            typescript({
                rollupCommonJSResolveHack: false,
                clean: true,
            }),
            peerDepsExternal(),
            commonjs({ 
                include: 'node_modules/**',
            }),
            resolve(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled',
            }),
            postcss({
            preprocessor: (content, id) => new Promise((res) => {
                const result = sass.renderSync({ file: id })

                res({ code: result.css.toString() })
            }),
            plugins: [autoprefixer],
            modules: {
                scopeBehaviour: 'global',
            },
            sourceMap: true,
            extract: true,
            }),
            
        ],
    }

]);

export default rollupConfig;
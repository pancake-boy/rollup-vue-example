import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';
import scss from 'rollup-plugin-scss';
import alias from '@rollup/plugin-alias';
import copy from 'rollup-plugin-copy';

import packageJson from './package.json';

const projectRoot = path.resolve(__dirname, '.');

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'cjs',
      file: packageJson.main,
      sourcemap: true,
    },
    {
      format: 'esm',
      file: packageJson.module,
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript(),
    alias({
      entries: [
        {
          find: '@',
          replacement: `${path.resolve(projectRoot, 'src')}`,
        },
      ],
      customResolver: resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      }),
    }),
    vue(),
    commonjs(),
    scss(),
    copy({
      targets: [
        { src: ['src/themes/**/*.scss', 'src/themes/**/*.svg'], dest: 'lib' },
      ],
      flatten: false,
    }),
  ],
};

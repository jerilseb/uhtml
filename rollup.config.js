// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
  input: 'app.ts',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [
      typescript(),
      serve({
        open: true,
        contentBase: ['dist', 'public']
      }),
      livereload()
    ]
};
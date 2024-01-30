// rollup.config.js
import babel from '@rollup/plugin-babel';

export default {
  // ... другие настройки Rollup

  plugins: [
    babel({
      extensions: ['.js', '.jsx'],
      babelHelpers: 'runtime',
    }),
    // ... другие плагины
  ],
};

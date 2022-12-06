const typescript = require('rollup-plugin-typescript2');

const pkg = require('./package.json');

module.exports = {
  input: 'src/index.ts',
  external: Object.keys(pkg.peerDependencies),
  output: [
    {
      dir: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [typescript()]
};

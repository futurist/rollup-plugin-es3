var pkg = require('./package.json');

export default {
  entry: 'index.js',
  targets: [
    {
      format: 'cjs',
      dest: pkg['main']
    },
    {
      format: 'es',
      dest: pkg['jsnext:main']
    }
  ]
}

// Make rollup compatible with ES3, remove Object.defineProperty of __esModule part

function es3 () {
  return {
    name: 'es3',
    transformBundle: function (code, b) {
      return  code.replace(/^\s*Object\.defineProperty\(\s*exports,\s*'__esModule'.*\n$/m, '')
    }
  }
}

export default es3;
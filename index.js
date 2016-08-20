// Make rollup compatible with ES3, remove Object.defineProperty of __esModule part

export default function es3 (removeArr) {
  var removeHash = {
    'defineProperty': [/^\s*Object\.defineProperty\(\s*exports,\s*'__esModule'.*\n$/mg, ''],
    'freeze': [/Object.freeze\s*\(\s*([^)]*)\)/g, '$1']
  }
  if (!Array.isArray(removeArr)) removeArr = Object.keys(removeHash)

  return {
    name: 'es3',
    transformBundle: function (code) {
      for (var k in removeHash) {
        if (removeArr.indexOf(k) > -1) {
          code = code.replace(removeHash[k][0], removeHash[k][1])
        }
      }
      return { code, map: { mappings: '' } }
    }
  }
}

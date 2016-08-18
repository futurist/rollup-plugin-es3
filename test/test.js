const assert = require('assert')
const rollup = require('rollup').rollup
const fs = require('fs')
const path = require('path')
const es3 = require('../dist/rollup-plugin-es3.cjs.js')

function file(p) {
  return path.join(__dirname, p)
}

describe('rollup-plugin-es3', () => {
  it('should remove __esModule', () => {
    return rollup({
      entry: file('files/source.js'),
      plugins: [ es3() ]
    }).then(bundle => {
      const result = bundle.generate({
        format: 'cjs'
      })
      assert.equal(result.code, fs.readFileSync(file('files/cjs.js'), 'utf-8'))
    })
  })

})

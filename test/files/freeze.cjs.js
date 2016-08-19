'use strict';

function abc () {
  console.log('abc')
}

function def () {
  console.log('def')
}


var names = {
  abc: abc,
  def: def
};

var a=1
var b=2

console.log(names)

exports.a = a;
exports.b = b;
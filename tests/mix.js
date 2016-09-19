'use strict';

const mix = require('..');

let list = [
  doSth(1),
  doSth(2),
  doSth(3),
  doSth(4),
  doSth(5),
  doSth(6),
];

let start = Date.now();

function doSth (str) {
  return (resovle) => {
    console.log(`${Date.now() - start}ms`, str);
    resovle();
  }
}

mix.random(list, 10000).then(() => {
  console.log('over');
});

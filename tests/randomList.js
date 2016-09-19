'use strict';

const mix = require('..');

let start = Date.now();
let tasks = mix.randomList(3000);

function doSth (str) {
  return (resovle) => {
    console.log(`${Date.now() - start}ms`, str);
    resovle();
  }
}

tasks
  .push(doSth(1))
  .push(doSth(2))
  .push(doSth(3))
  .then(() => {
  console.log('over');
});

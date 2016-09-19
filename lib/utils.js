'use strict';

exports.random = function(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};

exports.sleep = function (time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
};

exports.avg = function(max, length) {
  let list = [], min = 0;
  let interval = Math.floor(max / length);
  for (let i = 0; i < length; i++)
    list.push(min + interval * i);
  return {
    next: () => {
      return list.shift();
    }
  }
};

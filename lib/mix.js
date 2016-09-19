'use strict';

const utils = require('./utils');

exports.random = function (tasks, time) {
  let list = [];

  for (let fn of tasks) {
    let ms = utils.random(time);
    list.push(utils.sleep(ms).then(() => new Promise(fn)));
  }

  return Promise.all(list);
};

exports.randomList = function (time) {
  let tasks = [];
  let self = {
    push: (fn) => {
      tasks.push(fn);
      return self;
    },
    then: (fn) => {
      return exports.random(tasks, time).then(fn);
    }
  };
  return self;
};

exports.avg = function (tasks, time) {
  let list = [];
  let avg = utils.avg(time, tasks.length)

  for (let fn of tasks) {
    let ms = avg.next();
    list.push(utils.sleep(ms).then(() => new Promise(fn)));
  }

  return Promise.all(list);
};

exports.avgList = function (time) {
  let tasks = [];
  let self = {
    push: (fn) => {
      tasks.push(fn);
      return self;
    },
    then: (fn) => {
      return exports.avg(tasks, time).then(fn);
    }
  };
  return self;
};

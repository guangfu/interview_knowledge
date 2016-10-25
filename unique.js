/**
 * 数组去重
 */

Array.prototype.unique = function() {
  const obj = {};
  const arr = [];

  this.forEach((item) => {
    if (obj[item]) {
      return;
    } else {
      arr.push[item];
      obj[item] = true;
    }
  })

  return arr;
}

Array.prototype.unique = function() {
  const arr = [];

  this.sort().forEach((item) => {
    if (arr[arr.length - 1] !== item) {
      arr.push(item)
    }
  })

  return arr;
}

Array.prototype.unique = function() {
  const arr = [];

  this.forEach((item) => {
    if (arr.indexOf(item) === -1) {
      arr.push(item);
    }
  })

  return arr;
}
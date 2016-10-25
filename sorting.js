/**
 * 数组排序
 */

/**
 * 数据交换
 */
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/**
 * 冒泡排序
 */
function bubbleSort(arr) {
  for (let i = 0, len = arr.length; i < len - 1; i++) {
    for (let j = 0; j < len - i -1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }

  return arr;
}

var a = [4, 5, 30, 2, 430, 22, 54];
console.log(bubbleSort(a));

/**
 * 冒泡排序改进1
 */
function bubbleSort1(arr) {
  let pos = false;

  for (let i = 0, len = arr.length; i < len - 1; i++) {
    for (let j = 0; j < len - i -1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        pos = true;
      }
    }
    if (!pos) {
      break;
    }
  }

  return arr;
}
var a = [4, 5, 30, 2, 430, 22, 54];
console.log(bubbleSort1(a));

/**
 * 冒泡排序改进2
 */
function bubbleSort2(arr) {
  let i = arr.length - 1;
  while(i) {
    let pos = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        pos = j;
      }
    }
    i = pos;
  }
  return arr;
}
var a = [4, 5, 30, 2, 430, 22, 54];
console.log(bubbleSort2(a));

/**
 * 快速排序
 */
function quickSort(arr) {
  const sort = function(low, height) {
    let i = low;
    let j = height - 1;
    let key = arr[low];
    if ((height - low ) < 1) return;

    while( i < j) {
      while (i < j) {
        if (arr[j] < key) {
          arr[i++] = arr[j];
          break;
        }
        j--;
      }
      while (i < j) {
        if (arr[i] > key) {
          arr[j--] = arr[i];
          break;
        }
        i++;
      }
    }
    
    arr[i] = key;  
    sort(0, i);
    sort(i + 1, height);
  }

  sort(0, arr.length);

  return arr;
}
var a = [4, 5, 30, 2, 430, 22, 54];
console.log(quickSort(a));



function quickSort(array){
  function sort(prev, numsize){
    var nonius = prev;
    var j = numsize -1;
    var flag = array[prev];
      if ((numsize - prev) > 1) {
      while(nonius < j){
        for(; nonius < j; j--){
          if (array[j] < flag) {
            array[nonius++] = array[j];　//a[i] = a[j]; i += 1;
            break;
          };
        }
        for( ; nonius < j; nonius++){
          if (array[nonius] > flag){
            array[j--] = array[nonius];
            break;
          }
        }
      }
      array[nonius] = flag;
      sort(0, nonius);
      sort(nonius + 1, numsize);
    }
  }
  sort(0, array.length);
  return array;
}

/**
 * 直接插入排序
 */
function insertSort(arr) {
  
  for (let i = 1, len = arr.length; i < len; i++) {
    if (arr[i] < arr[i-1]) {
      let j = i - 1;
      let temp = arr[i]
      arr[i] = arr[i-1];
      while(temp < arr[j]) {
        arr[j+1] = arr[j];
        j--;
      }
      arr[j+1] = temp;
    }
  }

  return arr;
}

var a = [4, 5, 30, 2, 430, 22, 54];
console.log(insertSort(a));

/**
 * 增量排序（希尔排序）
 */
function shellSort(arr) {
  let len = arr.length;
  let fraction = Math.floor( len / 2);
  while (fraction > 0) {
    for ( let i = fraction; i < len; i++) {
      for ( let j = i-fraction; j >= 0 && arr[j] > arr[fraction + j]; j -= fraction ) {
        let temp = arr[j];
        arr[j] = arr[fraction + j];
        arr[fraction + j] = temp;
      }
    }

    fraction = Math.floor(fraction / 2);
  }

  return arr;
}
var a = [4, 5, 30, 2, 430, 22, 54];
console.log(shellSort(a));


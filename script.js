// first
/*
Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n:
getArray(10); // [1,2,3,4,5,6,7,8,9,10]
*/
function getArray(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}

// second
/*
Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива.
doubleArray([1,2,3]) // [1,2,3,1,2,3]
*/
function doubleArray(arr) {
  return arr.concat(arr);
}
console.log(doubleArray([1, 2, 3]));

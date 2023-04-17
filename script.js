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
// console.log(doubleArray([1, 2, 3]));

// third
/*
Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент,
а возвращает массив из оставшихся значений.

changeCollection([1,2,3], [‘a’, ’b’, ‘c’])  // [ [2,3], [‘b’, ‘c’] ]

Не забудьте про проверкку того что массив является массивом.
Это можно сделать с помощью метода Array.isArray(arr);
*/
function changeCollection() {
  let result = [];
  let value = "";
  let variable = [];

  for (let i = 0; i < arguments.length; i++) {
    value = arguments[i].shift();
    result.push(value);
    console.log(arguments[i]);
    variable.push(arguments[i]);
  }
  return variable;
}
// console.log(changeCollection([1, 2, 3], ["a", "b", "c"]));

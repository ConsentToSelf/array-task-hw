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

// fourth
/*
Создать функцию которая принимает массив пользователей,
поле которое хочу проверить и значение на которое хочу проверять указанное поле.
Проверять что все аргументы переданы. Если что то не переданно то возвращать объект ошибки return new Error('Error message').
Возвращать новый массив с пользователями соответсвующие указанным параметрам.
*/
const users = [
  {
    _id: "5e36b779dc76fe3db02adc32",
    balance: "$1,955.65",
    picture: "http://placehold.it/32x32",
    age: 33,
    name: "Berg Zimmerman",
    gender: "male",
  },
  {
    _id: "5e36b779d117774176f90e0b",
    balance: "$3,776.14",
    picture: "http://placehold.it/32x32",
    age: 37,
    name: "Deann Winters",
    gender: "female",
  },
  {
    _id: "5e36b779daf6e455ec54cf45",
    balance: "$3,424.84",
    picture: "http://placehold.it/32x32",
    age: 36,
    name: "Kari Waters",
    gender: "female",
  },
];
function filterUsers(arr, key, value) {
  let res = [];
  let someVariable;
  if (!arr || !key || !value) {
    return new Error("Error message");
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] == value) {
      someVariable = arr[i];
      res.push(someVariable);
    }
  }
  return res;
}

console.log(filterUsers(users, "age", 37));

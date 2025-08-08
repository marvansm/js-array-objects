//! 1. task

// let a = [2, 3, 4, 3, 5, 6, 7, 8, 9, 10, 18, 19, 20];

// function SumNumbers(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(SumNumbers(a));

//! 2.task

// let b = [3, 7, 2, 9, 1];

// function theGreatestNumber(arr) {
//   let sort = arr.sort((a, b) => b - a);
//   return sort[0];
// }

// console.log(theGreatestNumber(b));

//! 3.task

// let c = [3, 7, 2, 9, 1, 6, 8, 9, 345, 123, 213, 233, 234, 2342];
// let reversedArray = [];

// function reversedNumbers(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArray.push(arr[i]);
//   }
//   return reversedArray;
// }

// console.log(reversedNumbers(c));

//! 4.task

// let d = [1, 2, 3, 4, 5, 6];

// function evenNumbers(arr) {
//   let evens = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evens.push(arr[i]);
//     }
//   }
//   return evens;
// }

// console.log(evenNumbers(d));

//! 5.task

// let data = { name: "Ali", age: 25, city: "Baku", prof: "dev" };

// function calculateKeys(key) {
//   console.log("Number of keys:", Object.keys(key).length);
// }

// calculateKeys(data);

//! 6.task

// let numberValues = { a: 10, b: "hello", c: 20, d: 30 };

// function sumNumberValues(obj) {
//   let numbers = Object.values(obj);
//   if (numbers === "number") {
//     numbers.reduce(
//       (accumulator, currentValue) => accumulator + currentValue,
//       0
//     );
//   }

// }

// sumNumberValues(numberValues);

//! 7.task

// let sameNumbers = [1, 2, 3, 3, 4, 5, 6, 6, 8, 8, 9, 10, 11, 12, 12, 13, 14];

// function deleteSameNumbers(arr) {
//   return [...new Set(arr)];
// }

// console.log(deleteSameNumbers(sameNumbers));

//! 8.task

// let dataOne = [1, 2, 3, 4, 5, 6];
// let dataTwo = [2, 5, 6, 9, 10, 23];

// function deleteDublicateNumbers(arr1, arr2) {
//   let dublicate = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         dublicate.push(arr1[i]);
//       }
//     }
//   }
//   console.log("Dublicate numbers", dublicate);
// }

// deleteDublicateNumbers(dataOne,dataTwo)

//! 9.task

// let a = [1, 2, 3, 4, 5];

// function evenOrOdd(arr) {
//   let even = [];
//   let odd = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       even.push(arr[i]);
//     } else {
//       odd.push(arr[i]);
//     }
//   }
//   console.log("Evens:", even);
//   console.log("Odds:", odd);
// }

// evenOrOdd(a);

//! 10.task

//! 11. task
// let a = { a: 1, b: 2 };
// let b = { b: 3, c: 4 };

// function mergedObjects(obj1, obj2) {
//   let result = Object.assign({}, obj1, obj2);
//   console.log(result);
// }

// mergedObjects(a, b);

//! 12. task

//! 13. task

// let nums = [4, 1, 2, 1, 2];

// function singleNumber(arr) {
//   arr.sort((a, b) => a - b);

//   for (let i = 0; i < arr.length; i += 2) {
//     if (arr[i] !== arr[i + 1]) {
//       return arr[i];
//     }
//   }
// }

// console.log(singleNumber(nums));

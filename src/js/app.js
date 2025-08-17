//! 1.task

// function countWords(word) {
//   if (typeof word === "string") {
//     let words = word.trim().split(/\s+/);
//     return words.length;
//   }
//   return 0;
// }
// console.log(countWords("salam pf-502 qrupu"));

//! 2.task

// function factorial(num) {
//   let count = 1;
//   for (let i = 1; i <= num; i++) {
//     count = count *= i;
//   }
//   return count;
// }
// console.log(factorial(5));

//! 3.task

// let dataOne = [1, 2, 3, 4, 5, 6];
// let dataTwo = [2, 5, 6, 9, 10, 23];

// function deleteDublicateNumbers(arr1, arr2) {
//   let result = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (!arr2.includes(arr1[i])) {
//       result.push(arr1[i]);
//     }
//   }

//   for (let j = 0; j < arr2.length; j++) {
//     if (!arr1.includes(arr2[j])) {
//       result.push(arr2[j]);
//     }
//   }

//   return result;
// }

// console.log(deleteDublicateNumbers(dataOne, dataTwo));

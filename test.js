/*
 Problem 1 (Filter Firstname and lastname and store it in to array)
 -------------------------------------------------------------------

const input1 = [
  { firstName: "john", lname: "Doe" },
  { firstName: "Patrick", lname: "Jane" },
];

const output = input1.reduce((acc, val) => {
  for (const key in val) {
    acc[key] = [...(acc[key] || ""), val[key]];
  }
  return acc; 
}, {});

console.log(output);

*/

/*
Problem 2 (Arrange the array in assending Order in O(n^2) time complexity)
==========================================================================

function arrange(arr) {
  for (let i = 0; i < arr.length; i++) {
    let outerElem = arr[i]; // 2
    for (let j = i + 1; j < arr.length; j++) {
      let innerElem = arr[j]; // 1

      if (outerElem > innerElem) {
        arr[i] = innerElem;
        arr[j] = outerElem;
        outerElem = arr[i];
        innerElem = arr[j];
      }
    }
  }
  return arr;
}
const arr = [2, 1, 5, 4, 3];
const res = arrange(arr);
console.log(res);

*/

/*
Problem 3 (Arrange the array in assending Order in O(n) time complexity)
========================================================================

const arr = [2, 1, 5, 4, 3];
let obj = {};

for (const elem of arr) {
  obj[elem] = elem;
}
console.log(Object.values(obj)[0]);

*/

/*
Problem 4 (Find the smallest element from the array O(n) time complexity)
========================================================================

const arr = [2, 1, 5, 4, 3];
let smallest = arr[0];
let largest = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
   if (arr[i] > largest) {
    largest = arr[i];
  }
}

console.log(smallest, largest);
*/

/*
Problem 5 (Find the repeatation of element from string with O(n) time complexity)
=================================================================================

let str = "sajkjwhkwjgkjwngkwjngkjwrngwknfkafnkafnbfjahbfjabfjdjad";
let obj = {};

for (const elem of str) {
  obj[elem] = (obj[elem] || 0) + 1;
}
console.log({obj})

*/

/*
Problem 6 (Find the repeated element from string with O(n) time complexity)
=================================================================================

let str = "sajkjwhkwjgkjwngkwjngkjwrngwknfkafnkafnbfjahbfjabfjdjad";
let obj = {};

for (const elem of str) {
  obj[elem] = (obj[elem] || 0) + 1;
}
let arra = [];
for (const key in obj) {
  if (obj[key] !== 1) {
    arra.push(key);
  }
}

console.log(arra);  // ['a', 'j', 'k', 'w', 'h', 'g', 'n', 'f', 'b', 'd']

*/
/*
Problem 6 
=================================================================================

const finalValueAfterOperations = function (arr) {
  let val = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "X++" || arr[i] === "++X") {
      val += 1;
    } else if (arr[i] === "X--" || arr[i] === "--X") {
      val -= 1;
    }
  }

  return val;
};
const arr = ["--X", "++X", "X++"];
let res = finalValueAfterOperations(arr);
console.log({ res });

*/

/*
Problem 7 () 
=================================================================================
Given an Array with length of 5, list out all posible combination with its 4 element find the minimm and max 


let arr = [1, 4, 3, 2, 5];
const { min, max } = findMinMax(arr);
const sum = sumOfArray(arr);

const minSumOfCombinationArr = sum - max;
const maxSumOfCombinationArr = sum - min;

console.log({ minSumOfCombinationArr, maxSumOfCombinationArr });

function sumOfArray(arr) {
  let sum = 0;
  for (const elem of arr) {
    sum += elem;
  }
  return sum;
}
function findMinMax(arr) {
  let min = arr[0],
    max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return { min, max };
}

// CORE

let combinationOfArr = [];

for (let i = 0; i < arr.length; i++) {
  const newArr = [...arr];
  const index = newArr.indexOf(arr[i]);
  newArr.splice(index, 1);
  combinationOfArr[i] = newArr;
}

const resultSum = [];

for (let i = 0; i < combinationOfArr.length; i++) {
  const sum = findSum(combinationOfArr[i]);
  resultSum[i] = sum;
}

let min = resultSum[0];
let max = resultSum[0];
for (let i = 1; i < resultSum.length; i++) {
  if (resultSum[i] < min) {
    min = resultSum[i];
  }
  if (resultSum[i] > max) {
    max = resultSum[i];
  }
}
console.log({ min, max });
function findSum(arr) {
  let sum = 0;
  for (const elem of arr) {
    sum += elem;
  }
  return sum;
}
*/

/*
Problem 8 (find the unique element from interger of array) 
=========================================================================================

let arr = [4, 5, 10, 9, 21, 4, 10];

function findDuplicate(arr) {
  let uniqueElem = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count += 1;
      }
    }
    if (count === 1) {
      uniqueElem.push(arr[i]);
    }
    count = 0;
  }
  return uniqueElem;
}
const res = findDuplicate(arr);
console.log({ res });

*/

/*

Problem 9 (find the unique element from String) 
=========================================================================================

const str = "anand";

function findUnqiueStr(str) {
  let uniqueElem = "";
  for (let i = 0; i < str.length; i++) {
    let sum = 0;
    for (let j = 0; j < str.length; j++) {
      if (str.charCodeAt(i) === str.charCodeAt(j)) {
        sum += 1;
      }
    }
    if (sum === 1) {
      uniqueElem += str[i];
    }
  }
  return uniqueElem;
}

const res = findUnqiueStr(str);
console.log({ res });

*/

/*
Problem 10 (palindrome) 
==================================================
let str = "abba";

function Ana(str) {
  let res = false;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] === str[str.length - 1 - i]) {
      res = true;
    } else {
      res = false;
    }
  }
  return res;
}

const res = Ana(str);
console.log({ res });
*/

/*
Problem 11 ( 1. Right Triangle Pattern) 
==================================================
   *
  **
 ***
****

let n = 4;

let str = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    str += " ";
  }

  for (let k = 1; k <= i; k++) {
    str += "*";
  }

  str += "\n";
}
console.log(str);

Output
   *
  **
 ***
****

*/

/*
Problem 11 ( 2. star Printing) 
==================================================
*****
*   *
*   *
*   *
*****

let n = 5;
let star = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i === 1 || i === n) {
      star += "*";
    } else {
      if (j > 1 && j < n) {
        star += " ";
      } else {
        star += "*";
      }
    }
  }
  star += "\n";
}
console.log(star);

Output
------
*****
*   *
*   *
*   *
*****

*/

/*
Problem 11 ( 3. Left Triangle Pattern) 
==================================================
*
**
***
****
*****


let n = 5;
let star = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);

*
**
***
****
*****

*/

/*
Problem 11 ( 4. Square Star Pattern) 
==================================================

let n = 5;
let star = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);

Output
-------

*****
*****
*****
*****
*****

*/

/*
Problem 11 ( 5. Downward Triangle Star Pattern) 
==================================================

*****
****
***
**
*


let n = 5;
let star = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);

*/

/*
Problem 11 ( 6. Hollow Triangle Star Pattern) 
==================================================

*
**
* *
*  *
*   *
******

let n = 5;
let star = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    if (i === n) {
      star += "*";
    } else {
      if (j === 1 || j === i) {
        star += "*";
      } else {
        star += " ";
      }
    }
  }
  star += "\n";
}
console.log(star);

*/

/*
Problem 11 ( 7. Pyramid Pattern Star) 
==================================================
    *
   ***
  *****
 *******
*********


let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let k = 1; k <= n - i; k++) {
    string += " ";
  }
  for (let j = 0; j < 2 * i - 1; j++) {
    string += "*";
  }
  string += "\n";
}

console.log(string);
*/

/*
Problem 11 ( 8. Reversed Pyramid Star Pattern) 
==================================================

*********
 *******
  *****
   ***
    *


let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  for (let j = 1; j <= i; j++) {
    string += " ";
  }
  for (let k = 1; k <= 2 * n - 1 - 2 * i; k++) {
    string += "*";
  }
  string += "\n";
}

console.log(string);
*/

/*
Problem 11 ( 9. Hollow Pyramid Star Pattern) 
==================================================
    *
   * *
  *   *
 *     *
*********

let n = 10;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    if (i === n) {
      string += "*";
    } else {
      if (j > 1 && j < 2 * i - 1) {
        string += " ";
      } else {
        string += "*";
      }
    }
  }
  string += "\n";
}

console.log(string);

Problem 11 ( 10. Diamond Pattern) 
==================================================

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
 
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let k = 1; k <= n - i; k++) {
    string += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    string += "*";
  }
  string += "\n";
}
// for downside

for (let i = 1; i <= n - 1; i++) {
  for (let j = 1; j <= i; j++) {
    string += " ";
  }
  for (let k = 1; k < 2 * (n - i); k++) {
    string += "*";
  }
  string += "\n";
}

console.log(string);

function processData(input) {
  //Enter your code here
  let string = "";
  for (let i = 1; i <= input; i++) {
    for (let j = i; j <= input; j++) {
      string+= "*"
    }
    string += "\n";
  }
  console.log(string);
}

processData(5);



        *
        ***
        *****
        *******

A
A B
A B C
A B C D
A B C D E

A              
A B A 
A B C B A 
A B C D C B A 
A B C D E D C B A


function processData(input) {
  //Enter your code here
  let string = "";
  for (let i = 1; i <= input; i++) {
    let sum = 65;
    for (let j = 1; j <= 2*i -1; j++) { 
      if (j <= i) {
        string+= String.fromCharCode(sum)
        sum= sum + 1;
      }if(j > i){
        sum = sum - 1;
        string+= String.fromCharCode(sum)
      }
      // string+= "*"
    }
    string += "\n";
  }
  console.log(string);
}

processData(5);

function processData(arr) {
  //Enter your code here
  let n = arr.length;
  for(let i=0; i<n; i++){
      let count = 0;
     for(let j=0; j<n; j++){
       if(arr[i] === arr[j]){
           count++;
       }
     }
      if(count > 1){
       console.log(arr[i]);
      }
      count = 0;
  }
} 

processData([5, 4, 10, 9, 9, 10])


*/

// const m = 2;
// const n = 3;

// let matrix1 = [
//   [1, 2, 4],
//   [4, 5, 6],
// ];

// let matrix2 = [
//   [1, 5, 4],
//   [7, -3, -6],
// ];

// let sum = 0;
// for (let i = 0; i < m; i++) {
//   for (let j = 0; j < n; j++) {
//     matrix1[i][j] += matrix2[i][j];
//   }
// }

// console.log({ matrix1 });

let matrix1 = [
  [1, 2],
  [4, 6],
];

console.log(matrix1[0][0]);
console.log(matrix1[1][0]);

console.log(matrix1[0][1]);
console.log(matrix1[1][1]);

let sum = 0;
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(matrix1[j][i]);
  }
}

//
//Dublicate elem

// const arr = [1, 2, 2, 3, 3, 5, 5, 7];

// function arrange(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let outerElem = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       let innerElem = arr[j];
//       if (arr[i] > arr[j]) {
//         arr[i] = innerElem;
//         arr[j] = outerElem;
//         outerElem = arr[i];
//         innerElem = arr[j];
//       }
//     }
//   }
//   return arr;
// }

// console.log(arrange(arr));

// let obj = {};

// for (const elem of arr) {
//   obj[elem] = elem;
// }

// const uniqueElem = arr.filter((elem, i) => {
//   return arr.indexOf(elem) === i;
// });

// console.log({ uniqueElem });
// console.log(Object.values(obj));

// console.log([...new Set(arr)]);

// clousers

// function x() {
//   const a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }

// let z = x();

// z();

// call apply bind
// when ever you want to pass a custom object as a current argument to a function.

// let o = {
//   x: 10,
// };

// function f1(a) {
//   console.log(this.x + a);
// }

// let y = f1.bind(o, 2);
// console.log(y());

// program to check if a number is prime or not

// take input from the user
// const number = 23;
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//   console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {
//   // looping through 2 to number-1
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(`${number} is a prime number`);
//   } else {
//     console.log(`${number} is a not prime number`);
//   }
// }

// // check if number is less than 1
// else {
//   console.log("The number is not a prime number.");
// }

// const number = 23;
// let isPrime = true;

// if (number === 1) {
//   console.log("1 is prime and composite num");
// } else if (number > 1) {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(number, "is prime");
//   } else {
//     console.log(number, "is not prime");
//   }
// }

// const arr = [2, 2, 1, 1, 3, 5, 7, 85];

// console.log([...new Set(arr)].sort((a, b) => a - b));

// let obj = {};

// const input1 = [
//   { firstName: "john", lname: "Doe" },
//   { firstName: "Patrick", lname: "Jane" },
// ];

// const output = input1.reduce((acc, val) => {
//   for (const key in val) {
//     acc[key] = [...(acc[key] || ""), val[key]];
//   }
//   return acc;
// }, {});

// console.log(output);

// const arr = [
//   { firstName: "john", lname: "Doe" },
//   { firstName: "Patrick", lname: "Jane" },
// ];

// const result = arr.reduce((acc, nextVal) => {
//   for (const key in nextVal) {
//     acc[key] = [...(acc[key] || ""), nextVal[key]];
//   }
//   return acc;
// }, {});

// console.log({ result });

// let arr = [[[[[1]]]]];

// const res = arr.flat(Infinity);
// console.log(res);

// function flatten(input) {
//   const stack = [...input];
//   const res = [];
//   while (stack.length) {
//     console.log("leng", stack.length);
//     // pop value from stack
//     const next = stack.pop();
//     if (Array.isArray(next)) {
//       // push back array items, won't modify the original input
//       stack.push(...next);
//     } else {
//       res.push(next);
//     }
//   }
//   // reverse to restore input order
//   return res.reverse();
// }

// const arr = [1, 2, [3, 4, [5, 6]]];
// console.log(flatten(arr));

// function start(length) {
//   let n = 5;
//   let string = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < i; j++) {
//       string += "*";
//     }
//     string += "\n";
//   }
//   console.log(string);
// }

// start(5);

// function flatternMAp(arr) {
//   const stack = [...arr];
//   const res = [];
//   while (stack.length) {
//     const next = stack.pop();
//     if (Array.isArray(next)) {
//       stack.push(...next);
//     } else {
//       res.push(next);
//     }
//   }
//   return res.reverse();
// }

// // const arr = [1, 2, [3, 4, [5, 6]]];
// const arr = [[[[[[[1]]]]]]];

// let res = flatternMAp(arr);

// console.log({ res });

// let arr = [1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.splice(arr.findIndex((elem) => elem === 5) + 1, 0, 10);
// console.log({ arr });
// const res = arr.filter((elem, i) => {
//   return arr.indexOf(elem) === i;
// });
// console.log({ res });

// function uniqueElem(arr) {
//   let uniqueElemArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count = count + 1;
//       }
//     }
//     console.log(count);
//     if (count > 0) {
//       if (!uniqueElemArray.includes(arr[i])) {
//         uniqueElemArray.push(arr[i]);
//       }
//     }
//     count = 0;
//   }
//   return uniqueElemArray;
// }

// let arr = [1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];

// const res = uniqueElem(arr);
// console.log({ res });

// function x() {
//     const a = 7;
//     function y() {
//         console.log(a)
//     }
//     return y
// }

// let z = x();
// console.log(z);

// let a;
// console.log(a);

// let b = null;
// console.log(b);

// for (var i = 0; i < 5; i++) {}
// console.log(i);

// const a = 10;
// if (true) {
//   const a = 100;
//   console.log("inside", a);
// }

// console.log("outside", a);

// let a = 5;
// let b = 10;

// console.log(a + b);

// let c = 15;
// let d = 20;
// console.log(c + d);

// let e = 90;
// let f = 100;
// console.log(e + f);

// function add(a, b) {
//   console.log(a + b);
// }
// add(5, 10);
// add(15, 20);
// add(90, 100);

// let arr = [1, 2, 34];
// access array
// console.log(arr); //[1, 2, 34]
// access first variable
// console.log(arr[0]); // 1
// access last variable
// console.log(arr[2]); // 34
// length
// console.log("array length", arr.length);
// find last element of n length array
// console.log("last elem", arr[arr.length - 1]);
// arr.length == 3
// arr.length -  1 == 2
// arr[2] === 34

// delete
// delete arr[arr.length - 1];
// console.log(arr);\

//   map, filter, reduce

// Map

// let arr = [1, 2, 3, 4, 5];
// eslint-disable-next-line array-callback-return
// let addedElem = arr.map((elem, i) => {
//   return elem * 10;
// });
// console.log("manipulated", addedElem);
// console.log("original", arr);

// filter
// find element which is greater then 2

// let res = arr.filter((elem, i) => {
//   return elem > 2;
// });

// console.log(res);
// console.log(arr);

// let num = 10;

// const incNum = () => num++;
// const incParseNum = (number) => number++;

// const num1 = incNum();
// const num2 = incParseNum(num);

// console.log(num1, num2);

// Reduce

// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((acc, currentVal) => {
//   console.log({ acc, currentVal });
//   return acc + currentVal;
// }, 0);

// console.log({ result });
// { acc: 0, currentVal: 1 }
// { acc: 1, currentVal: 2 }
// { acc: 3, currentVal: 3 }
// { acc: 6, currentVal: 4 }
// { acc: 10, currentVal: 5 }
// { result: 15 }

// multiply all with 10 and return new arr
// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((acc, currentVal) => {
//   console.log({ acc, currentVal });
//   acc.push(currentVal * 10);
//   return acc;
// }, []);

// console.log({ result });

// { acc: [], currentVal: 1 }
// { acc: [ 10 ], currentVal: 2 }
// { acc: [ 10, 20 ], currentVal: 3 }
// { acc: [ 10, 20, 30 ], currentVal: 4 }
// { acc: [ 10, 20, 30, 40 ], currentVal: 5 }
// { result: [ 10, 20, 30, 40, 50 ] }

// Split ==>It is used to break the string and convert it in to array

// let arr = ["s", "a", "j", "j", "a", "d"];

// let res = arr.reduce((acc, currentVal) => {
//   return acc + currentVal;
// }, "mohammad");

// console.log({ res });
// function processData(input) {
//   //Enter your code here
//   let output = "";
//   for (let i = 1; i <= input; i++) {
//     for (let l = 1; l < input - i + 1; l++) {
//       output += " ";
//     }
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         if (i===input-1 && j === input-1) {
//             output += "P";
//         }else if(i===input){
//            if (j === input) {
//             output+= "N"
//            }else if(j === input - 2){
//             output+="P"
//            }else if(j === input + 2){
//             output+="C"
//            }else{
//             output+= "*"
//            }
//         }else{
//             output+= "*"
//         }
//     }
//     output += "\n";
//   }
//   const input2 = input - 1;
//   for (let i = 1; i <= input2; i++) {
//     for (let k = 1; k <= i; k++) {
//       output += " ";
//     }
//     for (let j = 1; j <= 2 * input2 - 2 * i + 1; j++) {
//         if(i===1 && j=== input2){
//             output += "C";
//         }else{
//             output+= "*"
//         }
//     }
//     output += "\n";
//   }
//   console.log(output);
// }
// let res = processData(7);
// console.log(res);

// function processData(inp) {
//   //Enter your code here
//   const input = Number(inp);
//   let output = "";
//   let charCodeStart = 65;
//   let charCodeEnd = 90;
//   let checker = true;
//   for (let i = 1; i <= input; i++) {
//     for (let j = 1; j <= i; j++) {
//       if (checker) {
//         output += String.fromCharCode(charCodeStart);
//         charCodeStart += 1;
//       } else {
//         output += String.fromCharCode(charCodeEnd);
//         charCodeEnd -= 1;
//       }
//       checker = !checker;
//     }
//     output += "\n";
//   }
//   console.log(output);
// }

// processData(5);
// https://jsonplaceholder.typicode.com/posts

// create a function that will take array as an parameter and return the sum of elements of array
// let arr = [1, 2, 3, 4, 5];

// function f1(arr) {
//   let res = arr.reduce((acc, currVal) => {
//     return acc + currVal;
//   });
//   return res;
// }
// let res = f1(arr);
// console.log({ res });

// let Promise1 = new Promise(function (resolve, reject) {
//   resolve("This is resolved");
//   //   reject("This is rejected");
// });

// Promise1.then((res) => console.log("SUCCESS", res)).catch((err) =>
//   console.log("ERROR", err),
// );

// console.log({ Promise1 });

// Promise1.then((res) => {
//   console.log(res);
// }).catch((err) => console.log({ err }));

// Asynchronous

// async function f1(params) {}

// let res = f1();
// console.log(res);
/*
let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved in 1 sec");
  }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved in 2 sec");
  }, 1000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved in 3 sec");
  }, 1000);
});

Promise.all([promise1, promise2, promise3]).then((res) => console.log(res));
*/

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 1 resolved in 1 sec");
//   }, 1000);
// });

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Promise 2 resolved in 2 sec");
//   }, 1000);
// });

// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 3 resolved in 3 sec");
//   }, 1000);
// });
// Promise.allSettled([promise1, promise2, promise3]).then((res) =>
//   console.log(res),
// );

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     setTimeout(() => {
//       setTimeout(() => {
//         setTimeout(() => {
//           setTimeout(() => {
//             setTimeout(() => {
//               setTimeout(() => {
//                 resolve("Delivered");
//               }, 1000);
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// });
// console.log(promise1);

let arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
];
for (let i = 0; i < arr[0].length; i++) {
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j][i];
    // console.log(arr[j][i]);
  }
  console.log({ sum });
}

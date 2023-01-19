// 1. Do the below programs in anonymous function & IIFE


//     Print odd numbers in an array:

//Annonymous Function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let resArr = [];
// let oddNum = function (arr){
//  for (let value of arr){
//   if (value%2!=0){
//     resArr.push (value);
//     console.log (value);
//   }
//  }
//  return resArr;
// }
// console.log(oddNum(arr));

//IIFE:

// (function (arr){
//   for (let value of arr){
//    if (value%2!=0){
//      resArr.push (value);
//      console.log (value);
//    }
//   }
//   return console.log(resArr);
//  })(arr);

// ====================================

// b. Convert all the strings to title caps in a string array:

// let strArr = ["nitro","kari","manoj","siva"];

//Annonymous function
// let titleCap = function (arr){
//   let resultArr=[];
//   for (let key of arr){
//     let splittedArray = key.split("");
//     splittedArray[0] = splittedArray[0].toUpperCase();
//     let titleCap = splittedArray.join("");
//     resultArr.push(titleCap);
//   }
//   return resultArr;
// }
// console.log(titleCap(strArr));

// IIFE:
// (function (arr){
//   let resultArr=[];
//   for (let key of arr){
//     let splittedArray = key.split("");
//     splittedArray[0] = splittedArray[0].toUpperCase();
//     let titleCap = splittedArray.join("");
//     resultArr.push(titleCap);
//   }
//   return console.log(resultArr);
// })(strArr);


// =========================================

// c.Sum of all numbers in an array;
// let num = [21, 23, 24, 26, 28, 54, 56, 66, 88];
// Anonymous Function:
// let sum = function(arr){
//    let sum = 0;
//    for (let key of arr){
//     sum += key;
//    }
//    return sum;
// }

// console.log(sum(num));

//IIFE:
// (function(arr){
//   let sum = 0;
//   for (let key of arr){
//    sum += key;
//   }
//   return console.log(sum);
// })(num);


// =================================================


//d. Return all the prime numbers in an array:
// let data = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// Common Function:
// let nitro = function(x){
//   if(x<=1){
//     return false;
//   }
//   else{
//     for (let i=2; i<x; i++){
//       if(x%i===0){
//         return false;
//       }
//     }
//     return true;
//   }
// }
//Annonymous Function:
// function primeArr (arr){
//   let result  = [];
//   arr.forEach(function(y) {
//     let prime = nitro(y);
//     if (prime){
//       result.push(y);
//     }
//   }
//   );
//   return result;
// }
// console.log(primeArr ([1,2,3,4,5,6,7,8,9]));

//IIFE
// (function primeArr (arr){
//   let result  = [];
//   arr.forEach(function(y) {
//     let prime = nitro(y);
//     if (prime){
//       result.push(y);
//     }
//   }
//   );
//   return console.log(result);
// })([1,2,3,4,5,6,7,8,9]);


// ====================================================

// e. Return all the Pallindromes in an array:

// let pallin = ["madam", "sir", "kayak", "mom",
//   "deified", "Hello", "rotator", "repaper", "deed", "peep", "wow", "noon"];

//Anonymous Function:
// let pallindromeArr = function (arr) {
//   let res = [];
//   for (let value of arr){
//     let x = value.split("").reverse().join("");
//     if (value === x){
//       res.push(value);
//     }
//   }
//   return res;
// }
// console.log(pallindromeArr(pallin));

//IIFE:
// (function (arr) {
//   let res = [];
//   for (let value of arr) {
//     let x = value.split("").reverse().join("");
//     if (value === x) {
//       res.push(value);
//     }
//   }
//   return console.log(res);
// })(["alala", "appa", "amma", "civic", "bro", "hiih", "friend"]);

// ===================================================
// f. Return median of two sorted Arrays of the same size:
// let a = [1,2,34,4,56,67,79];
// let b = [101,156,177,198,250];
// Anonymous function:
// function median(a,b){
//   let c = a.sort(function(a,b){return a-b;});
//   let d = b.sort(function(a,b){return a-b;});
//   let aMedian= (c[0]+c[c.length-1])/2;
//   let bMedian= (d[0]+d[d.length-1])/2;
//   let median = (aMedian+bMedian)/2;
//   return median;
// }
// console.log(median(a,b));

// IIFE
// (function median(a,b){
//   let c = a.sort(function(a,b){return a-b;});
//   let d = b.sort(function(a,b){return a-b;});
//   let aMedian= (c[0]+c[c.length-1])/2;
//   let bMedian= (d[0]+d[d.length-1])/2;
//   let median = (aMedian+bMedian)/2;
//   return console.log(median);
// })([1,2,34,4,56,67,79],[101,156,177,198,250]);


// =============================================
// g.Remove duplicates from an array:
// let list = [1,2,2,3,4,5,6,6,6,7,8,8];
// let duplicateRemoval = function (arr){
//   let res = [];
//   let n = arr.length;
//   for (let i = 0 ; i<n; i++){
//     if(res.indexOf(arr[i])===-1){
//           res.push(arr[i]);
//     }
//   }
//   return res;
// }
// console.log(duplicateRemoval(list));

//IIFE:
// (function (arr){
//   let res = [];
//   let n = arr.length;
//   for (let i = 0 ; i<n; i++){
//     if(res.indexOf(arr[i])===-1){
//           res.push(arr[i]);
//     }
//   }
//   return console.log(res);
// })(list);

// ===========================================
// h.Rotate an array by K times:
//Anonymous Function:

// let rotate = function (arr, k){
//    for (let i=1; i<=k; i++){
//       arr.push(arr.shift());
//    }
//    return arr;
// }
// console.log(rotate([21,23,25,27,29,30],2));

//  IIFE:

// (function (arr,k){
//   for (let i=1; i<=k; i++){
//     arr.push(arr.shift());
//   }
//   return console.log(arr);
// })([21,23,25,27,29,30],2);
// =======================================
//Below programs are in arrow functions:
// a.Print odd numbers in an array:
// let num = [10,11,12,13,14,1,2,4];
// let result = (arr)=> {
//   let odd= [];
//   let n = arr.length;
//   for (let i=0; i<n; i++){
//     if (arr[i]%2!==0){
//       odd.push(arr[i]);
//     }
//   }
//   return odd;
// }

// console.log(result(num));
// ============================================
// b.Convert all the strings to titlecaps in a Array.
// let str = ["nitro", "kari", "thanaraj","leelevathi"];

// let titleCaps = (arr) => {
//   let res = [];
//   let n = arr.length;
//   for (let i=0; i<n; i++){
//     let ele = arr[i].split("");
//     ele[0] = ele[0].toUpperCase();
//     res.push(ele.join(""));
//   }
//   return res;
// }
// console.log(titleCaps(str));
// ========================================
// c.Sum of all numbers in an array:

// let num = [10,11,12,13,14,1,2,4];

// let sum = (arr) => {
//   let total = 0;
//   for (let i=0; i<arr.length; i++){
//     total += arr[i];
//   }
//   return total;
// }

// console.log(sum(num));
// ===========================================
// d.Return all the prime numbers in Array;
// let isPrime = (ele) => {
//   if (ele<=1){
//     return false;
//   }
//   else{
//     for (let i=2; i<ele; i++){
//       if(ele%i===0){
//         return false;
//       }
//     }
//     return true;
//   }
// }

// let primeArr = (arr) => {
//   let prime = [];
//   let n = arr.length;
//   for (let i=0; i<n; i++){
//     if (isPrime(arr[i])){
//     prime.push(arr[i]);
//     }
//   }
//   return prime;
// }
// console.log(primeArr([1,2,3,4,5,6,7,8,10,11,12,13]));
// =======================================
// e. Return all the pallindromes in an array:
// let pallin = ["madam", "sir", "kayak", "mom",
//   "deified", "Hello", "rotator", "repaper", "deed", "peep", "wow", "noon"];

//   let getPallindrome = (arr) => {
//     let result = [];
//     let n = arr.length;
//     for (let i=0; i<n; i++){
//       let ele = arr[i].split("").reverse().join("");
//       if(arr[i]===ele){
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   }

//   console.log(getPallindrome(pallin));






























// let x = ["a","b","c","d"];
// let y = 2;
// for (let i=0; i<2;i++){
//       x.unshift(x.pop());
// }
// console.log(x);

// let x = ["a","b","c","d"];
// let y = ["d","a","b","c"];
// for(let i=0; i<x.length; i++){
//     if (x.join()===y.join()){
//       console.log(i);
//       break;
//     }
//     else{
//       x.unshift(x.pop());
//     }
// }

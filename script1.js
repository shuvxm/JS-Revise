const a = 12;
console.log(a);
// hoisting - variable and functions are hoisted which means their declaraion of varibale is moved on top of code
console.log(b); // undefined , Hoisting concept
var b = 'shubham'
console.log(b);
// var ba;
// console.log(ba)
// ba='sk';

// types in js
// primitive and reference

// primitive = number, string, null, undefined, boolean
// reference = [] () {}

// aisi koi bhi value jisko copy karne par real 
// copy nahi hota, balki us main value ka reference pass hojata hai,
// use hum reference value kahte hai, aur jiska copy
// karne pe real copy ho jaye voh value primitive  type value hoti hai

// primitive example
var x =12;
var y = x;
y = y+2; // y is increment by 2 but x is not changing

// reference example
var ex = [1,2,3,4,5];
var ex1 = ex;
ex1.pop(); // here both ex, ex1 value will be same bcz ex1 is taking the reference value of ex so it will reflect on both variable



//
const pi = Math.PI;
console.log(pi);

// array, push, pop, unshift, shift , splice

var arr = [12,23,34,56,67,78,89,90]
// arr.shift() // it will delete first value
// arr.unshift(345)  // this value will add at first/ oth index
// arr.splice(3);  // this will remove the value from 3rd index to all
arr.splice(3,1)


// Object -> store description for one individual

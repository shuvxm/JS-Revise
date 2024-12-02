// execution context is a comtainer where the function's -
// code is executed and it's created whenever a function is called, it contains 3 things
// variable, function and lexical environment

// lexical environment/  scope => individual function kin chizon
// ko access kar skta hai and kinko nahi

// spred operator (...)
// used to copy the all value of arr
var arr = [12, 23, 34, 45, 56, 67, 78, 89, 90];
var copyarr = [...arr];
copyarr.pop();

var obj = { name: "shubh" };
var copyobj = { ...obj };

// truthy and falsy => this is differnt from true false
// falsy values yea hota js mein = 0 false null undefined null NaN document.all
// truthy values are remaing of falsy
if (-1) {
  //   console.log("print true");
} else {
  //   console.log("print false");
}

// forEach
var arr1 = [12, 23, 34, 45, 56, 67, 78, 89, 90];
arr1.forEach(function (val) {
  //   console.log(val + 2);
});

// forin => object par loop karne ke liye hota forin loop
var obj1 = {
  name: "shubham",
  age: 24,
  city: "blr",
};
for (var key in obj1) {
  //   console.log(key, obj1[key]);
}

// do-while loop
var val = 12;
do {
  // console.log(val);
  val++;
} while (val < 15);

// call back function
setTimeout(function () {
  console.log("after 2 second, it will print");
}, 2000);

// first class function
function abcd(a) {
  a();
}
abcd(function () {
  console.log("hey");
});

// typeof
var x = [12, 23, 34, 45, 56, 89];

// How we can make negative indexes arrays in JS
x[-1] = 343; // output is [1, 2, 3, 4, -1: 343] so it means arrays is storing inside js as object by seeing output
//  bcz key value pairs if we store value at negative index
// this x is an array but in js it will convert -
// to object, it will store like this example below:-
// x = {
//   0: 12,
//   1: 23,
//   2: 34,
//   3: 45,
//   4: 56,
//   5: 89,
// };
// so it means typeof [] is 'object'
// and typeof {} is also 'object'

// then how will we check which is array or not, or object or not
// Array.isArray([]) = true
// Array.isArray({}) = false

// how to delete object prop
var obj2 = {
  name: "shubham",
  age: 34,
};
delete obj2.age

let names = "simran das";
console.log(names);

// var es5 js se hai or let const es6 js se hai
// var funcion scope hota hai, mtlv var jis bhi variable me use hua hai voh variable function ke andar declare hai tho throught function me use krskte
function sayHello() {
  for (var i = 1; i < 11; i++) {
    console.log(i);
  }
  console.log("---")
  console.log(i);
}
sayHello()

// let braces scope hota hai
function sayHello() {
    for (let i = 1; i < 11; i++) {
      console.log(i);
    }
    // console.log("---")
    // console.log(i); // error
  }
  sayHello()

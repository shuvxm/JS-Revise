let names = "simran das";
console.log(names);

// var es5 version se js me hai or let const es6 js se hai
// var funcion scope hota hai, mtlv var jis bhi variable me use hua hai voh variable function ke andar declare hai tho throught function me use krskte
// var add itself to the window object
function sayHello() {
  for (var i = 1; i < 11; i++) {
    console.log(i);
  }
  console.log("---")
  console.log(i);
}
sayHello()

// let const braces scope hota hai
// let const does not add itself to the window object
function sayHello() {
    for (let i = 1; i < 11; i++) {
      console.log(i);
    }
    // console.log("---")
    // console.log(i); // error
  }
sayHello()

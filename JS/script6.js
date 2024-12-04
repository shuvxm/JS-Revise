// reduce method
const myNums = [1,2,3]

// with normal function
// const myTotal = myNums.reduce( function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0)

// with arrow function
// const myTotal = myNums.reduce( (acc, currval) => {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0)

const myTotal = myNums.reduce( (acc, currval) =>  acc + currval, 0)
console.log(myTotal);
const coding = ["js", "java", "python", "ruby", "go", "cpp"];

// foreach loop
coding.forEach((item) => {
//   console.log(item);
});
// foreach loop: it does not return value
const ab = coding.forEach((item) => {
  // console.log(item)
  return item;
});
// console.log(ab); // it will give undefine because for each loop doesnot return any sort of value

// for loop
for (let i = 1; i < coding.length; i++) {
  // console.log(coding[i]);
}

// filter: always returns value
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = myNums.filter( (num) => num > 4 ) // here no need to write return statement bcz {} not there
const newNum = myNums.filter((num) => {
  return num > 4; // here we should write return keyword bcz curly braces if we put it means its like a scope of object
});
console.log(newNum);



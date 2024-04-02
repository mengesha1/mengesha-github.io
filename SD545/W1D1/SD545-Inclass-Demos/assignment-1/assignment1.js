// assignment -1
//1.Create a function using function declaration named sum with one parameter of Array type, the
//returned result is the sum of all elements which are greater than 20.
function sum(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 20) {
      total = total + arr[i];
    }
  }
  return total;
}

let ar = [1, 30, 21, 16.4];

// console.log(sum(ar))
// 2. Create a function using function expression named getNewArray with one parameter of String
// Array, return a new array which contains all string, length is greater than and equal to 5, and
// contains letter ‘a’.

const getNewArray = function (strarray) {
  let newarr = [];
  for (let i = 0; i < strarray.length; i++) {
    if (strarray[i].length >= 5 && strarray[i].includes("a")) {
      newarr.push(strarray[i]);
    }
  }
  return newarr;
};

let artest = ["mangager", "man", "test", "tanker"];
console.log(getNewArray(artest));

// 3. Implement an arrow function with feature below:
// concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world']

const str = "hi";
const arr = [1, 2, 3];
const str2 = ["Hello", "world"];

const concat = () => {
  return [...str, ...arr, ...str2];
};
console.log(concat());

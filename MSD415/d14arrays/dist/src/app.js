console.log("in app.ts", "sum of [1,2,3] is: ", sum([1, 2, 3]));
/**
 *
 * @param {number} aa is a number
 * @param {number} b is a number
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
export function maxOfThree(aa, b, c) {
    let max = 0;
    if (aa > b && aa > c)
        max = aa;
    else if (b > aa && b > c)
        max = b;
    else
        max = c;
    return max;
} //IMPLEMENT THIS -- DO NOT USE MATH.MAX
/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function sum(arr) {
    let sum = 0;
    for (let ele of arr) {
        sum += ele;
    }
    return sum; //IMPLEMENT THIS 
}
/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function multiply(arr) {
    let product = 0;
    for (let ele of arr) {
        product *= ele;
    }
    return product;
    //IMPLEMENT THIS 
}
/* findLongestWord */
/**
 * takes an array of words and returns the length of the longest one
 * @param {*} arr of words
 * @returns {number} length of longest word
 */
export function findLongestWord(arr) {
    //     let longword: number;
    //     for (let ele of arr){
    //       longword = ele.length;
    //     if (longword > ele.length){
    //         return longword;
    //     } else{
    //         return ele.length;
    //     }
    // }
    return 0;
}
/* 6. Write a function that takes two integers as inputs and returns a 2-dimensional array containing sequential numbers across each row as follows:
describe("generate array", function () {
    const expected33 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected23 = [ [1, 2, 3], [4, 5, 6]];
    const expected21 = [ [1], [2]];
     assert.deepEqual(generateArray(3,3), expected33); */
/**
 *
 * @param {*} rows num rows
 * @param {*} cols num cols
 * @returns {Array} 2d array with entries i + j
 */
export function generateArray(rows, cols) {
    //IMPLEMENT THIS 
    return [[0]];
}

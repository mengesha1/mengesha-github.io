

console.log("in app.ts", "sum of [1,2,3] is: ", sum([1, 2, 3]));
/**
 * 
 * @param {number} aa is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
export function maxOfThree(aa: number, b: number, c: number): number {

    let max: number = 0;
    if (aa > b && aa > c)
        max = aa;
    else if (b > aa && b > c)
        max = b;
    else
        max = c;

    return max;
}  //IMPLEMENT THIS -- DO NOT USE MATH.MAX



/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function sum(arr: number[]): number {
    let sum: number = 0;
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
export function multiply(arr: number[]): number {

    let product: number = 0;
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
export function findLongestWord(arr: string[]): number {
    let longword = 0;
    for (let ele of arr) {
        const currentLength = ele.length
        if (currentLength > longword) {
            longword = currentLength;
        }
    }
    return longword;
}
// //reverse array

function reverseArray(arr: string[]) {
    const arrCopy: string[] = [];
    for (let i: number = arr.length - 1; i >= 0; i--) {
        const valueindex = arr[i];
        arrCopy.push(valueindex);
    }
    return arrCopy;
}
function reverseArrayInPlace(arr: number[]) {
    const arrCopy: number[] = [];
    for (let i: number = arr.length - 1; i >= 0; i--) {
        const valueindex = arr[i];
        arrCopy.push(valueindex);
    }
    return arrCopy;
}
// 

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
export function generateArray(row:number,col:number): number[][] {

    const matrix: number[][] = [];
    let count = 1;
    for (let i = 0; i < row; i++) {
        matrix.push([]);
        for (let j = 0; j < col; j++) {
            matrix[i].push(count);
            count++;
        }
    }
    return matrix;
}
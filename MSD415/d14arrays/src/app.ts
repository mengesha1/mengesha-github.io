
console.log("in app.ts", "sum of [1,2,3] is: ", sum([1, 2, 3]));
/**
 * 
 * @param {number} aa is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
export function maxOfThree(aa: number, b: number, c: number): number {
    if (aa >= b && aa >= c)
        return aa;
    else if (b >= aa && b >=c)
        return b;
    else
        return c;
}  

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function sum(arr: number[]): number {
    let sum = 0;
    for (let ele of arr) {
        sum += ele;
    }
    return sum; 
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function multiply(arr: number[]): number {

    let product = 1;
    for (let ele of arr) {
        product *= ele;
    }
    return product;
    
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

export function reverseArray(arr: string[]) :string[]{
    const arrCopy: string[] = [];
    for (let i = arr.length-1; i >=0; i--) {
        let valueindex = arr[i];
        arrCopy.push(valueindex);
    }
    return arrCopy;
}

export function reverseArrayInPlace(arr: number[]):number[] {
    const arrCopy: number[] = [];
    for(let i = 0; i < Math.floor(arr.length / 2); i++) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];

    // for (let i = arr.length - 1; i >= 0; i--) {
    //     let valueindex = arr[i];
    //     arrCopy.push(valueindex);
    // }
    }
    return arr;
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
export function generateArray(rows:number,cols:number): number[][] {

    const matrix: number[][] = [];
    let count = 1;
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
        for (let j = 0; j < cols; j++) {
            matrix[i].push(count);
            count++;
        }
    }
    return matrix;
}

///////////////////

// //Write a function, double, that takes a number and returns 2 times the number.
// export function doubleNumber(num: number): number {

//     return num * 2;

// }

// //. Write a function times100 that takes a number and returns 100 times the number.function doubleNumber(num:number):number{



// export function hundredTimes(num: number): number {
//     return num * 100;
// }

// export function myMap(numbers: number[], callBack: (n: number) => number): number[] {
//     let funarry: number[] = [];

//     for (let i = 0; i < numbers.length; i++) {
//         funarry.push(callBack[numbers[i]]);
//     }
//     return funarry;
// }
// let arr = [1, 2, 3];
// const out = console.log(myMap(arr, doubleNumber))


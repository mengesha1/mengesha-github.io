/**
 *@returns {number} double the input
 */
export function double(num) {
    return num * 2;
}
/**
 * @returns {number} 100 times the input
 */
export function times100(num) {
    return num * 100;
}
/**
 * @returns {Array} creates a new array with function mapped to each element
 */
export function myMap(numbers, callBack) {
    let funarry = [];
    for (let i = 0; i < numbers.length; i++) {
        funarry.push(callBack[numbers[i]]);
    }
    return funarry;
}
// let arr = [1, 2, 3];
// const out = console.log(myMap(arr, doubleNumber))

/*
a)	Copy an array
b)	Concatenate arrays into a new array
c)	Concatenate an array and a new array element
d)	Use an array as arguments
e)	Use Math.min and Math.max
f)	Use rest operator in function calls
You will need to use generic typing for copyArray and concat.   copyArray generic typing is given below.
Do the same pattern for concat.
*/
export function copyArray(arr) {
    const copyArray = [...arr];
    return copyArray;
}
//b)	Concatenate arrays into a new array
export function concat(arr) {
    let concatArr = [];
    for (const con of arr) {
        concatArr = arr.concat(con);
        //concatArr.push();
    }
    return concatArr;
}
//Concatenate an array and a new array element
export function conctanewArrayElement(arr, newElement) {
    //arr.concat(newElemet);
    return [...arr, newElement];
}
export function findMin(...arr) {
    return arr.reduce((min, current) => (current < min ? current : min), arr[0]);
}
export function findProduct(...arr) {
    return arr.reduce((pro, current) => (current * pro), 1);
}

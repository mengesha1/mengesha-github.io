
/**
 *@returns {number} double the input
 */
 export function double(num:number){
     return num * 2;
}


/**
 * @returns {number} 100 times the input
 */
export function times100(num:number):number{
    return num * 100;
 }


/**
 * @returns {Array} creates a new array with function mapped to each element
 */
export  function myMap(numbers: number[], callBack: (n: number) => number): number[] {
    let funarry: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        funarry.push(callBack(num));
    }
    return funarry;
}
// let arr = [1, 2, 3];
// const out = console.log(myMap(arr, doubleNumber))









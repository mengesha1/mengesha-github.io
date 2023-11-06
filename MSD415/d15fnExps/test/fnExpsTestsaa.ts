function doubleNumber(num: number): number {

    return num * 2;

}

//. Write a function times100 that takes a number and returns 100 times the number.function doubleNumber(num:number):number{



// function hundredTimes(num:number):number{



//       return num * 100;
//      }

function myMap(numbers: number[], callBack: (n: number) => number): number[] {
    let funarry: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        funarry.push(callBack[numbers[i]]);
    }
    return funarry;
}
let arr = [1, 2, 3];
const out = console.log(myMap(arr, doubleNumber))

// 
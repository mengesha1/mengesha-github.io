//difference

ar1 = [10, 20, 30, 40]
ar2 = [10, 20, 20, 20]
function diffArray(arr1, arr2) {
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            sum++;
        }
        sum = sum + (arr1[i]) - (arr2[i]);
    }
    return sum;
}
console.log(diffArray(ar1, ar2))


///matrixMatch(testArr1, testArr2) → [ [1, 1, 0] , [0, 1, 0], [1, 0, 0] ]


function arrayMatch(test1, test2) {
    let arrMatch = [];
    for (let i = 0; i < test1.lenght; i++) {
        let result = [];
        for (let j = 0; j < test1[i].length; j++) {

            if (test1[i][j] === test2[i][j]) {

                result.push(1);

            } else {
                result.push(0);
            }

        }
        arrMatch.push(result);
    }
    return arrMatch;
}
const testArr1 = [[1, 2, 3], [5, 2, 3], [9, 2, 3]]
const testArr2 = [[1, 2, 10], [3, 2, 5], [9, 6, 7]]

console.log(arrayMatch(testArr1, testArr2));


let x ;
let y = null;

console.log(x);
console.log(y)


/////sum matrix
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function sumMatrix(arr: number[][]): number {
    let total = 0;
    for (const row of arr) {
        for (const num of row) {
            total += num;
        }
    }
    return total;
}
console.log(sumMatrix(matrix));

function sumMatrix1(arr: number[][]): number {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            total += arr[i][j];
        }
    }
    return total;
}
console.log(sumMatrix1(matrix));


// log the arry to coneole and count the elements 
// implement with for of loop as well
const str = ["i", "m", "n"]
function letters(str1: string[]): number {
    let count = 0;
    for (const row of str) {
        console.log(row)
        count++;


    }
    return count;
}
console.log(letters(str));

function letters1(str1: string[]): number {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        console.log(i)
        count += 1;
    }

    return count;
}
console.log(letters(str));

// Divisble by 5
let arr1 = [5, 6, 7, 8, 9];
let arr2 = [34, 35, 66, 77, 87, 100];
function divisbleBy5(arr1: number[]): number {
    let count = 0;
    for (const row of arr1) {
        if (row % 5 === 0) {
            console.log(row);
            count++;
        }
    }

    return count;
}
console.log(divisbleBy5(arr2));


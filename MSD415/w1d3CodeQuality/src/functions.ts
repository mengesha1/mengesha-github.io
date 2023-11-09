/**
 * @param {number} num is an integer
 * @returns {boolean} true if number is prime, else false
 * Prime numbers have only 2 factors: 1 and themselves.  
*/
export function checkPrime(num: number): boolean {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }
    
    export function ssReverse(arr: number[]){ 
    
        const arrC: number[]=[];
        for (let i: number = arr.length-1; i >= 0; i--) {
            const valueindex = arr[i];
            arrC.push(valueindex);
        }
        return arrC;
    }
    
    
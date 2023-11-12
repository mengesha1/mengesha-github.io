  export type Person = {
    name: string,
     age: number
};
const numArray: number[] = [5, 0, 7, 77, -20, 300, 51, 2];
const peopleArray: Person[] = [
    { name: "Sam", age: 15 },
    { name: "William", age: 6 },
    { name: "Lucy", age: 13 },
    { name: "Barney", age: 80 }
];

export function doubleNums(numArray:number[]):number[]{
return (numArray.map(num => num * 2));
}

export function doubleAges(peopleArray:Person[]):number{
    const arraAge:Person[] = peopleArray.map((person) => ({ ...person, age: person.age * 2 }));
    return arraAge.push(); 

}

export function filterEven(numArray: number[]): number[]{
    return numArray.filter(num=>num%2==0)

}

export function filterOver10(peopleArray:Person[]) {
    const array10Age:Person[]=peopleArray.filter((person)=>person.age>10)
    return array10Age.push()

}

export function findEvenNum(numArray: number[]):number{
    const firstEvenNum: number | undefined = numArray.find((num) => num % 2 === 0);
    
    return firstEvenNum

}

export function findEvenAge(peopleArray: Person[]){
    const firstAgeOver10: Person | undefined = peopleArray.find((person) => person.age > 10);    
    return firstAgeOver10

}

// export function includesEvenNum(numArray: number[]):void{
//     return

// }

// export function includesEvenAge(peopleArray: Person[]):void{
//     return 

// }



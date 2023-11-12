const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
const peopleArray = [
    { name: "Sam", age: 15 },
    { name: "William", age: 6 },
    { name: "Lucy", age: 13 },
    { name: "Barney", age: 80 }
];
export function doubleNums(numArray) {
    return (numArray.map(num => num * 2));
}
export function doubleAges(peopleArray) {
    const arraAge = peopleArray.map((person) => ({ ...person, age: person.age * 2 }));
    return arraAge.push();
}
export function filterEven(numArray) {
    return numArray.filter(num => num % 2 == 0);
}
export function filterOver10(peopleArray) {
    const array10Age = peopleArray.filter((person) => person.age > 10);
    return array10Age.push();
}
export function findEvenNum(numArray) {
    const firstEvenNum = numArray.find((num) => num % 2 === 0);
    return firstEvenNum;
}
export function findEvenAge(peopleArray) {
    const firstAgeOver10 = peopleArray.find((person) => person.age > 10);
    return firstAgeOver10;
}
// export function includesEvenNum(numArray: number[]):void{
//     return
// }
// export function includesEvenAge(peopleArray: Person[]):void{
//     return 
// }

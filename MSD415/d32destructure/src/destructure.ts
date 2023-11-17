/* 
Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/

// the following type definition says that SalaryObj has keys of type string and values of type number
type SalaryObj = { [key: string]: number };

function topSalary(salaries:SalaryObj):string|null {
    let maxSalary:number=0;
    let topPaidPerson:string|null=null;
    
     for (const [person, salary] of Object.entries(salaries)) {
            if (salary > maxSalary) {
                maxSalary = salary;
                topPaidPerson = person;
            }
        }

    return topPaidPerson;
}
    








 
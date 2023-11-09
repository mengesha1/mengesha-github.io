export function computeSalseCommission(isSalaried: boolean, sales: number): number {

    // let isSalaried = prompt("Are you  salaried? true/false" + " ")
    // let salary = parseFloat(prompt("Enter Salary:" + " "))
    // let sales = parseInt(prompt("Enter sales Amount" + " "))
    let commssion = 0;


    if (isSalaried === true) {
        if (sales < 300) {
        commssion = 0;    
        }
        else if (sales >=300 && sales <= 500) {
            commssion =  sales * 0.01;
        }
        else if(sales > 500){
        commssion = ((500 * 0.01) +(sales -500) * 0.02);
        }
    }

    else {
        if (isSalaried === false) {
            if (sales >= 300 && sales <= 500) {
                commssion = sales * 0.02
            }
            else if(sales > 500) {
                commssion = 500 * 0.02 + ((sales - 500) * 0.03)
            }
        }
    }
    return commssion;
}
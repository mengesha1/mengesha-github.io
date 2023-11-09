//calculate the  down Payment 
function downPayment(costofHouse:number):number{
let downPayment:number = 0;
//let costofHouse:number = prompt("Enter Cost of the House:" + " ");
if (costofHouse >= 0 && costofHouse <= 50000) {
    downPayment = (costofHouse * 0.05);
    
}
else if (costofHouse >= 50000 && costofHouse <= 100000) {
    downPayment = (1000 + 0.01) * (costofHouse - 50000)
   
}
else if (costofHouse >= 100000 && costofHouse <= 200000) {
    downPayment = (2000 + 0.15) * (costofHouse - 100000)
    
}
else {
    downPayment = (5000 + 0.01) * (costofHouse - 200000)
    
}
return downPayment;
}
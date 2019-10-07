'use strict';
module.exports = function main(inputs) {
    console.log("Debug Info");
    const header = "***<store earning no money>Receipt ***\n";
    let product = [];
    let subtotal = 0;
    let receipt = "";
    
   
    inputs.forEach(element => {
            let elementExists = product.find(prod => prod.Name == element.Name);
            if(elementExists){
                elementExists.Quantity++;
                subtotal += element.Price.toFixed(2);
            } else {
                product.push({Name :element.Name, Quantity: 1, Price: element.Price});
                subtotal = element.Price;
            }
        });


        product.forEach(element => {
            receipt += "Name: "+ String(element.Name) 
            +", Quantity: "+ String(element.Quantity)
            +", Unit price: "+ element.Price.toFixed(2) + " (yuan)"
            +", Subtotal:" + subtotal.toFixed(2) + " (yuan)" + "\n" ;
        });

    const footer = '----------------------\n' +
    'Total: '+subtotal+' (yuan)\n' +
    '**********************\n';
    return header + receipt +footer;
};
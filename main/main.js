'use strict';
module.exports = function main(inputs) {
    console.log("Debug Info");
    const header = "***<store earning no money>Receipt ***\n";
    let product = [];
    let receipt = "";
    
   
    inputs.forEach(productItem => {
            let elementExists = product.find(prod => prod.Name == productItem.Name);
            if(elementExists){
                elementExists.Quantity++;
            } else {
                product.push({Name :productItem.Name, Quantity: 1, 
                    Price: productItem.Price, Unit: productItem.Unit});
            }
        });
    let total = 0;
    product.forEach(productItem => {
            let subtotal = productItem.Quantity * productItem.Price; 
            total+= subtotal;
            receipt += "Name: "+ String(productItem.Name) 
            +", Quantity: "+ String(productItem.Quantity) + getProductUnit(productItem)
            +", Unit price: "+ productItem.Price.toFixed(2) + " (yuan)"
            +", Subtotal: " + subtotal.toFixed(2) + " (yuan)"+ "\n" ;
        });

    const footer = '----------------------\n' +
    'Total: '+total.toFixed(2)+' (yuan)\n' +
    '**********************\n';
    return header + receipt +footer;
};

function getProductUnit(productItem){
    if(productItem.Unit == "bottle"){
        return " bottles";
    }else{
        return "";
    }
};
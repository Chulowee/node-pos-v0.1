module.exports = function main(inputs) {
    console.log("Debug Info");
    let header = "***<store earning no money>Receipt ***\n";
    let item = [];
    let result = "";
   
        inputs.forEach(element => {
            let elementExists = item.find(coll => element.Barcode == coll.Barcode);
            if(elementExists){
                elementExists.Quantity++;
            } else {
                item.push({ Name: element, Quantity: 1, price: element.price})
            }
        });


        item.forEach(element => {
            result += "Name: "+ String(element.Name) +", Quantity:" ;
        });
    return header + result;
};
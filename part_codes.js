function getSupplier(code){
    return code.slice(0, code.indexOf(":"));
}
// that returns all characters before the :

function getProductNumber(code){
    return code.slice(code.indexOf(":") + 1, code.indexOf("-"));
}
// that returns all characters between the : and -
function getSize(code){
    return code.slice(code.indexOf("-") + 1);//NO SECOND ARGUMENT FOR WHERE TO STOP
}
// that returns all characters after the -

const part1 = "ACME:123-L"
console.log(getSupplier(part1), getProductNumber(part1), getSize(part1) );

const part2 = "DI:12345-M"
console.log(getSupplier(part2), getProductNumber(part2), getSize(part2) );

const part3 = "ACE:1-12"
console.log(getSupplier(part3), getProductNumber(part3), getSize(part3) );
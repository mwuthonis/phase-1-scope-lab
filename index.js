// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
function setBestCustomer() {
    bestCustomer = 'not bob';
}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = 'Karen';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'John';//throws an error since unsuccessfully trying to reassign the least favourite customer
}
// Write your solution in this file!

// Fix the Scope
// declare customerName to be bob in global scope
//   1) returns the customerName
var customerName = "bob";
function upperCaseCustomerName() {
  //   2) modifies the customerName variable
  customerName = customerName.toUpperCase();
}
var bestCustomer;
function setBestCustomer() {
  //   3) setBestCustomer
  bestCustomer = "not bob";
}

function overwriteBestCustomer(nVal) {
  //   4) overwrites the best customer
  bestCustomer = nVal;
}
const leastFavoriteCustomer = "Jack";
function changeLeastFavoriteCustomer() {
  //   5) unsuccessfully tries to reassign the least favorite customer
  leastFavoriteCustomer = "Mark";
}

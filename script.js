//1. define prompt so we can respond from our ide 
const prompt = require('prompt-sync')();

//2. create a prompt for user to select the type of operation to perform 
let operator = prompt('select an operator, a. addition, b. subtraction, c. division, d. multiplication: ');

//3. create a function that checks the user selection of operator if the operator selected is correct proceed else ask the user to input a correct selector and start over
function checkOperator(){
    if (operator === 'a' || operator === 'b' || operator === 'c' || operator === 'd' && operator != '') {
        performOperation();
    } else {
        console.log('please insert a valid input of operation!');
    }
    resetOperationSelection();
}

checkOperator();



//4. create a function that will perform our calculation based on the operator selected by the user
function performOperatorSelection() {
    //  a. ask user for first number or input
    let firstInput = parseInt(prompt('please insert your first number: '));

    //  b. ask user second number or input
    let secondInput = parseInt(prompt('please insert your second number: '));

//  c. perform the operation selected on the first and second numbers inputed

if (operator === 'a') {
    let addition = firstInput + secondInput
    console.log(`the sum is ${addition}`);
    return addition;
} else if (operator === 'b') {
    let subtraction = firstInput - secondInput
    console.log(`the sum is ${addition}`);
    return subtraction;
} else if (division === 'c') {
    let division = firstInput / secondInput
    console.log(`the sum is ${division}`);
    return division;
} else if (operator === 'd') {
    let multiplication = firstInput * secondInput
    console.log(`the sum is ${multiplication}`);
    return multiplication;
} else {
    console.log('please insert a valid number or input!')
}
performOperation();
//  a. ask user for first number or input
//  b. ask user second number or input
//  c. perform the operation selected on the first and second numbers inputed
// create a function to reset the input of operator selection and restart the process when there is a wrong selection of operator
function resetOperatorSelection() {
    let operator = prompt('select an operator, a. addition, b. subtraction, c. division, d. multiplication: ');
    checkOperator();
}
}
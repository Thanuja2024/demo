/*
let num1 = parseInt(prompt("Enter first number:"));
let num2 = parseInt(prompt("Enter second number:"));
let num3 = parseInt(prompt("Enter third number:"));

switch (true) {
    case (num1 >= num2 && num1 >= num3):
        console.log(`${num1} is the greatest.`);
        break;
    case (num2 >= num1 && num2 >= num3):
        console.log(`${num2} is the greatest.`);
        break;
    case (num3 >= num1 && num3 >= num2):
        console.log(`${num3} is the greatest.`);
        break;
    default:
        console.log("All numbers are equal.");
}
        */



let num1 = parseInt(prompt("Enter first number:"));
let num2 = parseInt(prompt("Enter second number:"));
let num3 = parseInt(prompt("Enter third number:"));

if (num1 >= num2 && num1 >= num3) {
    console.log(`${num1} is the greatest.`);
} else if (num2 >= num1 && num2 >= num3) {
    console.log(`${num2} is the greatest.`);
} else if (num3 >= num1 && num3 >= num2) {
    console.log(`${num3} is the greatest.`);
} else {
    console.log("All numbers are equal.");
}
/* Write a program that prompts for three integers. The program prints the sum,
product and average of the numbers to the HTML document. (3p)
remember to convert strings to numbers when adding */


let firstNumber = parseInt(prompt("Enter 1st number: "));
let secondNumber = parseInt(prompt("Enter 2nd number: "));
let thirdNumber = parseInt(prompt("Enter 3rd number: "));
sum = firstNumber + secondNumber + thirdNumber;
product = firstNumber * secondNumber * thirdNumber;
average = (firstNumber + secondNumber + thirdNumber)/3;

document.write("The sum of three number is " + sum, "<br>");
document.write("The product of three number is " + product, "<br>");
document.write("The average of three number is " + average);
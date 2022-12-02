/* Write a program that prints the text "Should I calculate the square root?" in a confirmation window.
If the user selects OK, the program asks for the number and
calculates and prints its square root to the HTML document. If the user selects Cancel,
the program prints the text "The square root is not calculated." to the HTML document (3p)
The confirmation window can be displayed with the function confirm(). The function returns true if the user selects OK.
If the user selects Cancel, the function returns false.
You cannot calculate the square root of a negative number. If the number entered by the user is negative,
the program prints "The square root of a negative number is not defined" to the HTML document.
 */

const answer = confirm("Should I calculate the square root?");
if (answer == true){
  let number = parseFloat(prompt("Give number: "))
  if (number >= 0){
    let squareRoot = Math.sqrt(number)
    document.write("The square root of " + "number is " + squareRoot +".")
}
  else if (number < 0) {
    document.write("The square root is not calculated.")
}}

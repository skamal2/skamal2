/* Write a program that rolls user defined number of dice and displays the sum of the
 results of the dice rolls.(2p)
First, program asks the user for the number of dice rolls.
Then the program throws a die as many times as the user defined.
Print the sum of the results in the console or in the HTML document.*/

const numberOfDiceRolls = parseInt(prompt("How many times to roll the dice?"))

let i=0;
while (i<=numberOfDiceRolls) {

  let diceRoll = Math.floor((Math.random() * 6) + 1);
  i++
  diceRoll += diceRoll
document.write(diceRoll);
}



/*Write a program that prompts the user for numbers. When the user enters one of the numbers he previously entered,
the program will announce that the number has already been given and stops its operation and
then prints all the given numbers to the console in ascending order. (2p)
 */
let numList = [], num = 0; user = "";

do {
    numList.push(user);
    user = parseInt(prompt('Enter number. If repeated, program stops.'));
    num++;
}
while (numList.includes(user) === false);
window.alert("Sorry, the number you entered already exist.")
numList.sort((a, b) => a - b);
for(let number of numList){
    console.log(number);
}
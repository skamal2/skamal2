/* In the Harry Potter children's books, the sorting hat assigns a new student at Hogwarts
School of Witchcraft and Wizardry to one of the four classes, which are Gryffindor, Slytherin, Hufflepuff, and Ravenclaw.
 Write an electronic sorting hat that asks for a student's name and draws a room for him.
 If you enter Anna as the name, for example, the program prints to the HTML document "Anna, you are Ravenclaw." (3p)
Use math.random() to draw a value (1, 2, 3 or 4)
Once the number is drawn, you need to use a multiple choice structure (if, else if, ..., else or switch). */

let studentName = prompt("Enter your name: " +
"I will assign you in one of our 4 classes.");
let classNumber;
classNumber = Math.floor((Math.random() * 4) + 1);

if (classNumber === 1) {
  document.write("Congratulations " + studentName + "! " + " Your class is Gryffindor."); //document.write is used to print in the browser &console,
  // log is used to print in console
}
else if (classNumber === 2) {
  document.write("Congratulations " + studentName + "! " + " Your class is Slytherin.");
}

else if (classNumber === 3) {
  document.write("Congratulations " + studentName + "! " + " Your class is Hufflepuff.");
}

else {
  document.write("Congratulations " + studentName + "! " + " Your class is Ravenclaw.");
}
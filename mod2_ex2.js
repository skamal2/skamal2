/*Write a program that asks the user for the number of participants.
After this, the program asks for the names of all participants. Finally, the program prints the
names of the participants on the web page in an ordered list (<ol>) in alphabetical order. (2p)
 */
const numberOfParticipants = parseInt(prompt("Enter the number of participants. "))
let lists =[];
let orderedList = document.getElementById("li");
for (let i=0; i<numberOfParticipants; i++) {
  lists[i] = prompt("Enter the name of participants. ")
  lists.sort()
  orderedList.innerHTML += `<li>${lists}</li>`;

  console.log(lists)
}
document.body.appendChild(orderedList);





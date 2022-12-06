/*Write a program that asks for the names of six dogs. The program prints dog names to unordered
list <ul> in reverse alphabetical order. (2p)
 */
let dogName = [];

const ul = document.createElement("ul");

for (let i = 0; i < 6; i++) {
    dogName.push(prompt(`Enter dog name:`));
}

dogNname.reverse();

for (let i = 0; i < 6; i++) {
    ul.innerHTML += `<li>${dogNname[i]}</li>`;
}
document.body.appendChild(ul);
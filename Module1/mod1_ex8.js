const startYear = prompt("Enter the starting year:");
const endYear = prompt("Enter the ending year: ");
let yearList = "";

for (let year = startYear; year <= endYear; year++){
  if ((year % 4 ===0 && year % 100 !==0) || (year % 400 === 0) || (year % 100 ===0 && year % 400 ===0)){
    yearList += `<li>${year}</li>`;
    console.log(year);
  }
}
document.write(yearList)
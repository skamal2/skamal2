const number = parseInt(prompt("Enter number: "));
let numPrime = true;

if (number === 1) {
    document.write("1 is neither prime nor composite number.");
}

else if (number > 1) {
  for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            numPrime = false;
            break;
        }
    }
  if (numPrime) {
        document.write(`${number} is a prime number`);
  } else {
        document.write(`${number} is a not prime number`);
  }
}
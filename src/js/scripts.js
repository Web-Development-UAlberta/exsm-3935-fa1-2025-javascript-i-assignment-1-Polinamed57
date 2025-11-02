// eslint-disable-next-line no-unused-vars
/* global output, input 
// eslint-disable-next-line no-unused-vars

  // This is where the code you're actually experimenting with goes.

  const prompt = "Please enter your name, or 'Exit' to quit: ";
  let name = await input(prompt);

  while (name !== "Exit") {
    output("Hello, " + name + "!");
    name = await input(prompt);
  }*/

async function main() {

  const prompt = "Enter your first name:";
  const firstName = await input(prompt);
  
  const prompt2 = "Enter your last name:";
  const lastName = await input(prompt2);

  const fullName = firstName + " " + lastName;

  const replacedNameAll = fullName.replace(/o/g, "a");
  output("Your fullname with 'o' replaced by 'a': " + replacedNameAll);

  const prompt3 = "Enter a number larger than 10:";
  const numberInput = await input(prompt3);
  if (Number(numberInput) > 10) {
    output("You entered a valid number: " + numberInput);
  }
  else { 
    output("The number you entered is not larger than 10");
  }
  
  const prompt4 = "Enter a number smaller than 10:";
  const numberInput2 = await input(prompt4);
  if (Number(numberInput2) < 10) {
    output("You entered a valid number: " + numberInput2);
  }
  else { 
    output("The number you entered is not smaller than 10");
  }

  const firstNumber = Number(await input("Enter the first number:"));
  const secondNumber = Number(await input("Enter the second number:"));
  
  let remainder
  if (firstNumber > secondNumber) {
    remainder = firstNumber % secondNumber;
  } else {
    remainder = secondNumber % firstNumber;
  }
  output("The remainder is: " + remainder);
}

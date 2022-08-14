const userNames = [];
let inputCondition = true;

do {
  const userInput = prompt("Enter your first name, please", '');
  const isValid = userInput !== null && userInput !== '';
  isValid ? userNames.push(userInput) : inputCondition = false;
} while (inputCondition);

const users = userNames.length === 0 
  ? 'No users!' 
  : `Users: ${userNames.join(', ')}.`;
alert(`${users} Total users: ${userNames.length}!`);

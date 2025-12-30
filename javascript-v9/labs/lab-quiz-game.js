const questions = [];
questions.push({category: "Sport", question: "How do americans call football?", choices: ["American footbal", "Soccer", "Feetball"], answer: "Soccer"});
questions.push({category: "Geography", question: "What is the capital of Greece?", choices: ["Paris", "Athens", "London"], answer: "Athens"});
questions.push({category: "Sport", question: "What does NBA stand for?", choices: ["Nigerian Basketball Association", "National Basketball Association", "Native British Accomplice"], answer: "National Basketball Association"});
questions.push({category: "Geography", question: "How many countries does Africa have?", choices: ["46", "48", "54"], answer: "54"});
questions.push({category: "Coding", question: "Is Python a high-level language?", choices: ["No", "Yes", "It wasn't before but now it is."], answer: "Yes"});

function getRandomQuestion(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResults(questionObject, computerChoice) {
  if (computerChoice === questionObject.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  }
}

const question = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(question.choices);

console.log(question);
console.log(computerChoice);
console.log(getResults(question, computerChoice));
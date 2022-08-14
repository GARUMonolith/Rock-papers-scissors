function getUserChoice() {
  let input = prompt("Choose Rock, paper or scissors");
  input = input.toLowerCase();
  return input;

}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const choice = choices[Math.floor(Math.random()*choices.length)]
  return choice;
}

function playRound() {
  const userSelection = getUserChoice();
  const computerSelection = getComputerChoice();
  const winner = checkWinner(userSelection, computerSelection);
  
  console.log(winner);
}

function checkWinner(choiceU, choiceC) {
  if (choiceU === choiceC) {
    return ("Tie");
  } else if (
     (choiceU == "rock" && choiceC == "scissors") ||
     (choiceU == "scissors" && choiceC == "paper") ||
     (choiceU == "paper" && choiceC == "rock")
  ) {
    return ("Player wins!");  
  } else{
    return ("Computer wins!");
  }  
}

playRound();
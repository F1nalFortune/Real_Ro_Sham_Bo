
function compare(choice1, choice2) {
  if (choice1 === "Rock") {
    if (choice2 === "Paper"){
      return choice2 + " " + "is the winner!";
    } else if (choice1 === choice2){
      return "There is a draw!";
    } else if (choice2 === "Scissors"){
      return choice1 + " " + "wins!";
    } 
  } else if (choice1 === "Paper") {
    if (choice2 === "Scissors"){
      return choice2 + " " + "is the winner!";
    } else if (choice2 === choice1){
      return "There is a draw!";
    } else if (choice2 === "Rock"){
      return choice1 + " " + "wins!";
    }
  } else if (choice1 === "Scissors") {
    if (choice2 === "Rock"){
      return choice2 + " is the winner!";
    } else if (choice2 === choice1){
      return "There is a draw!";
    } else if (choice2 === "Paper"){
      return choice1 + " " + "wins!";
    }
  }
  // start;
}
  


function go() {
  var userChoice = prompt("Do you pick Rock, Paper, or Scissors?");
  var computerChoice = Math.random();
  if (computerChoice < 0.34){
    computerChoice = "Rock";
  } else if (computerChoice > .67){
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  } 
  console.log("Computer:" + computerChoice);
  console.log(compare(userChoice, computerChoice));
}


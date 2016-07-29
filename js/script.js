function go() {
  var userChoice = prompt("Do you pick Rock, Paper, or Scissors?");
  var computerChoice = Math.random();
    if (computerChoice < 0.34){
      computerChoice = "Rock";
    } else if (computerChoice > .67){
      computerChoice = "Paper";
    } else {
      computerChoice = "Scissors";
    } console.log("Computer:" + computerChoice);

  var compare = function(choice1, choice2){
    var start = compare(userChoice, computerChoice)
    if (choice1 === "Rock"){
      if (choice2 === "Paper"){
        // console.log(choice2 + "is the winner!");
        return choice2 + "is the winner!";
    } else if (choice1 === choice2){
        // console.log("There is a draw!");
        return "There is a draw!";
    } else if (choice1 === "Scissors"){
        // console.log(choice1 + "wins!");
        return choice1 + "wins!";
      } 
    else if (choice1 === "Paper"){
        if (choice2 === "Scissors"){
          return choice2 + "is the winner!";
      } else if (choice2 === choice1){
          return "There is a draw!";
      } else if (choice2 === "Rock"){
          return choice1 + "wins!";
      }
    else if (choice1 === "Scissors"){
      if (choice2 === "Rock"){
        return choice2 + " is the winner!";
      } else if (choice2 === choice1){
        return "There is a draw!";
      } else if (choice2 === "Paper"){
        return choice1 + "wins!";
      }
    }
    } 
    }
    start;
  }
  
}



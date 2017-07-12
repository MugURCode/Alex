choiceArray = ["Rock", "Scissors", "Paper"];

var playerChoice = "Rock";
var compChoice=  choiceArray[Math.floor(Math.random().length)];
if (playerChoice == compChoice){
        console.log("Draw");
}else if (playerChoice == "Rock" && compChoice == "Scissors") {
    console.log("Player has won!");
}else if (playerChoice == "Rock" && compChoice == "Paper"){
    console.log("Player has lost");
}else if (playerChoice == "Scissors" && compChoice == "Paper"){
    console.log("Player has won!");
}else if (playerChoice == "Scissors" && compChoice == "Rock"){
    console.log("Player has lost");
}else if (playerChoice == "Paper" && compChoice == "Rock"){
    console.log("Player has won!");
}else if (playerChoice == "Paper" && compChoice == "Scissors"){
    console.log("Player has lost")
}


  
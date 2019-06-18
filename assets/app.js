let rock = document.getElementById('choice1');
let paper = document.getElementById('choice2');
let scissors = document.getElementById('choice3');
var myChoice;
let computer = document.getElementById('computerGamble');
let computerChoice = Math.random();
let reset = document.getElementById('reset');


rock.addEventListener("click", function () {
    myChoice = "rock";
    console.log(myChoice);
});

paper.addEventListener("click", function () {
    myChoice = "paper";
    console.log(myChoice);
});

scissors.addEventListener("click", function () {
    myChoice = "scissors";
    console.log(myChoice);
});



computer.addEventListener("click", function () {
    let computerChoice = Math.random();
    if (computerChoice < 0.33) {
        computerChoice = "rock";
    }
    else if (computerChoice <= 0.66) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

    document.getElementById('result').innerHTML = compare(computerChoice);
});

function compare(computerChoice) {
    if (myChoice === computerChoice) {
        return "It's a draw!" + " " + "Wanna play again?" ;
    }
    
    else if (myChoice === "rock") {
        
        if (computerChoice === "scissors") {
            return "Rock wins..." + "<br>" + "you win!";
        }
        else {
            return "Paper wins..." + "<br>" + "you lose!";
        }
    }
    
    else if (myChoice === "paper") {
        
        if (computerChoice === "rock") {
            return "Paper wins..." + "<br>" + "you win!";
        }
        else {
            return "Scissors win..." + "<br>" + "you lose!";
        }
            
    }
    
    else if (myChoice === "scissors") {
        
        if (computerChoice === "rock") {
            return "Rock wins..." + "<br>" + "you lose!";
        }
        else {
            return "Scissors win..." + "<br>" + "you win!";
        }
    }
    
    
    } 


reset.addEventListener("click", function () {
    document.getElementById('result').innerHTML = "";
});
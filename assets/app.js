let rock = document.getElementById('choice1');
let paper = document.getElementById('choice2');
let scissors = document.getElementById('choice3');
var myChoice;

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



let computer = document.getElementById('computerGamble');
let computerChoice = Math.random();

computer.addEventListener("click", function () {
    let computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    }
    else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

    compare(computerChoice);
    console.log("Computer choses " + computerChoice);
});


// /*let result = document.getElementById('result');*/

// let player = document.getElementById('letsPlay');
// player.addEventListener("click", function () {
//     compare();
// });
function compare(computerChoice) {
    
    if (myChoice === computerChoice) {
        
        return "It's a draw!" + " " + "Lets play again." ;
        console.log('a');
    }
    
    else if (myChoice === "rock") {
        
        if (computerChoice === "scissors") {
            return "Rock wins" + "<br>" + "You win!";
            console.log('b');
        }
        else {
            return "Paper wins" + "<br>" + "You lose!";
            console.log('c');
        }
    }
    
    else if (myChoice === "paper") {
        
        if (computerChoice === "rock") {
            return "Paper wins" + "<br>" + "You win!";
            console.log('d');
        }
        else {
            return "Scissors win" + "<br>" + "You lose!";
            console.log('e');
        }
            
    }
    
    else if (myChoice === "scissors") {
        
        if (computerChoice === "rock") {
            return "rock wins" + "<br>" + "You lose!";
            console.log('f');
        }
        else {
            return "scissors win" + "<br>" + "You win!";
            console.log('g');
        }
        console.log('a')
    }
    
    
    } 
   document.write(compare(myChoice,computerChoice));
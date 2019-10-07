# Schaar-Steen-Papier

## Learning objectives
- generate if statements

## The Mission
Create a Paper–rock–scissors game. :scissors:

### Must-have features
- Have three buttons that the player can press to change their pick
- Have another button to let the computer pick one and show the winner
- Let the player know they won (no alert box)
- Have a reset button


### Result 

**[Wanna play?](https://yelenamerzlyakova.github.io/Schaar-Steen-Papier/)**

![rock](https://github.com/YelenaMerzlyakova/Schaar-Steen-Papier/blob/master/rockpaper.png)


### Code

Here is the code that I used to decide who wins. It compares the choice of the player and the computer choice and decided on the winnar.

``` Javascript
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
    
    
    } ´´´
    
    

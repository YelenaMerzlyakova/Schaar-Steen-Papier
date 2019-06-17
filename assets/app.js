let rock = document.getElementById('choice1');
let paper = document.getElementById('choice2');
let scissors = document.getElementById('choice3');

rock.addEventListener("click", function () {
    gamble(rock);
});

paper.addEventListener("click", function () {
    gamble(paper);
});

scissors.addEventListener("click", function () {
    gamble(scissors);
});

function gamble() {
    if (rock){
        console.log(rock);
    }
    else if (paper){
        console.log(paper);
    }
    else{
        console.log(scissors);
    }
}

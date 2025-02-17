let userScore = 0
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#com-score");

const backColor = document.querySelector("#bdy");

// Computer chooces option randomly.
const genComChoice = () => {
    const options = ["rock", "paper", "scissor"]
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}

const drawGame = () => {
    backColor.style.backgroundColor = "white";
    console.log("Game was draw.");
    msg.innerText = "Match Draw";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        backColor.style.backgroundColor = "gray";
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! 😀 your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        backColor.style.backgroundColor = "white";
        comScore++;
        comScorePara.innerText = comScore;
        console.log("You lose");
        msg.innerText = `You Lose! 😟 ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genComChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            // paper, Scissor
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}


// By the help of Event Listener user chooces options.
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".box");
const msg = document.querySelector("#msg");
console.log(choices);

let genCompChoice = () => {
    let arr = ["Rock", "Paper", "Scissors"]
    const comp = Math.floor(Math.random() * 3);
    return arr[comp];
}
const draw = () => {
    console.log("Game was Draw");
    msg.innerText = "Match Draw !";
    msg.style.backgroundColor = "orange";
    msg.style.opacity = 1;
}

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice)
        draw();
    else {
        let userWin = true;
        if (userChoice === "Rock")
            userWin = compChoice === "Scissors" ? true : false;
        else if (userChoice === "Paper")
            userWin = compChoice === "Rock" ? true : false;
        else
            userWin = compChoice === "Paper" ? true : false;
        showWinner(userWin,userChoice,compChoice);
    }
}
const showWinner = (userWin,userChoice,compChoice,) => {
    if (userWin) {
        console.log("You Win");
        userScore++;
        msg.innerText = `You win :) your ${userChoice} beats  computer's ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.opacity = 1;
        const myScore = document.querySelector("#myScore");
        myScore.innerText = userScore; 
    }
    else {
        console.log("You Lose :(")
        compScore++;
        msg.innerText = `You Lose :( computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.opacity = 1;
        const cScore = document.querySelector("#compScore");
        cScore.innerText = compScore; 
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        // console.log(choiceId);
        playGame(choiceId);
    });
})
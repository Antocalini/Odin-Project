let humanScore = 0;
let computerScore = 0;
const ROUND = 0;

let buttonValue = ''

const buttons = document.querySelectorAll("button");
const text = document.querySelector("#text")
const title = document.querySelector("#title")
const counter = document.querySelector("#counter")


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttonValue = button.value
        playGame(ROUND);
    })
})



const getComputerChoice = () => {
    const computerChoice = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return (computerChoice[randomNumber]);
}

getHumanChoice = () => {
    const humanChoice = buttonValue;
    return (humanChoice);
};


const formatChoice = (election, opp) => {
    if (election == 'rock' && opp == 'paper') return -1;
    if (election == 'rock') return 2;
    if (election == 'scissors') return 1;
    if (election == 'paper') return 0

}

const playRound = (humanChoice, computerChoice) => {
    let humanChoiceFormat = formatChoice(humanChoice, computerChoice);
    let computerChoiceFormat = formatChoice(computerChoice, humanChoice);

    if (humanChoiceFormat > computerChoiceFormat) {
        humanScore += 1;
        return (`Human win ${humanChoice} beats ${computerChoice} `)

    } else if (humanChoiceFormat == computerChoiceFormat) {
        return `Draw! what a game`

    } else {
        computerScore += 1;
        return `Computer win ${computerChoice} beats ${humanChoice} `
    }
}

const playGame = (ROUND) => {

    for (let i = 0; i <= ROUND; i++) {


        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        title.textContent = (playRound(humanSelection, computerSelection));
        counter.textContent = (`Human: ${humanScore} Computer: ${computerScore}`);

    }


}

const getWinner = (humanScore, computerScore) => {

    if (humanScore > computerScore) {
        text = (`Human Wins!`)
    } else if (humanScore == computerScore) {
        return (`Draw! very impressive`)
    } else {
        return (`Computer Wins!`)
    }

}



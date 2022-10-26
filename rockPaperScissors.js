const getComputerChoice2 = () => {
    let randomPick = Math.random()
    let computerSelection

    if (randomPick < 1 / 3) {
        computerSelection = 'Rock'
    } else if (randomPick < 2 / 3) {
        computerSelection = 'Paper'
    } else {
        computerSelection = 'Scissors'
    }
    return computerSelection
}

const randomElement = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}

const getComputerChoice = () => {
    const selectionArr = ['ROCK', 'PAPER', 'SCISSORS']
    return randomElement(selectionArr)
}

const playRound = (computerSelection, userSelection) => {


    // if rock and rock or paper and paper or scissors and scissors then tie
    // if rock and scissor then rock wins 
    // if scissor and paper then scissor wins
    // if paper and rock then paper wins 

    computerSelection = computerSelection.toUpperCase()
    // userSelection = userSelection.toUpperCase()

    if (computerSelection == userSelection) {
        return 'TIE'
    }

    const selectionToWin = {
        'ROCK': 'SCISSORS',
        'PAPER': 'ROCK',
        'SCISSORS': 'PAPER'
    }

    const theThingIWouldWinAgainst = selectionToWin[userSelection]

    if (theThingIWouldWinAgainst == computerSelection) {
        return 'USER'
    } else {
        return 'COMPUTER'
    }

}

// const selectionButtonsDiv = document.querySelector('.selectionButtons');
// console.log({ selectionButtonsDiv })
let userSelection;
let userGameResult = 0;
let computerGameResult = 0;

// const buttons = document.querySelectorAll('button');
const imgButtons = document.querySelectorAll('img');

const gameDiv = document.querySelector('.game');
const resultDiv = document.querySelector('.result');
const gameResultDiv = document.querySelector('.game-result');
const computerSelectionEle = document.querySelector('#computer-selection');
const playerSelectionEle = document.querySelector('#player-selection');
const computerScoreEle = document.querySelector('#computer-score');
const playerScoreEle = document.querySelector('#player-score');
let prevGameDiv;

imgButtons.forEach((button) => {
    button.addEventListener('click', (button) => {
        // console.log(button.target.id)
        userSelection = button.target.id
        game()
    })
})

const updateResult = (gameResult, userSelection, computerSelection) => {
    // gameResultDiv.innerHTML = gameResult
    if (gameResult == 'USER') {
        //update user
        gameResultDiv.innerHTML = 'User wins!'
        userGameResult += 1;

    } else if (gameResult == 'COMPUTER') {
        //update computer
        gameResultDiv.innerHTML = 'Computer wins!'
        computerGameResult += 1;
    } else {
        //tie
        gameResultDiv.innerHTML = 'Tie!'
    }
    playerSelectionEle.innerHTML = userSelection
    computerSelectionEle.innerHTML = computerSelection
    playerScoreEle.innerHTML = userGameResult
    computerScoreEle.innerHTML = computerGameResult

    if (userGameResult == 5 || computerGameResult == 5) {
        prevGameDiv = gameDiv;
        let finalResult = '';
        if (userGameResult == 5) {
            finalResult = `<span id='span1'> Player wins!</span><br> <span id='span2'> Player ${userGameResult} : Computer ${computerGameResult} </span>`
        } else {
            finalResult = `<span id='span1'> Player wins!</span><br> <span id='span2'> Computer ${computerGameResult} : PLayer ${userGameResult} </span>`
        }

        gameDiv.innerHTML = finalResult;
        const playAgainButton = document.getElementById('play-again') //.style.display = 'block';
        playAgainButton.style.display = 'block';

        playAgainButton.addEventListener('click', (event) => {
            location.reload();
        })


    }
}




const game = () => {
    let computerSelection = getComputerChoice()

    let roundResult = playRound(computerSelection, userSelection);
    // update the game result on html 
    updateResult(roundResult, userSelection, computerSelection);

    // if (roundResult == 'USER') {
    //     console.log('User Wins!')
    // } else if (roundResult == 'COMPUTER') {
    //     console.log('Computer Wins')
    // } else {
    //     console.log('Tie')
    // }

}
// console.log('Result: ', playRound(getComputerChoice(), 'Rock'))
// game()



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
    userSelection = userSelection.toUpperCase()

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

const game = () => {
    let userGameResult = 0
    let computerGameResult = 0
    for (let i = 0; i < 5; i++) {
        let roundResult = playRound(getComputerChoice(), prompt('ROCK? PAPER? SCISSORS?'))
        if (roundResult == 'USER') {
            userGameResult += 1;
        } else if (roundResult == 'COMPUTER') {
            computerGameResult += 1;
        }

        console.log('Round winner: ', roundResult)
    }

    if (userGameResult > computerGameResult) {
        console.log('USER wins')
    } else if (computerGameResult > userGameResult) {
        console.log('Computer Wins')
    } else {
        console.log('Tie')
    }

    // let userGameResult = 0
    // let computerGameResult = 0
    // let roundResult = playRound(computerSelection, userSelection)
    // if (roundResult == 'USER') {
    //     userGameResult += 1;
    // } else if (roundResult == 'COMPUTER') {
    //     computerGameResult += 1;
    // }

}
// console.log('Result: ', playRound(getComputerChoice(), 'Rock'))
game()

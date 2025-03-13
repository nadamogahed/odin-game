console.log("Hello To The Greatest Game Ever!");

function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    }
    if (randomNumber < 0.66) {
        return 'paper';
    }
    return 'scissors';
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors. Type 'exit' to quit the game.");
    if (choice === null) {
        return 'exit';
    }
    choice = choice.toLowerCase();
    if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors' && choice !== 'exit') {
        console.log("Invalid choice. Enter your choice: rock, paper, or scissors. Type 'exit' to quit the game.");
        return getHumanChoice(); // Recursive call to ask again
    }
    return choice;
}

function getWinner(computerChoice, humanChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        return 'You win!';
    }
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        return 'You lose!';
    }
    if (humanChoice === 'rock' && computerChoice === 'rock') {
        return 'It is a tie!';
    }
    if (humanChoice === 'paper' && computerChoice === 'scissors') {
        return 'You lose!';
    }
    if (humanChoice === 'paper' && computerChoice === 'paper') {
        return 'It is a tie!';
    }
    if (humanChoice === 'paper' && computerChoice === 'rock') {
        return 'You win!';
    }
    if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        return 'It is a tie!';
    }
    if (humanChoice === 'scissors' && computerChoice === 'paper') {
        return 'You win!';
    }
    if (humanChoice === 'scissors' && computerChoice === 'rock') {
        return 'You lose!';
    }
    return 'Invalid choice';
}

while (true) {
    let humanChoice = getHumanChoice();  // Declare humanChoice here
    if (humanChoice === 'exit') {
        console.log('Game exited.');
        break;
    }

    let computerChoice = getComputerChoice();  // Get the computer's choice
    let winner = getWinner(computerChoice, humanChoice);  // Determine the winner

    console.log('Computer Choice: ' + computerChoice);
    console.log('Human Choice: ' + humanChoice);
    console.log('Results: *-*');
    console.log(winner);
}

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput ==='paper' || userInput === 'scissors'||userInput === 'bomb'){
    return userInput;
  }else{
    return console.log(`${userInput} is not valid`)
  }
};

//test function with valid and invalid input

// getUserChoice('Scissors')
// getUserChoice('bread')


// having the computer make a choice.
function getComputerChoice(){
  randomNumber =Math.floor(Math.random()*3)
  switch (randomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors'
      break;
  }
}

// console.log(getComputerChoice())



function determineWinner(userChoice,computerChoice){
  if (userChoice === computerChoice){
    return 'The game is a tie!';
  }
  if (userChoice === 'rock') {
    if(computerChoice === 'paper'){
      return 'Computer won';
    }else {
      return 'You won!';
    }
  }
     if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'Computer won';
      }else {
        return 'You won!';
      }
    }
    if (userChoice === 'scissors') {
      if(computerChoice === 'rock'){
        return 'Computer won'
      }else {
        return 'You won!';
      }
    }
// add cheat code 'bomb' 
    if (userChoice === 'bomb'){
      if(computerChoice === 'rock'||computerChoice === 'paper'|| computerChoice === 'scissors'||computerChoice === 'bomb')
      return 'You won';
    }
  
}

// comp =getComputerChoice()

// // Testing function
// console.log(`Your choice is: 'paper' \nComputers Choice is: ${comp}\n${determineWinner('paper',comp)}`)

const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  return console.log(determineWinner(userChoice,computerChoice))
}

playGame()







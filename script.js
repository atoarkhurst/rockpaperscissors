//randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’ and saves it as cpuChoice
function computerPlay(){
    let choices = ["rock", "paper", "scissors"];
    let cpuChoice = choices[Math.floor(Math.random()* choices.length)];
    return cpuChoice;
}



//Takes player and cpu selction and plays round 
function playRound(playerSelection, computerSelction){
    if (playerSelection.toLowerCase() === computerSelction.toLowerCase() ){
        return 1;
    }
    if (playerSelection.toLowerCase() === "rock"){
        if(computerSelction.toLowerCase() === "scissors"){
            return 2;
        } else {
            return 0;
        }

    }
    if (playerSelection.toLowerCase() === "scissors"){
        if(computerSelction.toLowerCase() === "paper"){
            return 2;
        } else {
            return 0;
        }

    }
    if (playerSelection.toLowerCase() === "paper"){
        if(computerSelction.toLowerCase() === "rock"){
            return 2;
        } else {
            return 0;
        }

    }
}

//Add an event listener to the buttons that call your playRound function 

const buttons = document.querySelectorAll('button');
let playerChoice = document.querySelector('#playerChoice');
let computerChoice = document.querySelector('#computerChoice');

let playerPoints = document.querySelector('#playerPoints');
let computerPoints= document.querySelector('#computerPoints');
let winner= document.querySelector('#winner');

let pScore = 0;
let cScore = 0;

playerPoints.textContent = pScore;
computerPoints.textContent = cScore;

buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
       
      let computerSelection = computerPlay();
      computerChoice.textContent = computerSelection;
      let playerSelection = button.id;
      playerChoice.textContent = playerSelection;
      let round = playRound(playerSelection, computerSelection);

      

      
      if (round === 2){
          pScore++;
          playerPoints.textContent = pScore;
         
      } else if (round === 0){
          cScore++; 
          computerPoints.textContent = cScore;
        
      }

      if (cScore < 5 && pScore < 5){

    }else{
        if (pScore > cScore){
            winner.textContent = "You Win!";
        }else{
            winner.textContent = "The CPU Wins :(";
        }
    }

    });
  });





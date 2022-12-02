'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let words = [
  {word:"AIDS",hint:"Sexually transmitted diseas",hint1:"",hint2:"",hint3:'',advice:''},
  {word:"CONDOM",hint:"used in relations",hint1:"it can protected you from s",htint3:'',advice:"Always use a condom to protect yourself"},
  {word:"PARTNERS",hint:"limit your sexual relations",hint1:"less people",hint2:"",htint3:'',advice:''},
  {word:"TEST",hint:"Make examination",hint1:"Check a doctor",hint2:"",htint3:'',advice:"Talk to your doctor about pre-exposure prophylaxis"},
  {word:"INFECTION",hint:"transmitted through blood and sexual secretions",hint1:"",hint2:"",htint3:'',advice:'Risk of infection when a condom breaks'},
  {word:"VACCIN",hint:"advanced stage of HIV infection",hint1:"",hint2:"",htint3:'',advice:'Vaccinate to protect against HPV'},
  {word:"VIRUS",hint:" VIH",hint1:" the infected person becomes vulnerable to certain “opportunistic” diseases ",hint2:"",htint3:'',advice:'leads to the destruction of these cells which play a central role in the coordination of immune defences'},
  {word:"DRUGS",hint:"Drug Injection",hint1:"syringe services",hint2:"new needles",htint3:'',advice:'Use new, clean syringes and injection equipment every time you inject.'},
  {word:"PREVENTION",hint:"No vaccine is currently available to prevent HIV",hint1:"a possible exposure",hint2:"",htint3:'',advice:'Talk to your health care provider, an emergency room doctor, or an urgent care provider right away about PEP (post-exposure prophylaxis)'},
];
  let nb = Math.trunc(Math.random() * 10);
console.log(nb);
let secretWord = words[nb];
let score = 20;
let highscore = 0;
document.querySelector('.score').textContent = score;
console.log(secretWord);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

displayMessage(`Hint 1 : ${secretWord.hint} \n  ${secretWord.hint1 !='' ? ` \n Hint 2: ${secretWord.hint1}`:(secretWord.hint2 !='' ? ` \n Hint 3: ${secretWord.hint2}` : '')}`);

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess, typeof guess);
  
  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No Word!');
    
    // When player wins
  } else if (guess.toLowerCase() === secretWord.word.toLowerCase()) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage(secretWord.advice);
    document.querySelector('.number').textContent = secretWord.word;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '50rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    
    // When guess is wrong
  } else if (guess.toLowerCase() !== secretWord.word.toLowerCase()) {
    if (score > 2) {
      score=score-2;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  
  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📈 Too high!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
      //     document.querySelector('.message').textContent = '💥 You lost the game!';
      //     document.querySelector('.score').textContent = 0;
      //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
    //   if (score > 1) {
      //     document.querySelector('.message').textContent = '📉 Too low!';
      //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretWord =words[ Math.trunc(Math.random() * 10)];
  
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage(`Hint 1 : ${secretWord.hint} \n  ${secretWord.hint1 !='' ? ` \n Hint 2: ${secretWord.hint1}`:(secretWord.hint2 !='' ? ` \n Hint 3: ${secretWord.hint2}` : '')}`);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
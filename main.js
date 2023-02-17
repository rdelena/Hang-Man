'use strict';

const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// var name = readline.question("What is your name? ");

// console.log("Hi " + name + ", nice to meet you.");



const wordBank = [
  "variable",
  "terminal",
  "algorithm",
  "accumulator",
  "constructor",
  "object",
  "method",
  "function",
  "element",
  "boolean",
  "loop",
  "dom",
  "array",
  "null",
  "parse"
];

let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(randomWord)

let board = new Array(randomWord.length).fill("_");
console.log(board);

let lives = 6






// const wrongGuess = []

const guess = (input) => {
  for(let i = 0; i < randomWord.length; i++) {
    if(input === randomWord[i]) { 
      board[i] = input

    } 
  }
  if(!randomWord.includes(input)) {
    console.log('You have lost a life')
    lives--

    console.log(`You have ${lives} left`)

  }

  console.log(board)
}


const checkForWin = () => {
  if (!board.includes("_")) {
  console.log(`You won!`)
} else if (lives === 0) {

  console.log('You lose!')
}
 
}



const hangMan = (answer) => {

  guess(answer)

  checkForWin()
}



const getPrompt = () => {
  rl.question('Guess a letter! ', (answer) => {
    hangMan(answer) ;
    getPrompt();
  });
}

getPrompt()

"use strict";

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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
  "parse",
];

// Uses the word bank to randomize array and choose a word for the hangman game.
let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
// console.log(randomWord) to show answer in terminal

// creates a new array that pushes the random word and changes each letter into an underscore "_"
let board = new Array(randomWord.length).fill("_");
console.log(board);

// sets the number lives for the player lives
let lives = 6;

// takes the input of the player
const guess = (input) => {
  // loops through the randomWord array checks if input is equal to the
  for (let i = 0; i < randomWord.length; i++) {
    if (input === randomWord[i]) {
      // sets board array as input
      board[i] = input;
    }
  }
  // condition if random word is not found
  if (!randomWord.includes(input)) {
    console.log("You have lost a life");
    // subtracts a life
    lives--;
    console.log(`You have ${lives} left`);
  }
  // console.log(hangManPics[lives])
  console.log(board);
};

// If board still has an underscore string "_"
const checkForWin = () => {
  if (!board.includes("_")) {
    console.log(`YOU WON! ☜(ﾟヮﾟ☜)`);
  } else if (lives === 0) {
    console.log(`You lose! The word was: ${randomWord}`);
  }
};
// Checks how many lives the player has and populates a hangman figure for each life taken
function checkNumLives() {
  if (lives === 6) {
    console.log(
      "===========",
      "\n",
      "|---------",
      "\n",
      "|---------",
      "\n",
      "|---------",
      "\n",
      "|---------"
    );
  }
  if (lives === 5) {
    console.log(
      "===========",
      "\n",
      "|--------O",
      "\n",
      "|---------",
      "\n",
      "|---------",
      "\n",
      "|---------"
    );
  }
  if (lives === 4) {
    console.log(
      "===========",
      "\n",
      "|--------O",
      "\n",
      "|--------|",
      "\n",
      "|---------",
      "\n",
      "|---------"
    );
  }
  if (lives === 3) {
    console.log(
      "===========",
      "\n",
      "|--------O",
      "\n",
      "|-------/|",
      "\n",
      "|---------",
      "\n",
      "|---------"
    );
  }
  if (lives === 2) {
    console.log(
      "===========",
      "\n",
      "|--------O",
      "\n",
      "|-------/|\\",
      "\n",
      "|---------",
      "\n",
      "|---------"
    );
  }
  if (lives === 1) {
    console.log(
      "===========",
      "\n",
      "|--------O",
      "\n",
      "|-------/|\\",
      "\n",
      "|-------/-",
      "\n",
      "|---------"
    );
  }
  if (lives === 0) {
    console.log(
      "===========",
      "\n",
      "|--------O",
      "\n",
      "|-------/|\\",
      "\n",
      "|-------/-\\",
      "\n",
      "|---------"
    );
  }
}

// hangMan function runs other functions and takes an answer as a parameter
const hangMan = (answer) => {
  guess(answer);
  checkNumLives();
  checkForWin();
};

// shows the prompt for users to see instruction and type their guesses
const getPrompt = () => {
  rl.question("Guess a letter! ", (answer) => {
    hangMan(answer);
    getPrompt();
  });
};

getPrompt();

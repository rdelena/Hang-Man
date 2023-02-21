Code Plan

-create a Hangman game where letters are chosen to complete a predetermined word.

-use get prompt () function to let user input guesses

-The word bank will store all the random words that will be used for the player to guess.

-create a function to generate a random word out our array of words using math.floor and math.random method to cycle through array

-Reveal a letter from a word if a user inputs that letter and it exists in the word. If it doesn't let the user know number of lives remaining out of 6

-check for win function checks to make sure letters match with random word after every turn

-board function to show the amount of letters on random word using \_ in an array

-We need to change every letter in the array.length of the random word so that players are not able to see what the word is. How many plans should the player have? We decided on 6.

-create ascii diagram for terminal in order to see the classic hang man/body part image appear after every wrong guess

-show what word was when you lose

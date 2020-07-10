'use strict';

import {startGame} from "/game.js";

function main(){
  displayMenu();
  startGame();
  recordScore();
}

function displayMenu(){
  console.log('Menu Displayed');
}

function recordScore(){
  console.log('Score Recorded');
}

main();
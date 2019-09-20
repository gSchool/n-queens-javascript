const GameBoard = require('./GameBoard');

const gameboard = new GameBoard();

const resultingBoard = gameboard.solveNQueens(8, [3,0]);

console.log(resultingBoard);
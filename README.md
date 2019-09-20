# N(Eight) Queens

## Goal
The eight queens puzzle is the problem of placing eight chess queens on an 8×8 chessboard so that no two queens threaten each other. Thus, a solution requires that no two queens share the same row, column or diagonal. The eight queens puzzle is an example of the more general N queens problem of placing N non-attacking queens on an N×N chessboard.

You will receive a number `N (0 < N <= 50)` and have to place N queens on a N×N chessboard, so that no two queens attack each other. This requires that no two queens share the same row, column or diagonal. You will also receive the mandatory position of one queen. This position is given 0-based in the format `{ x , y }` with `0 <= x < N and 0 <= y < N`. The coordinates `{0, 0}` are in the top left corner of the board. For many given parameters multiple solutions are possible. You have to find one of the possible solutions, all that fit the requirements will be accepted.

You have to return the solution board as a string, indicating empty fields with '.' (period) and Queens with 'Q' (uppercase Q), ending each row with '\n'.

If no solution is possible for the given parameters, return an empty string "".

Example:
```
const gameboard = new GameBoard();
gameboard.solveNQueens(8, [3, 0]);
```

could return:

`"...Q....\n......Q.\n..Q.....\n.......Q\n.Q......\n....Q...\nQ.......\n.....Q..\n"`
giving the following board:

```
...Q....
......Q.
..Q.....
.......Q
.Q......
....Q...
Q.......
.....Q..
```

(Other solutions to this example are possible and accepted. The mandatory queen has to be in its position, in the example in the first row at `{3, 0}`.)

Start with n always fixed at `n = 8`.  Feel free to add test cases to confirm and drive your solution.

## Setup

- Clone this repository
- `npm install`
- `npm test` to run the tests
- `npm start` to see a printout of the board. Update `index.js` with different parameters to see the board print state when given different parameters.

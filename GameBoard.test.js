const GameBoard = require('./GameBoard');

describe('Gameboard', () => {
    it('return the correct board for n=8 and the initial queen at [3,0]', () => {
        const gameboard = new GameBoard();
        const expected = "...Q....\n......Q.\n..Q.....\n.......Q\n.Q......\n....Q...\nQ.......\n.....Q..\n";
        const actual = gameboard.solveNQueens(8, [3,0]);
        expect(actual).toEqual(expected);
    });

    // TODO: add your own tests in order to be able to handle multiple inputs

});
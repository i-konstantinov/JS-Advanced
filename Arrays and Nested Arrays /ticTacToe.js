function solve(moves) {
        function checkForWin(field, coordinates) {
        let [x,y] = coordinates;
        let sign = field[x][y];
        let hasWon = false;
        
        if (field[0][y] == sign && field[1][y] == sign && field[2][y] == sign) {
            hasWon = true;
        }
        else if (field[x][0] == sign && field[x][1] == sign && field[x][2] == sign) {
            hasWon = true;
        }
        else if (field[1][1] == sign) {
            if (field[0][0] == sign && field[1][1] == sign && field[2][2] == sign) {
                hasWon = true;
            }
            else if (field[0][2] == sign && field[1][1] == sign && field[2][0] == sign) {
                hasWon = true;
            }   
        }
        return hasWon;
    }

    function printResult(field) {
        for (let i=0; i<field.length; i++) {
            console.log(field[i].join("\t"));
        }
    }       

    let gameWin = false;

    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false],   
    ]

    let currentPl = 'X';

    for (let i = 0; i<moves.length; i++) {

        let [x, y]= moves[i].split(' ');

        if (x<board.length && y<board.length) {
            if (board[x][y]) {
                console.log("This place is already taken. Please choose another!");
            }  
            else {
                board[x][y] = currentPl;
                    
                if (checkForWin(board, [x,y]) == true) {
                    gameWin = true;
                    console.log(`Player ${currentPl} wins!`);
                    printResult(board);
                    break;
                }
                currentPl = currentPl == 'X' ? 'O' : 'X';
            }
        } 
    }
        
    if (!gameWin) {
        console.log("The game ended! Nobody wins :(");
        printResult(board);
    }
}

solve(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]);
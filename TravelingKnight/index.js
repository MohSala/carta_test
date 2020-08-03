const travellingKnight = (board, p, q) => {

    //created a dictionary of possible movements for the knight to move in an Lshape manner
    const moveA = [2, 1, -1, -2, -2, -1, 1, 2];
    const moveB = [1, 2, 2, 1, -1, -2, -2, -1];


    for (let i = 0; i < 8; i++) {
        const x = p + moveA[i];
        const y = q + moveB[i];
        //condition to check if start position and movement are outside board size
        if (p < 0 || q < 0 || p >= board.length || q >= board.length) {
            return;
        }
        else
            if (x >= 0 && y >= 0 && x < board.length && y < board.length) {
                console.table({ x: x, y: y })
            }
    }
    return;
}


//implementing the chess board as a 2Dimensional array to test output
const arr = [
    [1, 0, 1, 0],
    [0, 1, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 1]]

//driver function using 0,0 as start index for the knight
travellingKnight(arr, 0, 0)
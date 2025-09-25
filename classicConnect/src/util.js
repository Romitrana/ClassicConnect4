function checkWinner(board) {
  const size = board.length;

  // Helper to check if all cells in an array belong to the same player
  const allSame = (cells) =>
    cells.every((cell) => cell !== null && cell === cells[0]);

  // Check rows
  for (let r = 0; r < size; r++) {
    for (let c = 0; c <= size - 4; c++) {
      if (
        allSame([
          board[r][c],
          board[r][c + 1],
          board[r][c + 2],
          board[r][c + 3],
        ])
      ) {
        return board[r][c]; // winning player
      }
    }
  }

  // Check columns
  for (let c = 0; c < size; c++) {
    for (let r = 0; r <= size - 4; r++) {
      if (
        allSame([
          board[r][c],
          board[r + 1][c],
          board[r + 2][c],
          board[r + 3][c],
        ])
      ) {
        return board[r][c];
      }
    }
  }

  // Check diagonals (\ direction)
  for (let r = 0; r <= size - 4; r++) {
    for (let c = 0; c <= size - 4; c++) {
      if (
        allSame([
          board[r][c],
          board[r + 1][c + 1],
          board[r + 2][c + 2],
          board[r + 3][c + 3],
        ])
      ) {
        return board[r][c];
      }
    }
  }

  // Check diagonals (/ direction)
  for (let r = 3; r < size; r++) {
    for (let c = 0; c <= size - 4; c++) {
      if (
        allSame([
          board[r][c],
          board[r - 1][c + 1],
          board[r - 2][c + 2],
          board[r - 3][c + 3],
        ])
      ) {
        return board[r][c];
      }
    }
  }

  // Check for draw (all cells filled)
  const isDraw = board.every((row) => row.every((cell) => cell !== null));
  if (isDraw) return "draw";

  // No winner yet
  return null;
}

export default checkWinner;

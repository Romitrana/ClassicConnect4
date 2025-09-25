import checkWinner from "../util";
const GameBoard = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];

import { useState } from "react";

export default function Board({ onPlay }) {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [board, setBoard] = useState(GameBoard);

  function clickDot(r, c) {
    if (board[r][c] !== null) return; // prevent clicking filled cell

    // Update board
    const newBoard = board.map((row) => [...row]);
    newBoard[r][c] = currentPlayer;
    setBoard(newBoard);

    // Check winner / draw
    const result = checkWinner(newBoard);
    if (result === 0) {
      alert("🟡Player 1 wins!");
      resetGame();
      return;
    } else if (result === 1) {
      alert("🔴Player 2 wins!");
      resetGame();
      return;
    } else if (result === "draw") {
      alert("😒It's a draw!");
      resetGame();
      return;
    }

    // Switch to next player
    const nextPlayer = currentPlayer === 0 ? 1 : 0;
    setCurrentPlayer(nextPlayer);
    onPlay(nextPlayer);
  }

  function resetGame() {
  const emptyBoard = Array(7)
    .fill(null)
    .map(() => Array(7).fill(null));
  setBoard(emptyBoard);
  setCurrentPlayer(0);
  onPlay(0);
}


  return (
    <div className="gameboard">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <button
              className={`dot ${
                cell === 0 ? "yellowDot" : cell === 1 ? "redDot" : ""
              }`}
              key={colIndex}
              onClick={() => clickDot(rowIndex, colIndex)}
            ></button>
          ))}
        </div>
      ))}
    </div>
  );
}

import { useState } from "react";

const initialBoard = () => {
  return Array(9).fill(null);
};

const useTictactoe = () => {
  const [board, setBoard] = useState(initialBoard());
  console.log(board);
  const [isXNext, setIsXNext] = useState(true);

  const WINNING_PATTERNS = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // First column
    [1, 4, 7], // Second column
    [2, 5, 8], // Third column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
  ];

  const calculateWinner = (currentBoard) => {
    
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i];

      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    const winner = calculateWinner(board);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const getStatusMessaage = () => {
    const winner = calculateWinner(board)
    if (winner) return `Player ${winner} wins!`
    if(!board.includes(null)) return "It's a draw!"
    return `Player ${isXNext ? "X"  : "O"}'s turn`;
  };

  const resetGame = () => {
    setBoard(initialBoard());
    setIsXNext(true)
  };

  return { board, handleClick, calculateWinner, getStatusMessaage, resetGame };
};

export default useTictactoe;

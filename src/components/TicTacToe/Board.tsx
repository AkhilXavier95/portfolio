"use client";
import { useState } from "react";
import Box from "./Box";
import { WINNER_TILES } from "./constant";

type Player = "X" | "O" | null;

const Board = () => {
  const [boardValues, setBoardValues] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<Player>(null);

  const calculateWinner = (squares: Player[]): Player => {
    for (const [a, b, c] of WINNER_TILES) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index: number): void => {
    if (boardValues[index] || winner) return;

    const newBoard = [...boardValues];
    newBoard[index] = isXNext ? "X" : "O";

    const gameWinner = calculateWinner(newBoard);
    setBoardValues(newBoard);
    setIsXNext(!isXNext);
    setWinner(gameWinner);
  };

  const handleReset = (): void => {
    setBoardValues(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-4 justify-between items-center h-20 w-full">
        <div className="text-2xl font-semibold mb-2">
          {winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? "X" : "O"}`}
        </div>
        {(winner || boardValues.every(Boolean)) && (
          <button
            onClick={handleReset}
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition m-2"
          >
            Reset Game
          </button>
        )}
      </div>

      <div className="flex flex-col items-center gap-6 bg-white">
        <div className="grid grid-cols-3">
          {boardValues.map((value, idx) => (
            <Box key={idx} value={value} handleClick={() => handleClick(idx)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;

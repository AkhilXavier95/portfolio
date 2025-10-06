import React from "react";

interface BoxProps {
  guess: string;
  solution: string;
  i: number;
  isFinal: boolean;
}

const Box: React.FC<BoxProps> = ({ guess, solution, i, isFinal }) => {
  const isCorrect = isFinal && solution && guess && guess[i] === solution[i];
  const isWrongPosition =
    isFinal && solution && guess && solution.includes(guess[i]) && !isCorrect;
  return (
    <div
      className={
        `w-10 h-10 border border-gray-100 m-1 text-2xl font-bold flex items-center justify-center` +
        (isCorrect ? " bg-green-400 text-white" : "") +
        (isWrongPosition ? " bg-yellow-400 text-white" : "") +
        (isFinal ? " bg-gray-700 text-white" : "")
      }
    >
      {guess[i] ? guess[i].toUpperCase() : ""}
    </div>
  );
};

export default Box;

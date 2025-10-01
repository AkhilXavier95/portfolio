import React from "react";

interface BoxProps {
  solution: string;
  guess: string;
  i: number;
}

const Box: React.FC<BoxProps> = ({ solution, guess, i }) => {
  const isCorrect = solution && guess && guess[i] === solution[i];
  const isWrongPosition =
    solution && guess && solution.includes(guess[i]) && !isCorrect;
  return (
    <div
      className={
        `w-10 h-10 border border-gray-100 m-1 text-2xl font-bold flex items-center justify-center` +
        (isCorrect ? " bg-green-400 text-white" : "") +
        (isWrongPosition ? " bg-yellow-400 text-white" : "")
      }
    >
      {guess ? guess[i] : ""}
    </div>
  );
};

export default Box;

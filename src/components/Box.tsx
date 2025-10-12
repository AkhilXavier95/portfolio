import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface BoxProps {
  guess: string;
  solution: string;
  i: number;
  isFinal: boolean;
}

const Box: React.FC<BoxProps> = ({ guess, solution, i, isFinal }) => {
  const [flipped, setFlipped] = useState(false);

  const isCorrect = solution && guess && guess[i] === solution[i];
  const isWrongPosition =
    solution && guess && solution.includes(guess[i]) && !isCorrect;

  useEffect(() => {
    if (isFinal) {
      const timer = setTimeout(() => setFlipped(true), i * 500);
      return () => clearTimeout(timer);
    }
  }, [isFinal, i]);

  let bgColor = "";

  if (flipped) {
    const letter = guess[i];
    const solutionLetters = solution.split("");

    // First, count greens in solution
    let usedCount = 0;
    for (let j = 0; j < solutionLetters.length; j++) {
      if (solutionLetters[j] === letter && guess[j] === letter) {
        usedCount++;
      }
    }

    // Count letters in solution
    const totalInSolution = solutionLetters.filter((l) => l === letter).length;

    if (isCorrect) {
      bgColor = "bg-green-400";
    } else if (isWrongPosition && usedCount < totalInSolution) {
      bgColor = "bg-yellow-400";
    } else {
      bgColor = "bg-gray-700";
    }
  }

  return (
    <div className="w-10 h-10 m-1 perspective">
      <motion.div
        initial={{ rotateX: 0 }}
        animate={{ rotateX: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative w-full h-full border border-gray-100 text-2xl font-bold text-white"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front side */}
        <div className="absolute inset-0 flex items-center justify-center bg-black backface-hidden">
          {guess[i]?.toUpperCase() || ""}
        </div>

        {/* Back side */}
        <div
          className={`absolute inset-0 flex items-center justify-center ${bgColor} backface-hidden`}
          style={{ transform: "rotateX(180deg)" }}
        >
          {guess[i]?.toUpperCase() || ""}
        </div>
      </motion.div>
    </div>
  );
};

export default Box;

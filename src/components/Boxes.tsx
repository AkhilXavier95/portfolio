import React from "react";
import Box from "./Box";

type BoxesProps = {
  guess: string | null;
  solution: string;
  isFinal: boolean;
};

const WORD_LENGTH = 5;

const Boxes: React.FC<BoxesProps> = ({ guess, solution, isFinal }) => {
  return (
    <div className="flex gap-1">
      {[...Array(WORD_LENGTH)].map((_, i) => (
        <Box
          key={i}
          guess={guess ?? ""}
          solution={solution}
          i={i}
          isFinal={isFinal}
        />
      ))}
    </div>
  );
};

export default Boxes;

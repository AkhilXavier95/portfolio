"use client";

import React from "react";

type BoxesProps = {
  guess: string | null;
};

const WORD_LENGTH = 5;

const Boxes: React.FC<BoxesProps> = ({ guess }) => {
  return (
    <div className="flex">
      {[...Array(WORD_LENGTH)].map((_, i) => (
        <div
          key={i}
          className="w-10 h-10 border border-gray-100 m-1 text-2xl font-bold flex items-center justify-center"
        >
          {guess ? guess[i] : ""}
        </div>
      ))}
    </div>
  );
};

export default Boxes;

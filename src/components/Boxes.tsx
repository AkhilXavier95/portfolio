"use client";

import React from "react";
import Box from "./Box";

type BoxesProps = {
  guess: string | null;
  solution?: string;
};

const WORD_LENGTH = 5;

const Boxes: React.FC<BoxesProps> = ({ guess, solution }) => {
  return (
    <div className="flex">
      {[...Array(WORD_LENGTH)].map((_, i) => (
        <Box key={i} i={i} guess={guess} solution={solution} />
      ))}
    </div>
  );
};

export default Boxes;

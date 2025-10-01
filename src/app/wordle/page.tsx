"use client";

import Boxes from "@/components/Boxes";
import React, { useEffect, useState } from "react";

const SOLUTION = "REACT";

const Wordle = () => {
  const [guesses, setGuesses] = useState<string[]>(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
      }
      setCurrentGuess((prevGuesses) => prevGuesses + e.key);
    });
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="uppercase p-4 text-4xl font-bold">Wordle</h1>
      <div className="flex justify-center min-w-3xl items-center flex-col">
        {guesses.map((guess, i) => {
          const isCurrentGuess = i === guesses.findIndex((g) => g === null);
          return (
            <Boxes guess={isCurrentGuess ? currentGuess : guess} key={i} />
          );
        })}
      </div>
    </main>
  );
};

export default Wordle;

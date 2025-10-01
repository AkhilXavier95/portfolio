"use client";

import Boxes from "@/components/Boxes";
import React, { useEffect, useState } from "react";

const SOLUTION = "REACT";

const Wordle = () => {
  const [guesses, setGuesses] = useState<string[]>(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");

  const handleEnter = () => {
    setGuesses((prevGuesses) => {
      const nextGuesses = [...prevGuesses];
      const currentIndex = nextGuesses.findIndex((g) => g === null);
      if (currentIndex !== -1 && currentGuess.length === 5) {
        nextGuesses[currentIndex] = currentGuess.toUpperCase();
      }
      return nextGuesses;
    });
    setCurrentGuess("");
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (SOLUTION === guesses[guesses.findIndex((g) => g === null) - 1]) {
      return;
    }
    if (e.key === "Enter") {
      handleEnter();
      return;
    }
    if (e.key === "Backspace") {
      setCurrentGuess((prevGuesses) => prevGuesses.slice(0, -1));
      return;
    }
    if (currentGuess.length >= 5 || !/^[a-zA-Z]$/.test(e.key)) {
      return;
    }
    setCurrentGuess((prevGuesses) => prevGuesses + e.key);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [guesses, currentGuess]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="uppercase p-4 text-4xl font-bold">Wordle</h1>
      <div className="flex justify-center min-w-3xl items-center flex-col">
        {guesses.map((guess, i) => {
          const isCurrentGuess = i === guesses.findIndex((g) => g === null);
          return (
            <Boxes
              guess={isCurrentGuess ? currentGuess : guess}
              key={i}
              solution={SOLUTION}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Wordle;

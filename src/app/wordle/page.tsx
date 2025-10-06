"use client";

import Boxes from "@/components/Boxes";
import React, { useEffect } from "react";

const Wordle = () => {
  const [solution, setSolution] = React.useState<string>("");
  const [guesses, setGuesses] = React.useState<string[]>(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = React.useState<string>("");
  const [isGameOver, setIsGameOver] = React.useState<boolean>(false);
  const getWord = async () => {
    const res = await fetch(
      "https://random-word-api.herokuapp.com/word?length=5"
    );
    const data = await res.json();
    const wordIndex = Math.floor(Math.random() * data.length);
    setSolution(data[wordIndex]);
  };

  useEffect(() => {
    getWord();
  }, []);

  const gameOver = () => {
    if (!isGameOver) setIsGameOver(true);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (solution === guesses[guesses.findIndex((g) => g === null) - 1]) return;

    if (event.key === "Enter") {
      setGuesses((prev) => {
        const nextGuesses = [...prev];
        const currentIndex = nextGuesses.findIndex((g) => g === null);
        if (currentIndex !== -1 && currentGuess.length === 5) {
          nextGuesses[currentIndex] = currentGuess;
        }
        return nextGuesses;
      });

      if (
        (currentGuess.length === 5 && currentGuess === solution) ||
        guesses[5] !== null
      ) {
        gameOver();
      }

      setCurrentGuess("");
      return;
    }

    if (event.key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    if (currentGuess.length >= 5 || !/^[a-zA-Z]$/.test(event.key)) return;
    setCurrentGuess((prev) => prev + event.key.toLocaleLowerCase());
    return;
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentGuess, guesses]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-900 text-white">
      <h1 className="font-bold text-4xl mb-4">Wordle Game</h1>
      <p className="font-normal text-xl mb-4">Guess the 5-letter word!</p>
      <div className="flex flex-col gap-1">
        {guesses.map((guess, index) => {
          const isCurrentGuess = index === guesses.findIndex((g) => g === null);
          return (
            <Boxes
              key={index}
              guess={isCurrentGuess ? currentGuess : guess}
              solution={solution}
              isFinal={!isCurrentGuess && guess !== null}
            />
          );
        })}
      </div>
      <div
        className="m-8 text-2xl font-bold opacity-0 animate-fade-in min-h-[2.5rem] text-center"
        style={{ animation: "fade-in 1s forwards" }}
      >
        {isGameOver &&
          (guesses.includes(solution)
            ? "🎉 Congratulations! You guessed the word!"
            : `😢 Game Over! The word was ${solution}.`)}
      </div>
    </main>
  );
};

export default Wordle;

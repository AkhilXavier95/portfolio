"use client";

import Boxes from "@/components/Boxes";
import Keyboard from "@/components/Keyboard";
import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Wordle = () => {
  const [solution, setSolution] = React.useState<string>("");
  const [guesses, setGuesses] = React.useState<string[]>(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = React.useState<string>("");
  const [isGameOver, setIsGameOver] = React.useState<boolean>(false);
  const [showError, setShowError] = React.useState<boolean>(false);
  const [errMessage, setErrMessage] = React.useState<string>("");

  const getWord = async () => {
    const res = await fetch(
      "https://random-word-api.vercel.app/api?words=100&length=5"
    );
    const data = await res.json();
    const wordIndex = Math.floor(Math.random() * data.length);
    setSolution(data[wordIndex]);
  };

  useEffect(() => {
    getWord();
  }, []);

  useEffect(() => {
    if (isGameOver) return;

    if (guesses.includes(solution) || guesses.every((g) => g !== null)) {
      setIsGameOver(true);
    }
  }, [guesses, solution]);

  const handleKeyDown = useCallback(
    (key: string) => {
      const currentIndex = guesses.findIndex((g) => g === null);
      if (currentIndex > 0 && solution === guesses[currentIndex - 1]) return;

      if (key === "Enter") {
        if (currentGuess.length !== 5) {
          setErrMessage("Word must be 5 letters long!");
          triggerErrorAnimation();
          return;
        }

        setGuesses((prev) => {
          const nextGuesses = [...prev];
          const currentIndex = nextGuesses.findIndex((g) => g === null);
          if (currentIndex !== -1 && currentGuess.length === 5) {
            nextGuesses[currentIndex] = currentGuess;
          }
          return nextGuesses;
        });

        setCurrentGuess("");
        return;
      }

      if (key === "Backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
        return;
      }

      if (currentGuess.length >= 5 || !/^[a-zA-Z]$/.test(key)) return;

      setCurrentGuess((prev) => prev + key.toLocaleLowerCase());

      return;
    },
    [currentGuess, guesses, solution]
  );

  useEffect(() => {
    const listener = (e: KeyboardEvent) => handleKeyDown(e.key);
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [currentGuess, guesses]);

  const triggerErrorAnimation = () => {
    setShowError(true);
    setTimeout(() => setShowError(false), 1000);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-900 text-white relative">
      <AnimatePresence>
        {showError && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-4 p-3 bg-red-500 text-white rounded-lg font-medium fixed top-4"
          >
            {errMessage}
          </motion.div>
        )}
      </AnimatePresence>
      <h1 className="font-bold text-4xl mb-4">Wordle Game</h1>
      <p className="font-normal text-xl mb-4">Guess the 5-letter word!</p>

      {guesses.map((guess, index) => {
        const isCurrentGuess = index === guesses.findIndex((g) => g === null);
        return (
          <motion.div
            key={index}
            className="flex flex-col gap-1"
            animate={
              showError && isCurrentGuess
                ? {
                    x: [0, -10, 10, -10, 10, 0]
                  }
                : {}
            }
            transition={{ duration: 0.5 }}
          >
            <Boxes
              guess={isCurrentGuess ? currentGuess : guess}
              solution={solution}
              isFinal={!isCurrentGuess && guess !== null}
            />
          </motion.div>
        );
      })}
      <div
        className="m-8 text-2xl font-bold opacity-0 animate-fade-in min-h-[2.5rem] text-center"
        style={{ animation: "fade-in 1s forwards" }}
      >
        {isGameOver &&
          (guesses.includes(solution)
            ? "🎉 Congratulations! You guessed the word!"
            : `😢 Game Over! The word was ${solution}.`)}
      </div>
      <Keyboard handleKeyDown={handleKeyDown} />
    </main>
  );
};

export default Wordle;

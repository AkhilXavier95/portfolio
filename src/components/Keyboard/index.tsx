"use client";

import React from "react";

interface KeyboardProps {
  handleKeyDown: (key: string) => void;
}

const keys = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "Backspace"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "Enter"],
  ["z", "x", "c", "Space", "v", "b", "n", "m"]
];
const Keyboard: React.FC<KeyboardProps> = ({ handleKeyDown }) => {
  const showKey = (key: string) => {
    switch (key) {
      case "Backspace":
        return "⌫";
      case "Enter":
        return "⏎";
      case "Space":
        return "␣";
      default:
        return key.toUpperCase();
    }
  };

  return (
    <div className="mt-4 max-w-md px-2">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1 mb-1">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => handleKeyDown(key)}
              className={`flex justify-center items-center py-2 rounded gap-1 ${
                key === "Space" ? "w-36 md:w-40" : "w-8 md:w-10"
              } bg-gray-700 text-white hover:bg-gray-600 active:bg-gray-500`}
            >
              {showKey(key)}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;

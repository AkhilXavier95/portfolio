"use client";
import { motion } from "framer-motion";
import React from "react";

interface BoxProps {
  value: string | null;
  handleClick: () => void;
  isWinning?: boolean;
}

const Box: React.FC<BoxProps> = ({ value, handleClick }) => {
  return (
    <motion.div
      className="w-40 h-40 border border-gray-800 flex justify-center items-center font-bold text-4xl text-black cursor-pointer"
      onClick={handleClick}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0, rotateY: 90, opacity: 0 }}
      animate={{ scale: 1, rotateY: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {value && (
        <motion.span
          key={value}
          initial={{ scale: 0, rotateX: 90, opacity: 0 }}
          animate={{ scale: 1, rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {value}
        </motion.span>
      )}
    </motion.div>
  );
};

export default Box;

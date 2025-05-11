import { createContext, useContext, useState, useCallback } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState(null);
  const numberOfHoles = 9;

  const startGame = useCallback(() => {
    setScore(0);
    setIsPlaying(true);
    setMolePosition(Math.floor(Math.random() * numberOfHoles));
  }, [numberOfHoles]);

  const whackMole = useCallback(
    (index) => {
      if (isPlaying && index === molePosition) {
        setScore((prevScore) => prevScore + 1);
        setMolePosition(Math.floor(Math.random() * numberOfHoles));
      }
    },
    [isPlaying, molePosition, numberOfHoles]
  );

  const restartGame = useCallback(() => {
    setIsPlaying(false);
    setMolePosition(null);
  }, []);

  const contextValue = {
    isPlaying,
    score,
    molePosition,
    numberOfHoles,
    startGame,
    whackMole,
    restartGame,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}

import { useGame } from "./GameContext";
import Hole from "./Hole";
import Mole from "./Mole";

export default function GameArea() {
  const { score, numberOfHoles, restartGame, molePosition, whackMole } =
    useGame();

  const holes = Array.from({ length: numberOfHoles }, (_, index) => (
    <Hole key={index} index={index} onClick={whackMole}>
      {molePosition === index && <Mole />}
    </Hole>
  ));

  return (
    <div className="game-area">
      <div className="controls">
        <div className="score">Score: {score}</div>
        <button onClick={restartGame}>Restart</button>
      </div>
      <div className="grid">{holes}</div>
    </div>
  );
}

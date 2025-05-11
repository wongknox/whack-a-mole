import { useGame } from "./GameContext";
import WelcomeScreen from "./WelcomeScreen";
import GameArea from "./GameArea";

export default function App() {
  const { isPlaying } = useGame();

  return (
    <div className="app">{isPlaying ? <GameArea /> : <WelcomeScreen />}</div>
  );
}

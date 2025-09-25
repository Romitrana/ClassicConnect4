import Player from "./Player";
export default function Header({playerStatus}) {
  return (
    <div className="header">
      <Player player="Player 1" p={playerStatus} t={0}/>
      <Player player="Player 2" p={playerStatus} t={1}/>
    </div>
  );
}

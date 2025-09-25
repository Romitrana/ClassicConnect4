import Header from "./components/Header";
import Board from "./components/Board";
import "./App.css";
import { useState } from "react";
function App() {
  const [play,setPlay] = useState(0)
  function currentPlayer(cPlayer){
  setPlay(cPlayer)
  }
  return (
    <main className="container">
      <Header playerStatus={play}/>
      <Board onPlay={currentPlayer}/>
    </main>
  );
}

export default App;

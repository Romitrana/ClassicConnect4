import { useState, useRef } from "react";
export default function Player({ player, p, t }) {
  const [isEdit, setIsEdit] = useState(false);
  const [playerName, setPlayerName] = useState(player);
  const inputRef = useRef("");

  function editing() {
    setIsEdit((prev) => !prev);
  }

  function handleChangeName() {
    setPlayerName(inputRef.current.value);
  }
  const playerDisplay = isEdit ? (
    <input
      type="text"
      className="playername"
      ref={inputRef}
      value={playerName}
      onChange={handleChangeName}
    />
  ) : (
    <span className="playername">{playerName}</span>
  );
  return (
    <div className={`player ${p == t ? "active" : ""}`}>
      <span className={`playerCircle ${t ? "redDot" : "yellowDot"}`}></span>
      {playerDisplay}
      <button className="btn" onClick={editing}>
        {isEdit ? "Save" : "Edit"}
      </button>
    </div>
  );
}

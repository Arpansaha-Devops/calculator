import React, { useState } from "react";

const AlphabetGame = () => {
  const [letters, setLetters] = useState(
    Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
  );

  const handleHover = (letter) => {
    setLetters((prev) => prev.filter((l) => l !== letter));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Hover to Remove Letters</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {letters.map((letter) => (
          <div
            key={letter}
            onMouseEnter={() => handleHover(letter)}
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid black",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlphabetGame;
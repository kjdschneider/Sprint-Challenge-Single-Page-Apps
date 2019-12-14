import React from "react";

export default function CharacterCard({char}) {
  return (
    <div className='char-card'>
      <h2>{char.name}</h2>
      <p>Gender: {char.gender}<br />Species: {char.species}<br />Status: {char.status}</p>
    </div>
  );
}

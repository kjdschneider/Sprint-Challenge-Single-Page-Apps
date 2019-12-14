import React from "react";

export default function CharacterCard({char}) {
  return (
    <div className='char-card'>
      <h3>{char.name}</h3>
      <p>Gender: {char.gender}<br />Species: {char.species}<br />Status: {char.status}</p>
    </div>
  );
}

import React from "react";

export default function EpisodeCard({ episode }) {
  return (
      <div>
          <h3>{episode.name}</h3>
          <p>Aired originally: {episode.air_date}</p>
      </div>
  );
}
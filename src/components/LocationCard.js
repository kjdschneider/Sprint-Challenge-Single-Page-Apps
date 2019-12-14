import React from "react";

export default function LocationCard({ location }) {
  return (
    <div>
      <h3>{location.name}</h3>
      <p>Type: {location.type}<br />Dimension: {location.dimension}</p>
    </div>
  );
}

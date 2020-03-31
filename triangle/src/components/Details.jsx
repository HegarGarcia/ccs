import React from "react";
import { Cell } from "../styles";

export function Details({ details }) {
  const { area, perimeter, type } = details;
  return (
    <Cell>
      <p>
        <span>Área:</span> {area}
      </p>
      <p>
        <span>Perímetro:</span> {perimeter}
      </p>
      <p>
        <span>Type:</span> {type}
      </p>
    </Cell>
  );
}

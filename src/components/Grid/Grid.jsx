import React from "react";
import "./grid.scss";

export function Grid({ children }) {
  return (
    <div className="grid">
      {children}
    </div>
  );
}

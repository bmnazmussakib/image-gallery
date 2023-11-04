import React, { forwardRef, useState } from "react";
import "./photo.scss";

export const Photo = forwardRef(
  ({ url, index, faded, style, id, handleOnChange, ...props }, ref) => {
    const inlineStyles = {
      opacity: faded ? "0.2" : "1",
      transformOrigin: "0 0",
      height: index === 0 ? 420 : 200,
      gridRowStart: index === 0 ? "span 2" : null,
      gridColumnStart: index === 0 ? "span 2" : null,
      backgroundImage: `url("${url}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "grey",
      ...style,
    };

    return (
      <div
        style={index === 0 ? inlineStyles : {}}
        className="image-wrapper card"
      >
        <div className="input-wrapper">
          <input type="checkbox" value={id} onChange={handleOnChange} />
        </div>
        <div className="card" ref={ref} style={inlineStyles} {...props} />
      </div>
    );
  }
);

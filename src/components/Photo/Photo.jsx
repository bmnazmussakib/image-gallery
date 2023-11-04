import React, { forwardRef, useState } from "react";
import "./photo.scss";

/**
 * Photo component is responsible for rendering individual images with optional checkboxes.
 * @param {Object} props - Component props, including url, index, faded, style, id, and handleOnChange.
 * @param {React.Ref} ref - Ref to the rendered element.
 * @returns {JSX.Element} - Rendered Photo component.
 */

export const Photo = forwardRef(
  ({ url, index, faded, style, id, handleOnChange, ...props }, ref) => {
    // Define inline styles for the image element
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

    // Render the image and optional checkbox
    return (
      <div
        style={index === 0 ? inlineStyles : {}}
        className="image-wrapper card border-0"
      >
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value={id} onChange={handleOnChange}
          />
        </div>
        <div
          className="card border border-1"
          ref={ref}
          style={inlineStyles}
          {...props}
        />
      </div>
    );
  }
);

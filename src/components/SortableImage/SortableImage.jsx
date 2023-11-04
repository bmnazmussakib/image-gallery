import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Photo } from "../Photo/Photo";

/**
 * SortablePhoto component is responsible for rendering a draggable image element.
 * @param {Object} props - Component props, including id, handleOnChange, and other attributes.
 * @returns {JSX.Element} - Rendered SortablePhoto component.
 */

export const SortablePhoto = ({ id, handleOnChange, ...props }) => {
  // Use the useSortable hook to enable sorting functionality
  const sortable = useSortable({ id: id });

  // Destructure properties and attributes from the sortable object
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = sortable;

  // Define the CSS styles for the card based on sorting and transitions
  const cardStyle = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  // Render the Photo component with sortable properties and attributes
  return (
    <>
      <Photo
        style={cardStyle}
        ref={setNodeRef}
        {...props}
        {...attributes}
        {...listeners}
        id={id}
        handleOnChange={handleOnChange}
      />
    </>
  );
};

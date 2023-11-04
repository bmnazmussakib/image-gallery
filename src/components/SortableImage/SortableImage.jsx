import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Photo } from "../Photo/Photo";

export const SortablePhoto = (props) => {
  const sortable = useSortable({ id: props.id });
  const {
    attributes,
    listeners,
    isDragging,
    setNodeRef,
    transform,
    transition,
  } = sortable;

  const cardStyle = {
    transition,
    transform: CSS.Transform.toString(transform)
  };

  return (
    <>
      <Photo
        style={cardStyle}
        ref={setNodeRef}
        {...props}
        {...attributes}
        {...listeners}
        id={props?.id}
        handleOnChange={props?.handleOnChange}
      />
    </>
  );
};

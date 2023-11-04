import { useSortable } from "@dnd-kit/sortable";
import React from "react";
import Photo from "../Photo/Photo";

export default function SortableImage({ id, url, handleOnChange, index, ...props }) {
  const sortable = useSortable({ id: id });

  const {
    attributes,
    listeners,
    isDragging,
    setNodeRef,
    transform,
    transition,
  } = sortable;

  return (
    <>
      <Photo
        ref={setNodeRef}
        {...props}
        {...attributes}
        {...listeners}
        id={id}
        handleOnChange={handleOnChange}
      />
    </>
  );
}

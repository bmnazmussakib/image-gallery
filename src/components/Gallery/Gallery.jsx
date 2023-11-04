import {
  DndContext,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import React, { useState } from "react";
import Header from "../Header/Header";
import data from "../../data.json";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import Grid from "../Grid/Grid";
import SortableImage from "../SortableImage/SortableImage";

export default function Gallery() {
  const [items, setItems] = useState(data);
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  const [checkedItems, setCheckedItems] = useState([]);

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id == over.id) {
      return;
    }
    setItems((items) => {
      const oldIndex = items.findIndex((item) => item.id == active.id);
      const newIndex = items.findIndex((item) => item.id == over.id);
      return arrayMove(items, oldIndex, newIndex);
    });

    setActiveId(null);
  };

  const handleDragCancel = () => {
    setActiveId(null);
  };

  const handleOnChange = () => {

  }

  return (
    <>
      <Header />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
            <Grid columns={5}>
            {items.map((index, items) => (
              <SortableImage
                key={items?.id}
                id={items?.id}
                url={items?.img}
                index={index}
                handleOnChange={handleOnChange}
              />
            ))}
            </Grid>
        </SortableContext>
      </DndContext>
    </>
  );
}

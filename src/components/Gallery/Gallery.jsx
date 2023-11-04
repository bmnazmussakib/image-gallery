// Import necessary dependencies and components
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import data and custom components
import data from "../../data.json";
import { Grid } from "../Grid/Grid";
import Header from "../Header/Header";
import { SortablePhoto } from "../SortableImage/SortableImage";

export default function Gallery() {
  // Initialize state variables
  const [items, setItems] = useState(data);
  const [activeId, setActiveId] = useState(null);
  const [selectedItem, setSelectedItem] = useState([]);
  const [confirm, setConfirm] = useState(false);

  const [selectAll, setSelectAll] = useState(false);

  // Set up sensors for drag-and-drop functionality
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  // Handler for drag start event
  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  // Handler for drag end event
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }

    setItems((items) => {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });

    setActiveId(null);
  };

  // Handler for drag cancel event
  const handleDragCancel = () => {
    setActiveId(null);
  };

  // Handler for checkbox state change
  const handleOnChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedItem((prev) => [...prev, value]);
    } else {
      setSelectedItem((prev) => {
        return [...prev.filter((id) => id !== value)];
      });
    }
  };

  // Handler for item deletion
  const handleDelete = () => {
    // Filter the items to remove the ones with IDs in selectedItem
    const updatedItems = items.filter(
      (item) => !selectedItem.includes(item.id.toString())
    );

    // Update the state with the updatedItems
    setItems(updatedItems);

    // Clear the checked values
    setSelectedItem([]);

    // Display a success toast notification
    toast.success("Deleted successfully!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000, // Close after 3 seconds
    });
  };



  return (
    <>
      {/* Render the Header component with relevant props */}
      <Header
        handleDelete={handleDelete}
        selectedItem={selectedItem}
        setConfirm={setConfirm}
        allItems = {items}
      />

      <div className="container">
        {/* Set up the DndContext for drag-and-drop functionality */}
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
        >
          {/* Create a sortable context for the grid */}
          <SortableContext items={items} strategy={rectSortingStrategy}>
            <Grid>
              {/* Map and render the SortablePhoto components */}
              {items.map((items, index) => (
                <SortablePhoto
                  key={items?.id}
                  id={items?.id}
                  url={items?.img}
                  index={index}
                  handleOnChange={handleOnChange}
                  selectAll={selectAll}
                />
              ))}
            </Grid>
          </SortableContext>
        </DndContext>
      </div>

      {/* Modal for confirmation dialog */}
      <div
        class="modal fade"
        id="deleteModal"
        tabindex="-1"
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-sm">
          <div class="modal-content">
            <div class="modal-header bg-danger ">
              <h5 class="modal-title text-white" id="deleteModalLabel">
                Are you sure?
              </h5>
            </div>
            <div class="modal-body text-center">
              <i class="fas fa-xmark text-danger fa-5x"></i>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger border border-2 border-danger"
                data-mdb-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn border border-2 border-danger text-danger fw-bold"
                onClick={handleDelete}
                data-mdb-dismiss="modal"
                aria-label="Close"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast notification container */}
      <ToastContainer />
    </>
  );
}

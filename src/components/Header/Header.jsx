import React, { useState } from "react";

export default function Header({ handleDelete, selectedItem, setConfirm }) {

  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div class="container">
          <div className="d-flex align-items-center">
            {selectedItem && selectedItem.length > 0 && (
              <input type="checkbox" checked />
            )}
            <h5 className="ms-3 mb-0">{selectedItem.length} Files Selected</h5>
          </div>
          <button className="btn btn-danger" disabled={selectedItem.length === 0} data-mdb-toggle="modal" data-mdb-target="#exampleModal">
            Delete
          </button>
        </div>
      </nav>

     
    </>
  );
}

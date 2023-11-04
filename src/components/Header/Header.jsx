import React from "react";

export default function Header({ selectedItem, allItems }) {
  return (
    <>
      <nav
        class="navbar navbar-light bg-light sticky-top"
        style={{ height: "80px" }}
      >
        <div class="container">
          <div className="d-flex align-items-center">
            {selectedItem && selectedItem.length > 0 ? (
              <>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                    checked
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    <h6 className="mb-0">
                      {selectedItem.length}{" "}
                      {selectedItem.length > 1 ? "Files" : "File"} Selected
                    </h6>
                  </label>
                </div>
              </>
            ) : (
              <h5 className="ms-3 mb-0">Image Gallery</h5>
            )}
          </div>
          {selectedItem.length > 0 && (
            <div>
              <button
                className="btn btn-danger"
                data-mdb-toggle="modal"
                data-mdb-target="#deleteModal"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

import React from "react";

const FilterContainer = ({ searchText, onChange, sortById, onSortById }) => (
  <div className="filter-container">
    <form>
      <div className="row">
        <div className="col-6 col-sm-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchText}
            onChange={onChange}
          />
        </div>
        <div className="col-6 col-sm-8">
          <div className="row justify-content-end">
            <div className="col-12 col-sm-6">
              <select
                className="custom-select"
                id="sortById"
                value={sortById}
                onChange={onSortById}
              >
                <option defaultValue>Sort by Id</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default FilterContainer;

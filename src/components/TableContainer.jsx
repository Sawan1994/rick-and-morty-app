import React, { Fragment, useState, useEffect } from "react";
import Pagination from "./Pagination";

const TableContainer = ({ searchText, characters, sortById }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    console.log(searchText);
    const update = () => {
      const filteredData = characters.filter(d =>
        d.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setCurrentData(filteredData);
      setTotalCount(filteredData.length);
      setCurrentPage(1);
    };

    if (characters && characters.length > 0) update();
  }, [searchText, characters]);

  const compare = (a, b) => {
    switch (sortById) {
      case "ascending":
        return a.id - b.id;
      case "descending":
        return b.id - a.id;
      default:
        return 1;
    }
  };

  return (
    <Fragment>
      <div className="table-container">
        <div className="card-columns">
          {currentData &&
            currentData
              .sort(compare)
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((character, index) => (
                <div
                  className="card bg-dark text-white p-0"
                  key={character.name}
                >
                  <div className="img-block">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="card-img"
                    />
                    <div className="img-overlay">
                      <p className="img-title">{character.name}</p>
                      <p className="img-content">{"id : " + character.id}</p>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <ul>
                      <li className="row align-items-center m-0 pl-0 pr-0">
                        <span className="col-6 text-left">Status</span>
                        <span className="col-6 text-right">
                          {character.status}
                        </span>
                      </li>
                      <li className="row align-items-center m-0 pl-0 pr-0">
                        <span className="col-6 text-left">Species</span>
                        <span className="col-6 text-right">
                          {character.species}
                        </span>
                      </li>
                      <li className="row align-items-center m-0 pl-0 pr-0">
                        <span className="col-6 text-left">Gender</span>
                        <span className="col-6 text-right">
                          {character.gender}
                        </span>
                      </li>
                      <li className="row align-items-center m-0 pl-0 pr-0">
                        <span className="col-6 text-left">Origin</span>
                        <span className="col-6 text-right">
                          {character.origin.name}
                        </span>
                      </li>
                      <li className="row align-items-center m-0 pl-0 pr-0">
                        <span className="col-6 text-left">Last Location</span>
                        <span className="col-6 text-right">
                          {character.location.name}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCount={totalCount}
        itemsPerPage={itemsPerPage}
      />
    </Fragment>
  );
};

export default TableContainer;

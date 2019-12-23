import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
// import data from "./components/data.json";

import "./App.css";
import Header from "./components/Header";
import FilterContainer from "./components/FilterContainer";
import TableContainer from "./components/TableContainer";

function App() {
  const [searchText, setSearchText] = useState("");
  const [sortById, setSortById] = useState("");
  const [characters, setCharacters] = useState([]);

  const fetchAccountDetails = useCallback(() => {
    axios("https://rickandmortyapi.com/api/character/")
      .then(res => setCharacters(res.data.results))
      .catch(err => console.log(err));
  }, []);

  /**
   * fetch account details on component mount
   */
  useEffect(() => {
    fetchAccountDetails();
    /**
     * The Api call is throwing CORS error, so i have saved the data from API in a file and
     * setting the data after api call.
     * Once the API's CORS is removed, we can remove below code
     */
    // setAccountDetails(data);
  }, [fetchAccountDetails]);

  return (
    <div className="container-fluid">
      <Header />
      <div className="container">
        <FilterContainer
          searchText={searchText}
          onChange={event => setSearchText(event.target.value)}
          onSortById={event => setSortById(event.target.value)}
        />
        <TableContainer searchText={searchText} characters={characters} sortById={sortById}/>
      </div>
    </div>
  );
}

export default App;

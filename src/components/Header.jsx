import React from "react";
import logo from "../logo.svg";

const Header = () => (
  <header className="App-header row">
    <div className="col-4">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    <div className="col-8">
      <div className="row justify-content-end nav">
        {/* <div className="col-2 nav-item">Accounts</div> */}
      </div>
    </div>
  </header>
);

export default Header;
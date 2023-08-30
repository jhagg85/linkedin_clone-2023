import React from "react";
import "./Header.css";
import { SearchOutlined } from "@mui/icons-material";

function Header() {
  return (
    <div className="header">
      <h1>This is the header</h1>

      <div className="header__left">
        <img src="" alt="" />

        <div className="header__search">
          <SearchOutlined />

          <input type="text" />
        </div>
      </div>

      <div className="header__right"></div>
    </div>
  );
}

export default Header;

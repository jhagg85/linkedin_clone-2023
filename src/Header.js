import React from "react";
import "./Header.css";
import {
  BusinessCenter,
  Chat,
  Home,
  Notifications,
  SearchOutlined,
  SupervisorAccount,
} from "@mui/icons-material";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          alt=""
        />

        <div className="header__search">
          <SearchOutlined />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiF9NSs6EJut5KFIouheuFHJz7WTBY2OgjUfRNsf3_9pQejcgSHOxksN4iYPWldl2iUfc&usqp=CAU"
          title="Joseph"
        />
      </div>
    </div>
  );
}

export default Header;

import React from "react";

import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__topbar">
        <p className="header__topbar--text">Stardate: 3256418</p>
      </div>
      <div className="header__left--top"></div>
      <div className="header__left--bottom"></div>
      <div className="header__right"></div>
      <div className="header__title">
        <h1 className="header__title--text">Today's Star Trek</h1>
      </div>
      <div className="header__bottom"></div>
    </header>
  );
};

export default Header;

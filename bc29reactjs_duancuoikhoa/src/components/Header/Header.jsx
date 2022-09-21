import React from "react";
import './Header.scss'
import HeaderList from "./HeaderList/HeaderList";
import Logo from "./Logo/Logo";
import SearchHeader from "./SearchHeader/SearchHeader";
import UserHeader from "./UserHeader/UserHeader";
export default function Header() {
  return (
    <header>
      <div className="header__wrapper">
        <div className="header__bar max-width-container text-white">
          <Logo/>
          <SearchHeader/>
          <HeaderList/>
          <UserHeader/>
        </div>
      </div>
    </header>
  );
}

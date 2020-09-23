import React from 'react';
import '../styles/Header.module.css';

export default function Header() {
  return (
    <div className="header">
      <img
        className="header_icon"
        src="https://picsum.photos/id/237/200"
        alt="logo"
      />
      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>

    </div>
  );
}

// src/app/components/header.js

import React from 'react';
import Link from 'next/link'; // Impor Link dari next/link
// import './header.css'; // Import styling untuk header

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>My App</h1>
        </div>
        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link> {/* Menggunakan Link dari next/link */}
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

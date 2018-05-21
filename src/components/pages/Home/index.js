import React from 'react';
import logo from './logo.svg';
import './index.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <h1 className="Home-title">Welcome to React</h1>
      </header>
      <p className="Home-intro">
        To get started, edit <code>src/Home.js</code> and save to reload.
      </p>
    </div>
  );
}

export default Home;

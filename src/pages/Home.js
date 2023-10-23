import React from 'react';
import logo from '../components/Home/logo.svg';
import '../components/Home/home.css';

// const Home = () => {
function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Home;

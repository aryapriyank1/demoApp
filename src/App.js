import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/reports' element={<Reports/>} />
        <Route path='/products' element={<Products/>} />
      </Routes>
    </Router>
    {/* <div className="App">
      <header className="App-header">
      <h1>App</h1>
      </header>
    </div> */}
    </>
  );
}

export default App;

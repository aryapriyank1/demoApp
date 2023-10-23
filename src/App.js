import './App.css';
import React from 'react';
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DragDrop from './pages/DragDrop';
import Resize from './pages/Resize';
import Playground from './pages/Playground';
import FlexLayout from './pages/FlexLayout';
import GridLayout from './pages/GridLayout';
import SimpleFlex from './pages/SimpleFlex';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dragdrop" element={<DragDrop />} />
          <Route path="/resize" element={<Resize />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/flexlayout" element={<FlexLayout />} />
          <Route path="/gridlayout" element={<GridLayout />} />
          <Route path="/simpleflex" element={<SimpleFlex />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

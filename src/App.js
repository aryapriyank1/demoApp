import './App.css';
import React from 'react';
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DragDrop from './pages/DragDrop';
import Resize from './pages/Resize';
import Playground from './pages/Playground';
import Forms from './pages/Forms';
import Support from './pages/Support';

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
          <Route path="/forms" element={<Forms />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

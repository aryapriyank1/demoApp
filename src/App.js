import './App.css';
import React from 'react';
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DragDrop from './pages/DragDrop';
import Resize from './pages/Resize';
import Forms from './pages/Forms';
import Support from './pages/Support';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dragdrop' element={<DragDrop/>} />
        <Route path='/resize' element={<Resize/>} />
        <Route path='/forms' element={<Forms/>} />
        <Route path='/support' element={<Support/>} />
        </Routes>
        {/* <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dragdrop' component={DragDrop} />
          <Route path='/resize' component={Resize} />
          <Route path='/forms' component={Forms} />
          <Route path='/support' component={Support} />
        </Switch> */}
      
    </Router>
    </>
  );
}

export default App;

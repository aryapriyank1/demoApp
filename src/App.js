import './App.css';
import React from 'react';
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import DragDrop from './pages/DragDrop';
import MSPaint from './pages/MSPaint';
import Resize from './pages/Resize';
import Messages from './pages/Messages';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      {/* <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/mspaint' element={<MSPaint/>} />
        <Route path='/dragdrop' element={<DragDrop/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/messages' element={<Messages/>} />
        </Routes> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/mspaint' component={MSPaint} />
          <Route path='/dragdrop' component={DragDrop} />
          <Route path='/resize' component={Resize} />
          <Route path='/messages' component={Messages} />
        </Switch>
      
    </Router>
    </>
  );
}

export default App;

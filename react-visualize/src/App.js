import React from "react";
import './App.css'

import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Visualisation from "./components/Visualisation";
import Dashboard from './components/Dashboard';
import Navbar from "./components/Navbar";

const App = () => {
 
  return (
      <Router>
            <Navbar/>
           <Routes>
             <Route path="/" element={<Dashboard/>}/>
             <Route path="/signup" element={<Visualisation/>}/>
           </Routes>

      </Router>
  );
};

export default App
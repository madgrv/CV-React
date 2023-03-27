import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as router, route, Switch} from 'react-router-dom';
import Home from './components/Home.js';

function App() {
  return (
    <Router>
      <div className="wrap-content">
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Home />} />
            </Routes>
          </div>
      </div>    
  </Router>
  );
}

export default App;

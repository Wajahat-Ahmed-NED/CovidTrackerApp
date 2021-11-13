import React from 'react'
// import { Router,Routes,Route } from 'react-router-dom'
import Display from '../../components/Display'
// import Navbar from '../../components/Navbar'


// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Routes,
} from "react-router-dom";
import Home from '../../components/Home';

export default function AppRouter() {
  return (
    <Router>
      <div>


       
        <Routes>
          
          <Route index path="/" element={<Home/>}>
            
          </Route>
          <Route path="/display" element={<Display/>}>
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

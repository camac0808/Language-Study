// import styles from "./App.module.css";
// import { useState } from "react";
// import { useEffect } from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from './Detail';
import Signup from './Signup';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games/:id" element={<Detail />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


// import styles from "./App.module.css";
// import { useState } from "react";
// import { useEffect } from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from './Detail';
import Signup from './Signup';
import Genres from './Genres';
import Stores from './Stores';
import Platforms from './Platforms';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games/:id" element={<Detail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/stores" element={<Stores />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

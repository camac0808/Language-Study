// import styles from "./App.module.css";
// import { useState } from "react";
// import { useEffect } from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Detail from './Detail';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

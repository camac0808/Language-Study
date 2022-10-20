// import styles from "./App.module.css";
// import { useState } from "react";
// import { useEffect } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Signup from "./components/Signup";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Router basename={`${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/games/:id`} element={<Detail />} />
          <Route path={`/signup`} element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

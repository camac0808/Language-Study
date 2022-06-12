
import styles from "./App.module.css";
import { useState } from "react";
import { useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("started");
    return () => console.log("destroyed");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <h1 className={styles.title}>Welcome back</h1>
      <button onClick={onClick}> {showing ? "Hide" : "Show"} </button>
    </div>
  );
}

export default App;

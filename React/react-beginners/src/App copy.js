import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCount((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("Api  Once calling");
  }, []);

  useEffect(() => {
    if (keyword !== ""){
      console.log(keyword)
    }
  }, [keyword])
  
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search"
      ></input>
      <h1>{count}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;

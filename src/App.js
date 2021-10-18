import "./App.css";
import Child from "./Components/child";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const cal = (cnt) => {
    if (cnt <= 0) cnt = 0;
    setCount(cnt);
  };
  return (
    <div className="d-flex justify-content-center text-center align-items-center mt-5">
      <Child count={count} cal={cal} />
    </div>
  );
}

export default App;

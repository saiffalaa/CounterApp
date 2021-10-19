import "./child.css";
import { useState } from "react";
function Child(props) {
  const [count, setCount] = useState(0);
  const cal = (cnt) => {
    if (cnt <= 0) cnt = 0;
    setCount(cnt);
  };
  return (
    <div>
      <h1>Counter</h1>
      <p className="fs-3">{count}</p>
      <div className="d-flex justify-content-around">
        <button className="btn btn-primary" onClick={() => cal(count + 1)}>
          Increment
        </button>
        <button className="btn btn-primary ms-3" onClick={() => cal(count - 1)}>
          Decrement
        </button>
        <button className="btn btn-danger ms-3" onClick={() => cal(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Child;

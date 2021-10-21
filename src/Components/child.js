import "./child.css";

import { addCounter } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

function Child(props) {
  let newCount = useSelector((state) => state.CounterReducer);

  let dispatch = useDispatch();
  const cal = (cnt) => {
    if (cnt <= 0) cnt = 0;
    dispatch(addCounter(cnt));
  };
  return (
    <div>
      <h1>Counter</h1>
      <p className="fs-3">{newCount.counter}</p>
      <div className="d-flex justify-content-around">
        <button
          className="btn btn-primary"
          onClick={() => cal(newCount.counter + 1)}
        >
          Increment
        </button>
        <button
          className="btn btn-primary ms-3"
          onClick={() => cal(newCount.counter - 1)}
        >
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

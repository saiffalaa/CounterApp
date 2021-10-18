import "./child.css";
function Child(props) {
  return (
    <div>
      <h1>Counter</h1>
      <p className="fs-3">{props.count}</p>
      <div className="d-flex justify-content-around">
        <button
          className="btn btn-primary"
          onClick={() => props.cal(props.count + 1)}
        >
          Increment
        </button>
        <button
          className="btn btn-primary ms-3"
          onClick={() => props.cal(props.count - 1)}
        >
          Decrement
        </button>
        <button className="btn btn-danger ms-3" onClick={() => props.cal(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Child;

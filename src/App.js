import "./App.css";
import Child from "./Components/child";
import Navbar from "./Components/Navbar";

import Shop from "./Components/Shop";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="d-flex justify-content-center text-center align-items-center mt-5">
        <Route
          name={"ASD"}
          path="/counter"
          params={{ testvalue: "hello" }}
          component={Child}
        />
        <Route exact path="/shop" component={Shop} />
        <Route path="/shop/product-details/:id" component={ProductDetails} />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;

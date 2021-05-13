import { Route } from "react-router-dom";

// removes gaps & margin paddings
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Route exact path="/" component={Login} />
    </>
  );
}

export default App;

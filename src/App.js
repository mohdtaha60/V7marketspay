import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Payment from "./pages/Payment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/payments" component={Payment} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

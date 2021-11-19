import NavigationBar from "./components/NavigationBar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route to="/" />
      </Switch>
    </div>
  );
}

export default App;

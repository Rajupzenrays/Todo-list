import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodosList from "./components/TodosList";
import './App.css'
function App() {
  return (
    <div id="app">
      <Router>
          <section>
            <Switch>
              <Route exact path="/" component={TodosList} />
              
            </Switch>
          </section>

      </Router>
    </div>
  );
}

export default App;


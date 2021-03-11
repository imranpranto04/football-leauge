import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TeamDetails from './components/TeamDetails/TeamDetails';
import Header from './components/Header/Header';

function App() {
  return (

    <Router>
      <Header></Header>
      <Switch>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/id/:teamId">
          <TeamDetails></TeamDetails>
        </Route>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="*">
          <h2 className="text-center text-white">404 Not Found!</h2>
        </Route>
      </Switch>
     
    </Router>
  );
}

export default App;

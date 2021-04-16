import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AddService from './Components/AddService/AddService';
import Services from './Components/Home/Services/Services';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/addService'>
          <AddService></AddService>
        </Route>
        <Route path='/services'>
          <Services></Services>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

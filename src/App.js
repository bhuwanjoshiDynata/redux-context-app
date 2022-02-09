import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Catalog from './Components/Catalog';
import Checkout from './Components/Checkout';


const App = ()=> {
  return (


    <Router>
    <div className="App">
      <NavBar/>
      <Switch>
      <Route exact path="/catalog">
      <Catalog />
      </Route>
      <Route exact path="/checkout">
      <Checkout/>
      </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;

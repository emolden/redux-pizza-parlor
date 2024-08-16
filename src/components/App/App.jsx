import React from "react";
import "./App.css";
import {
  HashRouter as Router,
  Route,
  Link,
  useLocation
} from "react-router-dom/cjs/react-router-dom.min.js";
import PizzaList from "../PizzaList/PizzaList";
import { useSelector } from "react-redux";
import CustomerInfo from "../CustomerInfo/CustomerInfo";
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import Admin from "../Admin/Admin";
import Header from "../Header/Header";

function App() {


  return (
    <div className="App">
      
      <Router>
        <Header />
        <Route exact path="/">
          <PizzaList />
        </Route>

        <Route exact path="/customer-info">
          <CustomerInfo />
        </Route>

        <Route exact path = '/checkout'>
          <CheckoutPage />
        </Route>
        <Route exact path = '/admin'>
          <Admin />
        </Route>
     </Router>
  
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Link,
} from "react-router-dom/cjs/react-router-dom.min.js";import PizzaList from '../PizzaList/PizzaList';
import { useSelector } from 'react-redux';

function App() {
  const currentTotal= useSelector(store => store.total)

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
        <p>${currentTotal}</p>
      </header>
      <Router>
    <Route exact path='/'>
      <PizzaList />
    </Route>

    <Route exact path = '/stuff'>

    </Route>

    <Route exact path = '/otherstuff'>

    </Route>
    </Router>
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;

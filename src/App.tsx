import React from 'react';
import {BrowserRouter as Router,Switch} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { RouteWithSubRoutes,routes } from './Router';
function App() {
  return (
    <Router>
      <Switch>
        {
          /* eslint-disable array-callback-return */
          routes.map((item,i) =>{
            return <RouteWithSubRoutes key={i} {...item}/>
          },{})
        }                 
      </Switch>
    </Router>
  );
}
export default App;
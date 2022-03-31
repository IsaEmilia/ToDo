import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from './Pages/Dashboard';
import { Update } from './Components/Update';


ReactDOM.render(
  <React.StrictMode>
    <Router>
          <Switch>
          <Route path='/'>
            <App />
          </Route>
          <Route path='/Dashboard' component={Dashboard}>
         </Route>
            <Route path='/update'>
           <Update />
          </Route>
        </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

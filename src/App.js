import React from 'react';
import './App.css';
import Home from './components/home/home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="app-main">
        <Router>
          <Switch>
            <Route path="">
              <Home />
            </Route> 
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Quote from './Quote';
import Navbar from './Navbar';
import App from './App';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/App" component={App} />
      <Route exact path="/Quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

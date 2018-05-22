import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../components/pages/Home';
import Hello from '../components/pages/Hello';
import NotFound from '../components/pages/NotFound';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route path="/hello" exact component={Hello} />
      <Route path="/404" exact component={NotFound} />
      <Route path="*" component={() => <Redirect to="/404" />} />
    </Switch>
  </BrowserRouter>
);

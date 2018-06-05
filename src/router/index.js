import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import TopPage from 'src/components/pages/TopPage';
import Home from 'src/containers/HomeContainer';
import Hello from 'src/components/pages/Hello';
import NotFound from 'src/components/pages/NotFound';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/top_page" exact component={TopPage} />
      <Route path="/home" exact component={Home} />
      <Route path="/hello" exact component={Hello} />
      <Route path="/404" exact component={NotFound} />
      <Route path="*" component={() => <Redirect to="/404" />} />
    </Switch>
  </BrowserRouter>
);

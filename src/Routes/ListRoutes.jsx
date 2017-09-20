import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
import AsyncPage1 from '../Pages/AsyncPage1';
import AsyncPage2 from '../Pages/AsyncPage2';

export default class ListRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" name="Page1" component={AsyncPage1} />
        <Route path="/Page2" name="Page2" component={AsyncPage2} />
      </Switch>
    );
  }
}

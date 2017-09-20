import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { observer, inject } from 'mobx-react';

import ListRoutes from './ListRoutes';

@inject('langStore')
@withRouter
@observer
export default class Main extends Component {
  render() {
    return <ListRoutes />;
  }
}

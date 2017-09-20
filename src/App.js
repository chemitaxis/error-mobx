import React, { Component } from 'react';
import { Provider, observer } from 'mobx-react';

import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Main from './Routes/Main';
import store from './Store/store';

const rootStore = {
  langStore: store
};

@observer
class App extends Component {
  render() {
    return (
      <Provider {...rootStore}>
        <Router>
          <Main />
        </Router>
      </Provider>
    );
  }
}

export default App;

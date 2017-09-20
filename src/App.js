import React, { Component } from 'react';
import { Provider, observer } from 'mobx-react';
import { I18n } from 'react-polyglot';
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
        <I18n
          locale={rootStore.langStore.language}
          messages={rootStore.langStore.resource}
        >
          <Router>
            <Main />
          </Router>
        </I18n>
      </Provider>
    );
  }
}

export default App;

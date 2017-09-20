import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

@inject('langStore')
@observer
class Page2 extends Component {
  changeLang = () => {
    this.props.langStore.language === 'es'
      ? this.props.langStore.changeLanguageTo('en')
      : this.props.langStore.changeLanguageTo('es');
  };
  render() {
    return (
      <div>
        <div>Page 2 {this.props.langStore.t('hello')}</div>
        <div>
          <button onClick={this.changeLang}>Change lang</button>
        </div>
        <div>
          <Link to="/">Go to Page 1 async</Link>
        </div>
      </div>
    );
  }
}

export default Page2;

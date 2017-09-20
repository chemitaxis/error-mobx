import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { translate } from '../i18n';

@inject('langStore')
@observer
class Page1 extends Component {
  changeLang = () => {
    this.props.langStore.language === 'es'
      ? this.props.langStore.changeLanguageTo('en')
      : this.props.langStore.changeLanguageTo('es');
  };
  render() {
    return (
      <div>
        <div>Page 1 {this.props.t('hello')}</div>
        <div>
          <button onClick={this.changeLang}>Change lang</button>
        </div>
        <div>
          <Link to="/Page2">Go to Page 2 async</Link>
        </div>
      </div>
    );
  }
}

export default translate()(Page1);

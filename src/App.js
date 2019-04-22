import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { GlobalIconfontStyle } from './static/iconfont/iconfont';
import Header from './common/header';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <GlobalIconfontStyle />
          <Header />
        </div>
      </Provider>
    );
  }
}

export default App;

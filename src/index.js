import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './global.styles';
import HomePage from './pages/home/home.page.jsx';

const App = () => (
  <>
    <GlobalStyle />
    <HomePage />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));

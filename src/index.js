import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './global.styles';
import HomePage from './pages/home/home.page.jsx';

const App = () => (
  <>
    <GlobalStyle />
    <ToastContainer />
    <HomePage />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));

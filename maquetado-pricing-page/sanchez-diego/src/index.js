import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MainTitle from './components/MainTitle';
import NavBar from './components/NavBar';
import Card from './components/Card';


ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <MainTitle />
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
    
import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.scss';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
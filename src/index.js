import React from 'react';
import ReactDOM from 'react-dom';
import ReactIntro from './components/ReactIntro';
import PhoneCatWrapper from './components/PhoneCatWrapper';
import './index.css';

ReactDOM.render(
  <ReactIntro />,
  document.getElementById('root')
);

ReactDOM.render(
  <PhoneCatWrapper />,
  document.getElementById('book-app')
);

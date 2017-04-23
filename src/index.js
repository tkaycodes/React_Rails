import React from 'react';
import ReactDOM from 'react-dom';
import ReactIntro from './components/ReactIntro';
import $ from 'jquery';
import _BookCatWrapperAPI from './components/_BookCatWrapperAPI';
import './index.css';

ReactDOM.render(
  <ReactIntro />,
  document.getElementById('react-intro')
);

ReactDOM.render(
  <_BookCatWrapperAPI />,
  document.getElementById('book-app')
);

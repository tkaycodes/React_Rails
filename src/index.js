import React from 'react';
import ReactDOM from 'react-dom';
import ReactIntro from './components/ReactIntro';
import BookCatWrapper from './components/BookCatWrapper';
import './index.css';

ReactDOM.render(
  <ReactIntro />,
  document.getElementById('react-intro')
);

ReactDOM.render(
  <BookCatWrapper />,
  document.getElementById('book-app')
);

import Book from './Book.js';
import React, {Component} from 'react';

class BookList extends Component {

  render() {
    return (
      
      <ul className="phones">

        <Book />
        <Book />

      </ul>

    );
  }

}

export default BookList;
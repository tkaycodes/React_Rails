import Book from './Book.js';
import React, {Component} from 'react';

class BookList extends Component {

  render() {

    var books = this.props.books.map(function(book, i) {
      return <Book book={book} key={i} />
    });

    return (
      
      <ul className="phones">

        {books}

      </ul>

    )
  }

}

export default BookList;
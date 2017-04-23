import Book from './Book.js';
import React, {Component} from 'react';
import $ from 'jquery';


class BookList extends Component {

  render() {

    var props = this.props;

    var filtered = $.grep(this.props.books, function(book) {
      return book.name.toLowerCase().indexOf(props.filter_text) > -1;
    });

    var sorted = filtered.sort(function(a, b) {
        if(props.sort_by === 'name')
          return a.name.localeCompare(b.name)
        else
          return a.age - b.age
      });

    var books = sorted.map(function(book, i) {
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
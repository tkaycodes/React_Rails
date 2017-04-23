import React, {Component} from 'react';

class Book extends Component {

  render() {

    var book = this.props.book;

    return (

      <li className="thumbnail phone-listing">
        <a href="#" className="thumb">
          <img src={book.imageUrl} />
        </a>

        <a href="#">
          {book.name}
        </a>

        <p>
          {book.snippet}
        </p>
      </li>

    )

  }

}

export default Book;
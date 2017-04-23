import React, {Component} from 'react';
import SearchForm from './SearchForm.js';
import BookList from './BookList.js';

class BookCatWithSearch extends Component{

  render() {

    return(
      <div className="row">
        <div className = "col-md-2">
        
          <SearchForm />

        </div>
        <div className = "col-md-10">
        
          <BookList books={this.props.books} />
          
        </div>
      </div>
      
    )
  }

};

export default BookCatWithSearch;
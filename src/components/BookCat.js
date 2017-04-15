import React, {Component} from 'react';
import SearchForm from './SearchForm.js';
import BookList from './BookList.js';

class BookCat extends Component{

  render() {

    return(
      <div className="row">
        <div className = "col-md-2">
        
          <SearchForm />

        </div>
        <div className = "col-md-10">
        
          <BookList />
          
        </div>
      </div>
      
    )
  }

};

export default BookCat;
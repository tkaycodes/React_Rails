import React, {Component} from 'react';
import SearchForm from './SearchForm.js';
import BookList from './BookList.js';

class BookCatWithSearch extends Component{

  constructor(props) {
    super(props);
    this.state = {
      filter_text: '',
      sort_by: 'age'
    }
  }

  handleSearch(filter_text, sort_by) {
    this.setState({
      filter_text: filter_text, 
      sort_by: sort_by
    })
  }

  render() {
    return(
      <div className="row">
        <div className = "col-md-2">     
          <SearchForm searchHandler={this.handleSearch.bind(this)} filter_text={this.state.filter_text} sort_by={this.state.sort_by} />
        </div>
        <div className = "col-md-10">
          <BookList books={this.props.books} filter_text={this.state.filter_text} sort_by={this.state.sort_by} />
        </div>
      </div>
    )
  }

};

export default BookCatWithSearch;
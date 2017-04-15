import React, {Component} from 'react';

class SearchForm extends Component {

  render() {
    return (
      <div>
        Search:
        <input type="text"/>
        Sort by:
        <select >
          <option value="name">Alphabetical</option>
          <option value="age">Newest</option>
        </select>
      </div>
    );
  }

}

export default SearchForm;
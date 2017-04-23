import React, {Component} from 'react';

class SearchForm extends Component {

  onChangeHandler(event) {
    var query = this.refs.query.value.trim();
    var order = this.refs.order.value;
    this.props.searchHandler(query, order);
  }

  render() {
    return (
      <div>
        Search:
        <input type="text" value={this.props.filter_text} ref="query" onChange={this.onChangeHandler.bind(this)} />
        Sort by:
        <select value={this.props.sort_by} ref="order" onChange={this.onChangeHandler.bind(this)}>
          <option value="name">Alphabetical</option>
          <option value="age">Newest</option>
        </select>
      </div>
    );
  }

}

export default SearchForm;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title} className="list-group-item">{book.title}</li>
      );
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        <h1>HELLO</h1>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

// Anything returned from this fuction will end up as props on BookList
function mapDispatchToProps(dispatch) {
  // Whenever select book is called, the result should be passed to all
  // our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Promote BookList from component to container - needs to know about 
// this new dispatch method, selectBook. Make available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
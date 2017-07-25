import React, { Component } from 'react';
import SearchedBooks from './SearchedBooks'
import util from '../assets/util/helpers'

/*Search book component - Search the api to find the books based on the text supplied by user
**Child Components : SearchedBooks
*/
class SearchBox extends Component {
    constructor(props) {
        super();
        // This binding is necessary to make `this` work in the callback
        this.state = {
            books: null,
            query: 'React'
        };
        this.findBook = this.findBook.bind(this);
    }
    /*Search a book and calls the google api*/
    findBook(e){
        e.preventDefault();
        let query = this.refs.query.value;
        if(query !== ''){
            util.getBooks(query)
            .then(function(resp){
                this.setState({books : resp});
            }.bind(this));
        }
    }

  render() {
    return (<div id="left-nav">
        <input type="text" placeholder="Find a book" ref="query" onChange={this.findBook}/>
         { !this.state.books ? ''  : <SearchedBooks books={this.state.books} add={this.props.add}/> }
        </div>
        )
  }
}
export default SearchBox;


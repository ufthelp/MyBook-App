import React, { Component } from 'react';

/*Searched books component,used to add books to My Books Panel on Right
**Child Components : N/A
*/
class SearchedBooks extends Component {
  constructor(props) {
    super(props);
    this.state ={
        addBook : 'Add'
    }

  }
/**
 * addBook - Change the book status to 'added' & calls the add function of parent component (SearchBox > App)
 * @param {*} book 
 */
  addBook(book){
    book.status = 'Added';
    this.props.add(book);
  }

  render() {
    return (
        <ul className="books-list">
            {
            this.props.books.map((book) =>
                <li key={ book.id }>
                    <h4>{ book.volumeInfo.title}</h4>
                    <h5>{ book.volumeInfo.authors && book.volumeInfo.authors.length > 0 ? 'by ' + book.volumeInfo.authors[0] : ''} </h5>
                    <h6  className= {book.status === 'Add' ? 'action-label' : ''} onClick={book.status === 'Add' ? () => this.addBook(book) : void(0)}>{book.status} </h6>
                </li>
            )}
        </ul>
    )             
            
}
}
export default SearchedBooks;




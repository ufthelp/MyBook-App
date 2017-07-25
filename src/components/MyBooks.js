import React, { Component } from 'react';
/*MyBooks component-Display added books in 'MyBooks' panel on right view of app
**Child Components : N/A
*/
class MyBooks extends Component {

  render() {
    return (<div id="book-cta">
				<h2>
					{ this.props.title } 
				</h2>
				{ 
					this.props.addedBooks.map((book) =>
					<div className="book-info" key={book.id}>
						<div className="thumbnail">
							<img 
								src={!book.volumeInfo.imageLinks ? 'No Image' : book.volumeInfo.imageLinks.thumbnail}
								alt={!book.volumeInfo.imageLinks ? 'No Image' : book.volumeInfo.title}/>
						</div>
						<div className="book-details">
							<h4> 
								{book.volumeInfo.title}
							</h4>
							<h5> 
								{ book.volumeInfo.authors && book.volumeInfo.authors.length > 0 ? 'by ' + book.volumeInfo.authors[0] : 'Author Info Not Available'} 
							</h5>
							<p className="book-desc"> 
								{ !book.volumeInfo.description?'Description Not Available':book.volumeInfo.description }
							</p>
							<code className="book-page"> 
								{ !book.volumeInfo.pageCount? '0':book.volumeInfo.pageCount } pages 
							</code>
						</div>
					</div>
				)}
            </div>
        )
  }
}
export default MyBooks;






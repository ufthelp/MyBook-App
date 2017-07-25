import React, { Component } from 'react';
import '../assets/css/App.css';
import SearchBox from './SearchBox';
import MyBooks from './MyBooks';
import AppHeader from './AppHeader';
import util from '../assets/util/helpers'

/*Main APP component
**Child Components : SearchBox, MyBooks
*/
class App extends Component {
	constructor(props){
		super(props);
		this.onAdd = this.onAdd.bind(this);
		this.state = {
			addedBooks: [],
			title: 'No Books Added'
		};
	}

  /*Adding books to MyBooks list */
	onAdd(book){
		util.addBookInList(book);
		this.setState({addedBooks : util.getAddedBooks(),title: 'My Books'});
    }

  render() {
    return (
      <div className="App">
        <header>
          <AppHeader />
        </header>
        <main>
        	<SearchBox add={this.onAdd}/>
			<MyBooks addedBooks={this.state.addedBooks} title={this.state.title}/>	
        </main>
      </div>
    );
  }
}

export default App;

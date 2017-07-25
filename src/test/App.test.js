import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import MyBooks from '../components/MyBooks';
import SearchBox from '../components/SearchBox';
import SearchedBooks from '../components/SearchedBooks';
import util from '../assets/util/helpers';
import Renderer from 'react-test-renderer'


/*App Level Test*/
describe('Test the App rendering and Snapshot',() =>{
	it('App renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	});

	test('Test App Snapshot',() =>{
		const component = Renderer.create(<App/>);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();

	});
});

/*Test the rendering of child components*/
describe('Child level components are created',() =>{
  /*Test cases for MyBooks*/
  it('MyBooks Component is created', () => {
    const div = document.createElement('div');
    let addedBooks = [];
    ReactDOM.render(<MyBooks addedBooks ={addedBooks} title={"Yardi Book"} />, div);
  });
    /*Test cases for SearchedBooks*/
  it('SearchedBooks Component is rendered', () => {
    const div = document.createElement('div');
    let books =[];
    ReactDOM.render(<SearchedBooks books={books}/>, div);
  });
  /*Test cases for SearcheBox*/
  it('SearchBox Component is rendered', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBox/>, div);
  });
});


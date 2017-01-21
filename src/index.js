import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
const API_KEY = 'AIzaSyBzZUKOBUUU8Z3zYoiCDMj5ioCxCBI-1f8';

YTSearch({key:API_KEY, term: 'surfboards'}, function (data) {
  console.log(data);
});

//Create a new component. This component should produce some HTML
class App extend Component {
  render () {
    return (<div>
      <SearchBar />
      </div>
      //JSX, it looks like HTML but is JS
    );
  }
}

//Take this component's generated HTML and put in on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));

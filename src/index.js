import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
// import VideoListItem from './components/video_list_item.js';
import VideoDetail from './components/video_detail.js';
const API_KEY = 'AIzaSyBzZUKOBUUU8Z3zYoiCDMj5ioCxCBI-1f8';

//Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render () {
    return (<div>
      <SearchBar />
    <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
      </div>
      //JSX, it looks like HTML but is JS
    );
  }
}

//Take this component's generated HTML and put in on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));

import React, {
    Component
} from 'react';

//a functional commponent
// const SearchBar = () => {
// return <input />;
//JSX then converts it to React.createElement()
// };

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    render() {
        return (
          <div className="search-bar">
            <input
            value = {this.state.term}
            onChange = {event => this.onInputChange( event.target.value)} />
            </div>
        );
    }

    onInputChange (term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
    };
}

export default SearchBar;

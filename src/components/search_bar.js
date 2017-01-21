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
        return ( < div >
            <input
            value = {this.state.term}
            onChange = {event => this.setState({ term: event.target.value }) }/>
            </div>
        );
    }

    // onInputChange (event) {
    //   console.log(event.target.value);
    // }
}

export default SearchBar;

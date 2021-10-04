import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    state = {
        term: ''
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({ term })
        this.props.onUpdateSearch(term);
    }

    render() {
        const { term } = this.state;
        return (
            <input
                type="text"
                className="search-panel form-control"
                placeholder="Find a task"
                value={term}
                onChange={this.onUpdateSearch} />
        )
    }
}

export default SearchPanel;
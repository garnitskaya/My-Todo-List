import { useState } from 'react';
import './search-panel.css';

const SearchPanel = (props) => {
    const [term, setTerm] = useState('');

    const onUpdateSearch = (e) => {
        const term = e.target.value;
        setTerm(term)
        props.onUpdateSearch(term);
    }

    return (
        <input
            type="text"
            className="search-panel form-control"
            placeholder="Find a task"
            value={term}
            onChange={onUpdateSearch} />
    )
}

export default SearchPanel;
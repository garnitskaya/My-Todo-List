import { FC, useState, ChangeEvent } from 'react';
import './search-panel.css';

interface SearchPanelProps {
    onUpdateSearch: (term: string) => void
}

const SearchPanel: FC<SearchPanelProps> = (props) => {
    const [term, setTerm] = useState<string>('');

    const onUpdateSearch = (e: ChangeEvent<HTMLInputElement>): void => {
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
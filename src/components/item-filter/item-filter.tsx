import { FC } from 'react';
import './item-filter.css';

interface ItemFilterProps {
    filter: string;
    onFilterChange: (filter: string) => void;
}

const ItemFilter: FC<ItemFilterProps> = ({ filter, onFilterChange }) => {

    const buttons = [
        { name: 'all', label: 'all' },
        { name: 'active', label: 'active' },
        { name: 'done', label: 'done' },
        { name: 'important', label: 'important' },
    ]

    const button = buttons.map(({ name, label }) => {
        const isActive = filter === name;
        const clazz = isActive ? "btn-filter-active" : "btn-filter";
        return (
            <button
                key={name}
                type="button"
                className={`btn ${clazz}`}
                onClick={() => onFilterChange(name)}>
                {label}
            </button>)
    })

    return (
        <div className="item-filter d-flex" >
            {button}
        </div>
    )
}

export default ItemFilter;
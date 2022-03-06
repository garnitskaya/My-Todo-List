import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ItemAddForm from '../item-add-form/item-add-form';
import ItemFilter from '../item-filter/item-filter';
import AppHeaderInfo from '../app-header-info/app-header-info';
import TodoList from '../todo-list/todo-list';
import SearchPanel from '../search-panel/search-panel';

import './app.css';


const App = () => {

    const dataItem = [
        { label: 'Купить машину', done: true, important: false, id: 1 },
        { label: 'Поехать на море ', done: false, important: true, id: 2 },
        { label: 'Пополнить интернет ', done: false, important: false, id: 3 },
    ]

    const [data, setData] = useState(dataItem);
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');//done, active

    useEffect(() => {
        const localStorageRef = localStorage.getItem('data');
        if (localStorageRef) {
            setData(JSON.parse(localStorageRef))
        }
    }, []);

    const saveData = (value) => {
        localStorage.setItem('data', JSON.stringify(value));
    }

    const addItem = (label) => {
        const newItem = {
            label,
            done: false,
            important: false,
            id: uuidv4()
        }
        setData(data => {
            const newData = [...data, newItem];
            saveData(newData);
            return newData;
        });
    }

    const deleteItem = (id) => {
        setData(data => {
            const newData = data.filter(item => item.id !== id);
            saveData(newData);
            return newData;
        })
    }

    const onToggleProp = (id, prop) => {
        setData(data => data.map(item => {
            if (item.id === id) {
                return { ...item, [prop]: !item[prop] }
            }
            return item;
        })
        )
    }

    const searchItem = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => item.label.toLowerCase()
            .indexOf(term.toLowerCase()) > -1)
    }

    const onUpdateSearch = (term) => {
        setTerm(term);
    }

    const filterItem = (items, filter) => {
        switch (filter) {
            case 'done':
                return items.filter(item => item.done);
            case 'active':
                return items.filter(item => !item.done);
            case 'important':
                return items.filter(item => item.important);
            default:
                return items;
        }
    }

    const onFilterChange = (filter) => {
        setFilter(filter);
    }


    const all = data.length;
    const done = data.filter(item => item.done).length;
    const line = all ? ((done / all) * 100).toFixed(0) : 0;
    const visible = filterItem((searchItem(data, term)), filter);

    return (
        <div className="app  ">
            <AppHeaderInfo
                all={all}
                done={done}
                line={line} />

            <SearchPanel onUpdateSearch={onUpdateSearch} />

            <ItemFilter
                filter={filter}
                onFilterChange={onFilterChange} />

            <TodoList
                data={visible}
                onDelete={deleteItem}
                onToggleProp={onToggleProp} />

            <ItemAddForm onAdd={addItem} />
        </div>
    )
}

export default App;

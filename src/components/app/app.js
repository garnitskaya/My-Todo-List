import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ItemAddForm from '../item-add-form/item-add-form';
import ItemFilter from '../item-filter/item-filter';
import AppHeaderInfo from '../app-header-info/app-header-info';
import TodoList from '../todo-list/todo-list';
import SearchPanel from '../search-panel/search-panel';

import './app.css';


class App extends Component {
    state = {
        data: [
            { label: 'Купить машину', done: true, important: false, id: 1 },
            { label: 'Поехать на море ', done: false, important: true, id: 2 },
            { label: 'Пополнить интернет ', done: false, important: false, id: 3 },
        ],
        term: '',
        filter: 'all' //done, active
    }

    componentDidMount() {
        const localStorageRef = localStorage.getItem('data');
        if (localStorageRef) {
            this.setState({ data: JSON.parse(localStorageRef) })
        }
    };

    componentDidUpdate() {
        localStorage.setItem('data', JSON.stringify(this.state.data));

    };

    addItem = (label) => {
        const newItem = {
            label,
            done: false,
            important: false,
            id: uuidv4()
        }
        this.setState(({ data }) => ({
            data: [...data, newItem]
        }))
    }

    deleteItem = (id) => {
        this.setState(({ data }) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    searchItem = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => item.label.toLowerCase()
            .indexOf(term.toLowerCase()) > -1)
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    filterItem = (items, filter) => {
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

    onFilterChange = (filter) => {
        this.setState({ filter });
    }

    render() {
        const { data, term, filter } = this.state;
        const all = data.length;
        const done = data.filter(item => item.done).length;
        const line = all ? ((done / all) * 100).toFixed(0) : 0;
        const visible = this.filterItem((this.searchItem(data, term)), filter);

        return (
            <div className="app  ">
                <AppHeaderInfo
                    all={all}
                    done={done}
                    line={line} />

                <SearchPanel onUpdateSearch={this.onUpdateSearch} />

                <ItemFilter
                    filter={filter}
                    onFilterChange={this.onFilterChange} />

                <TodoList
                    data={visible}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />

                <ItemAddForm onAdd={this.addItem} />
            </div>
        )
    }
}

export default App;

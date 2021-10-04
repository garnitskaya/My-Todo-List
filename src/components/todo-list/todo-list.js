import TodoListItem from "../todo-list-item/todo-list-item";

import './todo-list.css';

const TodoList = ({ data, onDelete, onToggleProp }) => {

    const elements = data.map(item => {
        const { id, ...items } = item;
        return (
            <TodoListItem
                key={id} {...items}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} />
        )
    })

    return (
        <div className="list">
            {elements}
        </div>
    )
}

export default TodoList;
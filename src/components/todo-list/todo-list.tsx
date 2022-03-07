import { FC } from 'react';
import TodoListItem from "../todo-list-item/todo-list-item";
import { IData } from './../app/app';

import './todo-list.css';

interface TodoListProps {
    data: IData[];
    onDelete: (id: string) => void;
    onToggleProp: (id: string, prop: string | any) => void;
}

const TodoList: FC<TodoListProps> = ({ data, onDelete, onToggleProp }) => {

    const elements = data.map(item => {
        const { id } = item;
        return (
            <TodoListItem
                key={id} items={item}
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
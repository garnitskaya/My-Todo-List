import { FC, SyntheticEvent } from 'react';
import { IData } from '../app/app';
import './todo-list-item.css';

interface TodoListItemProps {
    items: IData;
    onDelete: () => void;
    onToggleProp: (e: SyntheticEvent) => void;
}

const TodoListItem: FC<TodoListItemProps> = ({ items, onDelete, onToggleProp }) => {
    const { done, important, label } = items;

    let classes = "list-item d-flex";

    if (important) {
        classes += " important";
    }

    if (done) {
        classes += " done";
    }

    return (
        <div className={classes}>
            <div className="list-item-box">
                <input className="list-item-check form-check-input"
                    type="checkbox"
                    value={done}
                    onChange={onToggleProp}
                    data-toggle="done"
                    checked={done} />

                <span className="list-item-text"
                    onClick={onToggleProp}
                    data-toggle="important">
                    {label}
                </span>
            </div>

            <div className="list-item-buttons d-flex">
                <button
                    className="btn btn-star"
                    type="button">
                    <i className="star fas fa-star"></i>
                </button>

                <button className="btn btn-trash"
                    type="button"
                    onClick={onDelete} >
                    <i className="trash fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )
}

export default TodoListItem;
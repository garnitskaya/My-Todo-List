import { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import './item-add-form.css';

interface ItemAddFormProps {
    onAdd: (label: string) => void;
}

const ItemAddForm: FC<ItemAddFormProps> = ({ onAdd }) => {
    const [label, setLabel] = useState<string>('');

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>): void => {
        const label = e.target.value;
        setLabel(label);
    }

    const onSubmitItem = (e: SyntheticEvent): void => {
        e.preventDefault();
        onAdd(label);
        setLabel('');
    }

    return (
        <form className="add-form d-flex"
            onSubmit={onSubmitItem}>
            <input
                type="text"
                className="add-form-input form-control"
                placeholder="Add task"
                value={label}
                name={label}
                onChange={onChangeValue}
                required />

            <button type="submit" className=" btn btn-add-form" >
                <i className="add-form-circle fas fa-plus-circle"></i>
            </button>
        </form>
    )
}

export default ItemAddForm;
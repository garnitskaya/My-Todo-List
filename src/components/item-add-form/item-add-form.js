import { Component } from 'react';
import './item-add-form.css';

class ItemAddForm extends Component {
    state = {
        label: ''
    }

    onChangeValue = (e) => {
        const label = e.target.value;
        this.setState({ label });
    }

    onSubmitItem = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.label);
        this.setState({ label: '' });
    }

    render() {
        const { label } = this.state;

        return (
            <form className="add-form d-flex"
                onSubmit={this.onSubmitItem}>
                <input
                    type="text"
                    className="add-form-input form-control"
                    placeholder="Add task"
                    value={label}
                    name={label}
                    onChange={this.onChangeValue}
                    required />

                <button type="submit" className=" btn btn-add-form" >
                    <i className="add-form-circle fas fa-plus-circle"></i>
                </button>
            </form>
        )
    }
}

export default ItemAddForm;
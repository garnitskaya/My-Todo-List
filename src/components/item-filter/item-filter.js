import './item-filter.css';

const ItemFilter = () => {
    return (

        <div className="item-filter d-flex ">
            <button type="button" className="btn btn-filter-active ">все</button>
            <button type="button" className="btn btn-filter">активные</button>
            <button type="button" className="btn btn-filter">выполненные</button>
        </div>
    )
}

export default ItemFilter;
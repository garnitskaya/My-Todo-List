import './app-header-info.css';

const AppHeaderInfo = ({ all, done, line }) => {
    return (
        <header className="app-header  d-flex ">
            <h1>Todo List</h1>
            <div className="app-header-info">
                <span style={{ width: `${line}%` }}></span>
                <b>{all}</b> записей, из них выполненных <b>{done}</b>
            </div>
        </header >
    )
}

export default AppHeaderInfo;
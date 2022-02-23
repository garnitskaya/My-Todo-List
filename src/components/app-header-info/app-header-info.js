import './app-header-info.css';

const AppHeaderInfo = ({ all, done, line }) => {
    return (
        <header className="app-header  d-flex ">
            <h1>All Tasks</h1>
            <div className="app-header-info">
                <span style={{ width: `${line}%` }}></span>
                <b>{done}</b >of <b>{all}</b> tasks done
            </div>
        </header>
    )
}

export default AppHeaderInfo;
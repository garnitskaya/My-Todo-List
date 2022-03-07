import { FC } from 'react';
import './app-header-info.css';

interface AppHeaderProps {
    all: number;
    done: number;
    line: string | number;
}

const AppHeaderInfo: FC<AppHeaderProps> = ({ all, done, line }) => {
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
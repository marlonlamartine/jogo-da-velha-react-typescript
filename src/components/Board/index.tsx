import { FC } from "react";
import './style.css';

const Board: FC = ({ children }) => {
    return (
        <div className="container">
            <div className="board">
                {children}
            </div>
        </div>
    )
}

export default Board;
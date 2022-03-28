import { FC } from "react";
import './style.css';

const BoardHeader: FC = () => {
    return (
        <div className="containerBoardHeader">
            <div>
                <button type="button" className="btn-new-game">Novo Jogo</button>
            </div>
        </div>
    );
}

export default BoardHeader;
import { FC } from "react";
import './style.css';

interface IBoardHeader {
    btnReset: () => void
}

const BoardHeader: FC<IBoardHeader> = ({ btnReset }: IBoardHeader) => {
    return (
        <div className="containerBoardHeader">
            <div>
                <button type="button" className="btn-new-game" onClick={btnReset}>Novo Jogo</button>
            </div>
        </div>
    );
}

export default BoardHeader;
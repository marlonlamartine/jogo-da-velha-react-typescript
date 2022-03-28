import { FC } from "react";
import './style.css';

interface IFooter {
    gameFinalStatus: string;
}

const Footer: FC<IFooter> = ({ gameFinalStatus }: IFooter) => {
    return (
        <div className="containerFooter">
            <span className="gameStatus">{gameFinalStatus}</span>
        </div>
    );
}


export default Footer;
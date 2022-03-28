import React, { Dispatch, FC, SetStateAction, useState } from "react";
import './style.css';

interface Iprops {
    stillPlaying: boolean;
    //player: string[];
    //setPlayer: Dispatch<SetStateAction<string[]>>;
    //position: number;
    //iCanBeClicked: boolean;
    value: string;
    clicked: () => void;
}

const Square: FC<Iprops> = ({ stillPlaying, value, clicked }: Iprops) => {

    /*const [fillSquareState, setFillSquareState] = useState(0);
    const [iCanBeClickedState, setICanBeClickedState] = useState<boolean>(iCanBeClicked);


    //const [valueState, setValueState] = useState(value);

    const fillSquare = () => {
        if (stillPlaying === true && iCanBeClickedState === true) {
            setFillSquareState(1);
            iCanBeClicked = false;
            setPlayer(...player[], player[].concat(position));
        }

    }*/

    return (
        <div>
            <span className="square" onClick={clicked}>{value}</span>
        </div>

    );
}

export default Square;
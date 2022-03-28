import React, { Dispatch, FC, SetStateAction, useState } from "react";
import './style.css';

interface Iprops {
    stillPlaying: boolean;
    value: string;
    clicked: () => void;
}

const Square: FC<Iprops> = ({ stillPlaying, value, clicked }: Iprops) => {

    return (
        <div>
            <span className="square" onClick={clicked}>{value}</span>
        </div>

    );
}

export default Square;
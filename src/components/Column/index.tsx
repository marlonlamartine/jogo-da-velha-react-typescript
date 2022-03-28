import React, { FC } from "react";
import './style.css';

interface Iprops {
    position?: number;

}

const Column: FC = ({ children }) => {

    return (
        <div className="column">
            {children}
        </div>
    )
}

export default Column;
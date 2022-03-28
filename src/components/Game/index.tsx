import React, { FC, useEffect, useState } from "react";
import Board from "../Board";
import BoardHeader from "../BoardHeader";
import Column from "../Column";
import Footer from "../Footer";
import Square from "../Square";

let whosTurnState: number = 1;
let hasWinner = '';

const Game: FC = () => {

    const [stillPlayingState, setStillPlayingState] = useState<boolean>(true);

    let [valueState, setValueState] = useState<string[]>(['', '', '', '', '', '', '', '', '']);



    let combination = (valueState[0] === valueState[1] && valueState[0] === valueState[2]) && (valueState[1] != '') ||
        (valueState[3] === valueState[4] && valueState[3] === valueState[5]) && (valueState[4] != '') ||
        (valueState[6] === valueState[7] && valueState[6] === valueState[8]) && (valueState[7] != '') ||
        (valueState[0] === valueState[3] && valueState[0] === valueState[6]) && (valueState[3] != '') ||
        (valueState[1] === valueState[4] && valueState[1] === valueState[7]) && (valueState[4] != '') ||
        (valueState[2] === valueState[5] && valueState[2] === valueState[8]) && (valueState[5] != '') ||
        (valueState[0] === valueState[4] && valueState[0] === valueState[8]) && (valueState[4] != '') ||
        (valueState[2] === valueState[4] && valueState[2] === valueState[6]) && (valueState[4] != '')


    const changeSquare = (position: number) => {

        let copia = [...valueState]
        if (whosTurnState === 1 && valueState[position] === '' && !combination) {
            copia.splice(position, 1, 'X');
            setValueState(copia)

            whosTurnState = 2;
        }
        else if (whosTurnState === 2 && valueState[position] === '' && !combination) {
            copia.splice(position, 1, 'O')
            setValueState(copia)

            whosTurnState = 1;
        }

    };

    if (combination && whosTurnState === 2) {
        hasWinner = 'O jogador X Venceu';
    }
    else if (combination && whosTurnState === 1) {
        hasWinner = 'O jogador O Venceu';
    }

    if (!valueState.includes('') && !combination) {
        hasWinner = 'O jogo deu empate';
    }


    const reset = () => {
        setValueState(['', '', '', '', '', '', '', '', '']);
        whosTurnState = 1;
        hasWinner = '';
    }

    return (
        <div>
            <BoardHeader btnReset={() => { reset() }} />
            <Board>
                <Column>
                    <Square stillPlaying={stillPlayingState}
                        value={valueState[0]}

                        clicked={() => { changeSquare(0) }} />
                    <Square stillPlaying={stillPlayingState}

                        value={valueState[3]}
                        clicked={() => { changeSquare(3) }} />
                    <Square stillPlaying={stillPlayingState}

                        value={valueState[6]}
                        clicked={() => { changeSquare(6) }} />
                </Column>
                <Column >
                    <Square stillPlaying={stillPlayingState}

                        value={valueState[1]}
                        clicked={() => { changeSquare(1) }} />
                    <Square stillPlaying={stillPlayingState}

                        value={valueState[4]}
                        clicked={() => { changeSquare(4) }} />
                    <Square stillPlaying={stillPlayingState}

                        value={valueState[7]}
                        clicked={() => { changeSquare(7) }} />
                </Column>
                <Column >
                    <Square stillPlaying={stillPlayingState}

                        value={valueState[2]}
                        clicked={() => { changeSquare(2) }} />
                    <Square stillPlaying={stillPlayingState}

                        value={valueState[5]}
                        clicked={() => { changeSquare(5) }} />
                    <Square stillPlaying={stillPlayingState}

                        value={valueState[8]}
                        clicked={() => { changeSquare(8) }} />
                </Column>
            </Board>
            <Footer gameFinalStatus={hasWinner} />
        </div>
    );
}

export default Game;
import { useState } from 'react';

import ProjectWrapper from '../components/ui/ProjectWrapper';
import classes from '../components/Tic-Tac-Toe/Game.module.css';
import Board from '../components/Tic-Tac-Toe/Board';

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>
                    {description}
                </button>
            </li>
        );
    });

    return (
        <ProjectWrapper>
            <div>
                <div className='pad'>
                    <p>Tutorial from React Dev:</p>
                    <a href='https://react.dev/learn/tutorial-tic-tac-toe' target='_blank' rel='noreferrer'>
                        https://react.dev/learn/tutorial-tic-tac-toe
                    </a>
                </div>

                <div className={classes.game}>
                    <div className={classes.board}>
                        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                    </div>
                    <div className={classes.info}>
                        <ol>
                            {moves}
                        </ol>
                    </div>
                </div>
            </div>
        </ProjectWrapper>
    );
}

export default Game;
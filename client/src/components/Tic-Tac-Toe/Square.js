import classes from './Game.module.css';

function Square({ value, onSquareClick }) {
    return (
        <button className={classes.square} onClick={onSquareClick}>
            {value}
        </button>
    );
}

export default Square;
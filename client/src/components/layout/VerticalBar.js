import { Link } from 'react-router-dom';

import classes from './VerticalBar.module.css';

function VerticalBar() {
    return (
        <nav>
            <ul className={classes.bar}>
                <li className={classes.tab}>
                    <Link to='/modal' style={{ textDecoration: 'none' }}>
                        <p className={classes.text}>Modal</p>
                    </Link>
                </li>
                <li className={classes.tab}>
                    <Link to='/game' style={{ textDecoration: 'none' }}>
                        <p className={classes.text}>Tic-Tac-Toe</p>
                    </Link>
                </li>
                <li className={classes.tab}>
                    <Link to='/apitest' style={{ textDecoration: 'none' }}>
                        <p className={classes.text}>API</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default VerticalBar;
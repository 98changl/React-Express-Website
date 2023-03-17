import { Link } from 'react-router-dom';

import classes from './VerticalBar.module.css';

function VerticalBar() {
    return (
        <nav>
                <ul className={classes.bar}>
                    <li className={classes.tab}>
                        <Link to='/test' style={{textDecoration: 'none'}}>
                            <p className={classes.text}>Test</p>
                        </Link>
                    </li>
                    <li className={classes.tab}>
                        <Link to='/game' style={{textDecoration: 'none'}}>
                            <p className={classes.text}>Game</p>
                        </Link>
                    </li>
                </ul>
            </nav>
    );
}

export default VerticalBar;
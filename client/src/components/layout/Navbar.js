import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

function Navbar() {
    return (
        <header className={classes.header}>
            <h1 className={classes.name}>Liman Chang</h1>
            <nav>
                <ul className={classes.bar}>
                    <li className={classes.tab}>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <p className={classes.text}>Home</p>
                        </Link>
                    </li>
                    <li className={classes.tab}>
                        <Link to='/portfolio' style={{ textDecoration: 'none' }}>
                            <p className={classes.text}>Portfolio</p>
                        </Link>
                    </li>
                    <li className={classes.tab}>
                        <Link to='/gallery' style={{ textDecoration: 'none' }}>
                            <p className={classes.text}>Gallery</p>
                        </Link>
                    </li>
                    <li className={classes.tab}>
                        <Link to='/projects' style={{ textDecoration: 'none' }}>
                            <p className={classes.text}>Projects</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
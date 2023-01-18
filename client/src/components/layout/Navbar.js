import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

function Navbar() {
    return (
        <header className={classes.header}>
            <h1 className={classes.name}>Liman Chang</h1>
            <nav>
                <ul className={classes.bar}>
                    <li className={classes.tab}>
                        <Link to='/' style={{textDecoration: 'none'}}>
                            <p className={classes.text}>Home</p>
                        </Link>
                    </li>
                    <li className={classes.tab}>
                        <Link to='/gallery' style={{textDecoration: 'none'}}>
                            <p className={classes.text}>Gallery</p>
                        </Link>
                    </li>
                    <li className={classes.tab}>
                        <Link to='/documents' style={{textDecoration: 'none'}}>
                            <p className={classes.text}>Documents</p>
                        </Link>
                    </li>
                    <li className={classes.tab}>
                        <Link to='/contact' style={{textDecoration: 'none'}}>
                            <p className={classes.text}>Contact</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
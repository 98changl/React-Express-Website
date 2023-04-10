import { Link } from 'react-router-dom';

import classes from './VerticalBar.module.css';

function VerticalBar() {
    return (
        <nav className='nav flex-column h-100'>
            <ul className='nav flex-column border border-dark h-100'>
                <li className='nav-item'>
                    <Link className='nav-link' to='/modal'>
                        <p className='text'>Modal</p>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/game'>
                        <p className='text'>Tic-Tac-Toe</p>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/apitest'>
                        <p className='text'>API</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default VerticalBar;
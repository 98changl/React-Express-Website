import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

function Navbar() {
    return (
        <div className='row sticky-top'>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link className='navbar-brand px-5 navbar-brand-custom' to='/'>Liman Chang</Link>
                <button className='navbar-toggler me-3' type='button' data-bs-toggle='collapse' data-bs-target='#navbarContent' aria-controls='navbarContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarContent'>
                    <ul className='navbar-nav'>
                        <li className='nav-item px-3'>
                            <Link className='nav-link nav-link-custom' to='/'>Home</Link>
                        </li>
                        <li className='nav-item px-3'>
                            <Link className='nav-link nav-link-custom' to='/portfolio'>Portfolio</Link>
                        </li>
                        <li className='nav-item px-3'>
                            <Link className='nav-link nav-link-custom' to='/gallery'>Gallery</Link>
                        </li>
                        <li className='nav-item px-3'>
                            <Link className='nav-link nav-link-custom' to='/projects'>Projects</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/electricas">Electricas</Link></li>
                    <li><Link to="/acusticas">Acusticas</Link></li>
                    <li><Link to="/electroacusticas">Electroacusticas</Link></li>
                    <li><Link to="/accesorios">Accesorios</Link></li>
                    <li><Link to="/postventa">PostVenta</Link></li>
                
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
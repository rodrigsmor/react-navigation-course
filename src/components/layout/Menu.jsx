import './Menu.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
    return (
        <aside className={'Menu'}>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/params/1">#1 Params</Link>
                    </li>
                    <li>
                        <Link to="/params/2">#2 Params</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Menu;
// src/components/Header.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import AppLauncher from './AppLauncher'

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-inner">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <nav>
                <AppLauncher />
            </nav>
        </header>
    )
}

export default Header

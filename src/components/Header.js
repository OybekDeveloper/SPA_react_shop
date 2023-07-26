import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function Header() {
    return (
        <nav>
            <div class="nav-wrapper">
                <Link to="/" className="brand-logo">Foods shop</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="about">About</Link></li>
                    <li><Link to="contacts">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

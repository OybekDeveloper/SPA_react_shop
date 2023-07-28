import React from 'react'
import logoNav from "../foto/logoNavbar.jpeg"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function Header() {
    return (
        <nav>
            <div className="nav-wrapper">
                <img className="logoNav" src={logoNav} alt="food logo"/>
                 <Link to="/" className="brand-logo logo-text">Foods shop</Link>

                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="about">About</Link></li>
                    <li><Link to="contacts">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

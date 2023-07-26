import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="page-footer">
                <div className="footer-copyright">
                    <div className="container">
                        © {new Date().getFullYear()} Copyright Text
                        <a className="grey-text text-lighten-4 right" href="#!">SPA shop</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

import React from 'react'
import '../index.css'
export default function Footer() {
    return (
        <div>
            <footer className="page-footer">
                    <h4 style={{textAlign:'center'}}>Social network</h4>
                <div className='socialFooter'>
                    <i className=" footerIcon fa-brands fa-telegram"></i>
                    <i className="footerIcon  fa-brands fa-instagram"></i>
                    <i className="footerIcon  fa-brands fa-facebook"></i>
                    <i className="footerIcon  fa-brands fa-youtube"></i>
                    <i className="footerIcon  fa-brands fa-google"></i>
                    <i className="footerIcon  fa-brands fa-twitter"></i>

                </div>
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

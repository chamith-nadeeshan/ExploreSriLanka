import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className="container">
            <div className="wrap" >
                <div className="logo"><a><img src="/icons/logo.png" /></a></div>
                <div className="nav" >
                    <nav>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>Trip</a></li>
                            <li><a>Discover</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Contact us</a></li>
                        </ul>
                    </nav>
                    <div className="loginButton" >
                        <a>Login</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Header


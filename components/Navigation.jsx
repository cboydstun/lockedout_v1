import React, { useState } from 'react'
import './Navigation.css'

export default function Navigation(props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return (
        <div className='navigation-component'>
            <div className='navigation-container'>
                <div className='logo-container'>
                    <a href='/'>
                        <span role="img" aria-label="Lock Emoji" className='logo'>&#128274;</span> Locked Out San Antonio
                    </a>
                </div>

                <nav>
                    <ul className={`nav-menu ${mobileMenuOpen ? 'nav-menu-mobile' : ''}`}>
                        <li>
                            <a className="navitem" href="/">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="navitem" href="/#about-component">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="navitem" href="/#services-component">
                                Services
                            </a>
                        </li>
                        <li>
                            <a className="navitem" href="/#contact-component">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className='nav-icon' onClick={handleMobileMenuToggle}>
                        {mobileMenuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                    </div>

                </nav>
            </div>
        </div>
    )
}

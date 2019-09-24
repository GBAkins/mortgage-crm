import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">CRM</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/">Home</a></li>
                        <li><a href="/contacts">Contacts</a></li>
                        <li><a href="/pipeline">Pipeline</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

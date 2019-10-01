import React from 'react';

export default function Navbar() {
    return (
        <div>
            <ul id="dropdown1" className="dropdown-content">
                <li><a href="/PastClients">View Past Clients</a></li>
                <li><a href="/BusinessPartners">View Business Partners</a></li>
                <li className="divider"></li>
                <li><a href="/NewPastClient">Add New Past Client</a></li>
                <li><a href="/NewBusinessPartner">Add New Business Partners</a></li>
            </ul>
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">CRM</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/">Dashboard</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Contacts<i className="material-icons right">arrow_drop_down</i></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

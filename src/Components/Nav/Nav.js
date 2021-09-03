import React, { Component } from 'react';
import './Nav.css';

class Header extends Component {
    render() {
        return (
            <nav>
                <logo>PS</logo>
                <div className="nav-links-wrapper">
                    <a className="nav-link">Home</a>
                    <a className="nav-link">About</a>
                    <a className="nav-link">Skills</a>
                    <a className="nav-link">Work</a>
                    <a className="nav-link">Contact</a>
                </div>
                <label className="nav-toggle-dark-container">
                    <input className="nav-dark-checkbox" type="checkbox"></input>
                    <span className="nav-dark-button"></span>
                </label>
            </nav>
        )
    }
}

export default Header;
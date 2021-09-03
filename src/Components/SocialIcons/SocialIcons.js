import React, { Component } from 'react';
import './SocialIcons.css';

class SocialIcons extends Component {
    render() {
        return (
            <div className="social-icons">
                <a href="https://www.instagram.com/pato.sala/">
                    <img src="https://img.icons8.com/fluency-systems-regular/42/7289da/instagram.png"/>
                </a>
                <a href="https://www.instagram.com/pato.sala/">
                    <img src="https://img.icons8.com/ios-glyphs/42/7289da/linkedin-2--v1.png"/>
                </a>
                <a href="https://www.github.com/PatoSala">
                    <img src="https://img.icons8.com/windows/42/7289da/github.png"/>
                </a>
            </div>
        )
    }
}

export default SocialIcons;
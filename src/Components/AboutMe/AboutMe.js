import React, { Component } from 'react';
import './AboutMe.css';

class AboutMe extends Component {
    render() {
        return (
            <div className="abMe-section">
                <h2 className="abMe-title">Who am I?</h2>
                <div className="abMe-summary">
                    <p className="abMe-description">
                        Hi there! I'm Pato, a Full Stack Web Developer based on Argentina.
                        <br/>
                        I'm 19 years old, the eldest among my siblings. Born in a family that
                        <br/>
                        loves horses, huge fans of Polo and Pato (Argentina's national sport).
                        <br/>
                        <br/>
                        Since I was young I showed greate interest on how computers worked.
                        <br/>
                        Little by little I started learning on my own until one day I decided to learn 
                        <br/>
                        how to code to go a step further into this new world.
                        <br/>
                        <br/>
                        Now I'm a Web Developer interested in both Back-End and Front-End 
                        <br/>
                        programming. Looking forward to polish my abilities as a Node and 
                        <br/>
                        React dev.
                    </p>
                </div>
            </div>
        )
    }
}

export default AboutMe;
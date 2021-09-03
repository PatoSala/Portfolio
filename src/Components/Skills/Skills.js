import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {
    render() {
        return (
            <div className="skills-section">
                <h1 className="skills-title">My Skills</h1>
                <div className="skills-meter">
                    <div className="skill">
                        <h3 className="skill-name">NodeJs</h3>
                        <div className="skill-bar-wrapper">
                            <div className="skill-progress node"></div>
                        </div>
                    </div>

                    <div className="skill">
                        <h3 className="skill-name">ReactJs</h3>
                        <div className="skill-bar-wrapper">
                            <div className="skill-progress react"></div>
                        </div>
                    </div>

                    <div className="skill">
                        <h3 className="skill-name">JavaScript</h3>
                        <div className="skill-bar-wrapper">
                            <div className="skill-progress js"></div>
                        </div>
                    </div>

                    <div className="skill">
                        <h3 className="skill-name">Scss</h3>
                        <div className="skill-bar-wrapper">
                            <div className="skill-progress scss"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;
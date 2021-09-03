import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <>
                <header>
                    <div className="container-left">
                        <h1>
                            Hi!
                            <br/>
                            I'm Pato,
                            <br/>
                            Web Developer.
                        </h1>
                        <p className="location-name">
                            <img className="location-pin" src="https://img.icons8.com/material-outlined/24/000000/place-marker.png"/> Buenos Aires, Argentina.
                        </p>
                    </div>
                    <div className="container-right">
                        {/* <div className="arg-flag-wrapper">
                            <img src="https://img.icons8.com/officel/240/000000/argentina.png"/>
                        </div> */}
                        <div className="arg-img-wrapper">
                            <img src="https://img.icons8.com/fluency/500/000000/argentina-map.png"/>
                        </div>
                        {/* <div className="tango-img-wrapper">
                            <img src="https://img.icons8.com/fluency/96/000000/tango.png"/>
                        </div> */}
                    </div>
                </header>
            </>
        )
    }
}

export default Main;
import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="contactMe-section">
                <h1 className="contactMe-title">Contact Me</h1>
                <form className="contactMe-form">
                    <label for="email">Email</label>
                    <br/>
                    <input type="email" name="email" value=""/>
                    <br/>
                    <label for="subject">Subject</label>
                    <br/>
                    <input type="text" name="subject" value=""/>
                    <br/>
                    <label for="message">Message</label>
                    <br/>
                    <textarea name="message"/>
                    <br/>
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}

export default Contact;
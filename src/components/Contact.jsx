import React from 'react';
import './Contact.css';

function Contact(){
    return(
        <div className="contact-container">
            <div className="contact-content">
                <h2 className="section-title">Get in Touch</h2>
                <div className="contact-grid">
                    <div className="contact-info">
                        <h3>Need Help?</h3>
                        <p>We are available 24/7 to answer your questions.</p>
                        <p>Email: support@travelapp.com</p>
                        <p>Phone: +1 234 567 890</p>
                    </div>
                    <form action="" className="contact-form">
                        <input type='text' placeholder='Your Name' />
                        <input type='email' placeholder='Your Email' />
                        <textarea rows='5' placeholder='Message'></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
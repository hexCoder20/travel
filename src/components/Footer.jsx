import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-content">
                <h3>Wanderlust</h3>
                <p>Explore the world with us. Book your dream vacation today.</p>
                <div className="social-icons">
                    <span>Facebook</span>
                    <span>Instagram</span>
                    <span>Twitter</span>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; {new Date().getFullYear()} Travel App. All rights reserved.</p>
            </div>
        </footer >
    );
}

export default Footer;
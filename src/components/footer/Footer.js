import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="f-logo">
                <h1>Tushar</h1>
            </div>

            <div className="f-social">
                <div className="f.icon">
                    <a href="" target="_blank" rel="noreferrer">
                        {/* <img src={} alt="" /> */}
                    </a>
                </div>
                <div className="f.icon">
                    <a href="" target="_blank" rel="noreferrer">
                        {/* <img src={} alt="" /> */}
                    </a>
                </div>
                <div className="f.icon">
                    <a href="" target="_blank" rel="noreferrer">
                        {/* <img src={} alt="" /> */}
                    </a>
                </div>
                <div className="f.icon">
                    <a href="" target="_blank" rel="noreferrer">
                        {/* <img src={} alt="" /> */}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
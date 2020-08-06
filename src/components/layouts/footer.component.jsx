import React from 'react';

const Footer = (props) => {

    return (
        <footer id="footer" className="ghost-bg">
            <div className="row">
                <ul className="footer-social-buttons" style={{width: '100%'}}>
                    <li>
                        <a href="https://twitter.com/TheHumanityLab" className="btn btn-just-icon btn-simple btn-twitter">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/humanitylab/" className="btn btn-just-icon btn-simple btn-facebook">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="row">
                <div className="copyright" style={{width: '100%'}}>
                    Copyright © 2019 Digital Bonds All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
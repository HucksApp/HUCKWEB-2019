import React from 'react';

import sImgG from '../images/icons8-github-50.png';
import sImgT from '../images/icons8-twitter-50.png'
import sImgL from '../images/icons8-linkedin-50.png'
import sImgE from '../images/icons8-new-post-26.png'
import sImgP from '../images/icons8-phone-50.png'
import icLogo from '../images/favicon.png'





import '../Styles/Footer.css'


const Footer = () => {
    return (
        <div className="footer">
            <div className="socials">
                <div className="contct">
                    <h4 className="ct">CONTACTS</h4>
                    <span title="EMAIL" className="email"><img src={sImgE}  alt=""/> hucksapp@gmail.com</span>
                    <span title="MOBILE NO" className="number"><img src={sImgP}  alt=""/> 08064506754</span>
                </div>
                <div className="links">
                    <h4 className="lt">SOCIALS</h4>
                    <img src={sImgG} title="GITUP PROFILE" alt=""/>
                    <img src={sImgL} title="LINKEDIN PROFILE" alt=""/>
                    <img src={sImgT} title="TWITTER PROFILE" alt=""/>
                   
                </div>
            </div>
            <div className="copywright">
                <img src={icLogo} height="40px" width="40px" alt=""/>
                <span>HucksApp</span>
                Copywright &copy; 2019
            </div>
        </div>
    );
}

export default Footer;

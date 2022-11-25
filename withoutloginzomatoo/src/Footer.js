import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <footer>
      <hr/><hr/>
      <p id="footText">&copy; Zomato</p>
      <div id="footmain">
        <div className="footDiv">
          <p>Contact Us</p>
          <p>About Us</p>
        </div>
        <div className="footDiv">
          <p>Contact Us</p>
          <p>About Us</p>
        </div>
        <div className="footDiv noBorder">
                <p>Contact Us</p>
                <p>About Us</p>
            </div>
      </div>
      <hr/>
      <div className="social">
        <a href="www.facebook.com" target="-blank">
          <img src="facebook.png" alt="fb" className="socialicon"/>
        </a>
        <a href="www.facebook.com" target="-blank">
          <img src="facebook.png" alt="fb" className="socialicon"/>
        </a>
      </div>
    </footer>
    )
}
export default Footer;
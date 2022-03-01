import React from "react";
import Logo from "../../assets/images/logo.svg";
import bannerImage from '../../assets/images/illustration-working.svg'
import "./Banner.css";


function Banner() {
 

  return (
   <div className="main-container">
      <div className="banner-container bd-container">
      <nav className="nav-container ">
          <div className="nav-content">
            <div className="nav-menu">
              <img src={Logo} alt="logo" />
              <div className="nav-list">
                <ul className="nav-list-menu">
                  <li className="nav-list-menu-item"><a href="/">Features</a></li>
                  <li className="nav-list-menu-item"><a href="/">Pricing</a></li>
                  <li className="nav-list-menu-item"><a href="/">Resources</a></li>
                </ul>
              </div>
            </div>

            <div className="nav-list-buttons">
              <a href="/">Login</a>
              <a href="/">Sign Up</a>
            </div>
          </div>
        </nav>
      <div className="banner-content">
        <div className="banner-info">
          
          <h1>More than just shorter links</h1>
          <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <a href="/">Get Started</a>
        </div>

        <div className="banner-image">
            <img src={bannerImage} alt="illustration" />
        </div>
      </div>

     
    </div>
    
   </div>
  );
}

export default Banner;

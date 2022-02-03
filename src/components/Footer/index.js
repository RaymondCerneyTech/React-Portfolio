import React from "react";

function Footer() {
	return (
		<div className="new-section foot">
        <div className="title" id="contact">Contact</div>        
        <div className="footer-small">
          <span className="footer-link">
            <a href="cerne004@gmail.com"> Email </a>
          </span>
          <span className="footer-link">
            <a href="https://github.com/RaymondCerneyTech">
              GitHub
            </a>
          </span>
          <span className="footer-link">
            <a href="https://www.linkedin.com/in/raymondcerney/">
              LinkedIn
            </a>
          </span>
        </div>
        <div className="footer-large">
          <div>
            Email:
            <span className="footer-link">
              cerne004@gmail.com
            </span>
          </div>
          <div>
            GitHub:
            <span className="footer-link">
              <a href="https://github.com/RaymondCerneyTech">
                https://github.com/RaymondCerneyTech
              </a>
            </span>
          </div>
          <div>
            LinkedIn:
            <span className="footer-link">
              <a href="https://www.linkedin.com/in/raymondcerney/">
                https://www.linkedin.com/in/raymondcerney/
              </a>
            </span>
          </div>
        </div>
      </div>
	);
}

export default Footer;

import React from "react";

import { ReactComponent as LinkedInImg } from "../../Assets/LinkedIn.svg";
import { ReactComponent as GithubImg } from "../../Assets/GitHub.svg";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <h1>This website was created by André Almeida.</h1>

      <div className="footerLinks-container">
        <a
          href="https://www.linkedin.com/in/andr%C3%A9-almeida-web-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInImg className="link" />
        </a>
        <a
          href="https://github.com/andrealmeida-24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubImg className="link" />
        </a>
      </div>
    </div>
  );
};
export default Footer;

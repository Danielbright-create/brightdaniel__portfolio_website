import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Brightdaniel5050@gmail.com ||  +234 81 481 85691<br />© Copyright Bright Daniel 2022. All Rights Reserved</span>
        <div className="f-icons">
            <a href="https://www.instagram.com/bwaveict/">
          <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://web.facebook.com/danny.bwightii/">
          <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/Danielbright-create">
          <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
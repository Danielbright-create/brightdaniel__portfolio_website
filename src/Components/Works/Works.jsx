import React, { useContext } from "react";
import "./Works.css";
import quest from "../../img/quest.png";
import slc from "../../img/slc.png";
import bwave from "../../img/bwave.png";
import creek from "../../img/creek.png";
import cfb from "../../img/cfb.jpg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <span>
          Sevral testimonies from my clients proves that I'm thebest when it comes to customer relationship.
            <br />
            When it comes to timeliness and fast delievery of projects, you can always depend on me
            <br />
            Trust Me, I'll give you more value than promised

          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={quest} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={slc} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={bwave} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={creek} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={cfb} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
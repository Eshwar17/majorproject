import React from "react";
import { motion } from "framer-motion";
import "./Alumni.css";

import PixelDrive from "../../assets/images/PixelDrive.png";
import DigitalCarta from "../../assets/images/DigitalCarta.png";
import gratisgateway from "../../assets/images/MVPifyLogo.png";
import LinguiConnect from "../../assets/images/NRICSLogo.png";
import palateplethora from "../../assets/images/InstaDevLogo.png";
import PennyQuiz from "../../assets/images/LetscrftLogo.png";
import promptgenix from "../../assets/images/ODCLogo.png";
import zenithsync from "../../assets/images/NRILogo.png";
import saltsphere from "../../assets/images/saltsphere.png";

const logos = [
  zenithsync,
  promptgenix,
  PixelDrive,
  DigitalCarta,
  gratisgateway,
  LinguiConnect,
  palateplethora,
  PennyQuiz,
  saltsphere,
];

const MarqueeRow = ({ direction = "left", speed = 120 }) => {
  return (
    <div className="marquee-wrapper">
      <motion.div
        className="marquee-track"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div className="marquee-item" key={index}>
            <img src={logo} alt="company-logo" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Alumni() {
  return (
    <div className="alumni-container">
      {/* Row 1 → Left */}
      <MarqueeRow direction="left" speed={160} />

      {/* Row 2 → Right */}
      <MarqueeRow direction="right" speed={200} />
    </div>
  );
}

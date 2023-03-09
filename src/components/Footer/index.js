import React from "react";
import { TwitterIcon, DiscordIcon } from "../svgIcons";
import styles from "./Footer.module.sass";
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div className={styles.picContainer}>
          <h2 className={styles.logo}>MONKAI</h2>
        </div>
          <div className={styles.footerBottom}>
            <div className={styles.copyright}>
              <p>MONKAI. All Rights Reserved</p>
            </div>

            <div className={styles.social}>
              <a href="https://twitter.com/monkainft" target="_blank" rel="noopener noreferrer">
                <TwitterIcon color="#fff" className="social-icon" />
              </a>
              <a href="https://discord.gg/monkai" target="_blank" rel="noopener noreferrer">
                <DiscordIcon color="#fff" className="social-icon" />
              </a>
            </div>

            <div className={styles.text}>Los Angeles, California</div>
          </div>
      </footer>
    </div>
  );
};

export default Footer;

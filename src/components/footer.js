import React from "react";

import styles from "./footer.module.css";

const Footer = () => (
  <footer>
    <div className={ styles.FooterMain }>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
);

export default Footer;

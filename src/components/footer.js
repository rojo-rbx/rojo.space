import React from "react";
import { Link } from "gatsby";

import styles from "./footer.module.css";

const NavItem = ({ name, url }) => (
  <Link to={ url } className={ styles.NavItem }>
    { name }
  </Link>
);

const FooterNav = () => (
  <nav className={ styles.FooterNav }>
    <NavItem name="Docs" url="/docs" />
    <NavItem name="Blog" url="/blog" />
  </nav>
);

const FooterAbout = () => (
  <div className={ styles.FooterAbout }>
    <div>© {new Date().getFullYear()} Rojo</div>
    <div>Built with <a href="https://www.gatsbyjs.org">Gatsby</a></div>
  </div>
);

const Footer = () => (
  <footer className={ styles.Footer }>
    <div className={ styles.FooterMain }>
      <FooterAbout />
      <FooterNav />
    </div>
  </footer>
);

export default Footer;

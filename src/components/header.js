import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import logo from "../images/logo-512.png";
import styles from "./header.module.css";

const NavItem = ({ name, url }) => (
  <Link to={ url } className={ styles.NavItem }>
    { name }
  </Link>
);

const Nav = () => (
  <nav className={ styles.Nav }>
    <a href="/docs" className={ styles.NavItem }>Docs</a>
    <NavItem name="Blog" url="/blog" />
  </nav>
);

const Logo = () => (
  <Link className={ styles.Logo } to="/">
    <img src={ logo } alt="Rojo" />
  </Link>
);

const Header = ({ siteTitle }) => (
  <header className={ styles.Header }>
    <div className={ styles.HeaderMain }>
      <Logo />
      <Nav />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

import React from "react";

const Footer = () => (
  <footer>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `60rem`,
        padding: `0px 1rem`,
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
);

export default Footer;

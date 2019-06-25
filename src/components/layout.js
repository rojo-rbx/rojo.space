import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={ data.site.siteMetadata.title } />
      <main style={{ flex: `1 0 auto` }}>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: `60rem`,
            padding: `0px 1rem 1.45rem`,
          }}
        >
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

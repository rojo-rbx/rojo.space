import React from "react";

import Header from "./header";
import Footer from "./footer";
import "./layout.css";

export const NormalPage = ({ children }) => {
  return (
    <>
      <Header siteTitle="Rojo" />
      <main style={{ flex: `1 0 auto` }}>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: `60rem`,
            padding: `0 1rem`,
          }}
        >
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export const FullWidthPage = ({ children }) => {
  return (
    <>
      <Header siteTitle="Rojo" />
      <main style={{ flex: `1 0 auto` }}>
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
};

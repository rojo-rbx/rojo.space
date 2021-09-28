import React from "react";
import "./layout.css";

export const PageBlock = ({ className, children }) => (
  <div
    className={ className }
    style={{
      margin: `0 auto`,
      maxWidth: `60rem`,
      paddingLeft: `1rem`,
      paddingRight: `1rem`,
    }}
  >
    { children }
  </div>
);

export const NormalPage = ({ children }) => {
  return (
    <>
      <main style={{ flex: `1 0 auto` }}>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: `60rem`,
            padding: `0 1rem`,
          }}
        >
          { children }
        </div>
      </main>
    </>
  );
};

export const FullWidthPage = ({ children }) => {
  return (
    <>
      <main style={{ flex: `1 0 auto` }}>
        { children }
      </main>
    </>
  );
};

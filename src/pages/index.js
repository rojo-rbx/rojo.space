import React from "react";
 import { Link } from "gatsby";

import { FullWidthPage } from "../components/layout";
import SEO from "../components/seo";

import logo from "../images/logo-512.png";
import style from "./index.module.css";

const Splash = () => (
  <div className={ style.Splash }>
    <h1 className={ style.SplashTitle }>
      <img src={ logo } alt="Rojo" />
    </h1>
    <h2 className={ style.SplashSubtitle }>Some Splashy Marketing Phrase</h2>
    <div>
      <Link className={ style.SplashButton } to="/docs">Get Started</Link>
    </div>
  </div>
);

const IndexPage = () => (
  <FullWidthPage>
    <SEO title="Home" />
    <Splash />
  </FullWidthPage>
);

export default IndexPage;

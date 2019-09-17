import React, { useState, useEffect } from "react";

import { FullWidthPage, PageBlock } from "../components/layout";
import SEO from "../components/seo";
import users from "../users";

import logo from "../images/logo-512.png";
import style from "./index.module.css";

const Splash = () => (
  <div className={ style.Splash }>
    <h1 className={ style.SplashTitle }>
      <img src={ logo } alt="Rojo" />
    </h1>
    <h2 className={ style.SplashSubtitle }>Professional Development Tools in Roblox</h2>
    <div>
      <a className={ style.SplashButton } href="/docs/0.5.x/guide/installation/">Get Started</a>
      <a className={ style.SecondaryButton } href="https://github.com/rojo-rbx/rojo/releases">Releases</a>
    </div>
  </div>
);

const Features = () => (
  <PageBlock className={ style.Features }>
    <div className={ style.FeaturesMain }>
      <article className={ style.Feature }>
        <h1>Text Editors</h1>
        <p>Visual Studio Code, Sublime Text, Vim. Use your favorite text editor with any of their plugins.</p>
      </article>
      <article className={ style.Feature }>
        <h1>Version Control</h1>
        <p>Use Git, the most popular professional version control system in the world, or any other VCS.</p>
      </article>
      <article className={ style.Feature }>
        <h1>Other Tools</h1>
        <p>Take advantage of decades of tools built by engineers around the world.</p>
      </article>
    </div>
  </PageBlock>
);

const Details = () => (
  <PageBlock className={ style.DetailsContainer }>
    <div className={ style.Details }>
      Rojo enables <b>modularizing</b> your Roblox project into multiple pieces that can be reasoned about <b>independently</b>.
    </div>
  </PageBlock>
);

const User = ({ user: { url, image, name, plays } }) => (
  <a href={ url } className={ style.User }>
    <img
      src={ image }
      alt={ name }
      title={ name + ": " + plays.toLocaleString() + " plays" } />
  </a>
);

const Users = () => {
  const [playCount, setPlayCount] = useState(
    users.reduce((total, user) => total + user.plays, 0)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setPlayCount(count => count + 3);
    }, 80);

    return () => clearInterval(timer);
  });

  const userList = users
    .filter(user => user.image != null)
    .map((user, index) => (
      <User key={ index } user={ user } />
    ));

  return (
    <PageBlock className={ style.Users }>
      <h1 className={ style.UsersTitle }>Powering <b>{ playCount.toLocaleString() }</b> plays and counting.</h1>
      <div className={ style.UserWall }>
        { userList }
      </div>
      <p className={ style.UsersCta }>
        Use Rojo? Want your game here? <a href="https://github.com/rojo-rbx/rojo.space/issues">Open an issue!</a>
      </p>
    </PageBlock>
  );
};

const IndexPage = () => (
  <FullWidthPage>
    <SEO title="Home" />
    <Splash />
    <Features />
    <Details />
    <Users />
  </FullWidthPage>
);

export default IndexPage;

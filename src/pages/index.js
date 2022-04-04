import React from "react";

import { FullWidthPage, PageBlock } from "../components/layout";
import users from "../users";

import logo from "../../static/img/logo.png";
import style from "./index.module.css";

import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const Splash = () => (
  <div className={style.Splash}>
    <h1 className={style.SplashTitle}>
      <img src={logo} alt="Rojo" />
    </h1>
    <h2 className={style.SplashSubtitle}>
      Professional Development Tools in Roblox
    </h2>
    <div className={style.buttons}>
      <Link
        className="button button--primary button--lg"
        to="/docs/v6"
      >
        Get Started
      </Link>
      <Link
        className="button button--secondary button--lg"
        to="https://github.com/rojo-rbx/rojo/releases"
      >
        Releases
      </Link>
    </div>
  </div>
);

const Features = () => (
  <PageBlock className={style.Features}>
    <div className={style.FeaturesMain}>
      <article className={style.Feature}>
        <h1>Text Editors</h1>
        <p>
          Visual Studio Code, Sublime Text, Vim. Use your favorite text editor
          with any of their plugins.
        </p>
      </article>
      <article className={style.Feature}>
        <h1>Version Control</h1>
        <p>
          Use Git, the most popular professional version control system in the
          world, or any other VCS.
        </p>
      </article>
      <article className={style.Feature}>
        <h1>Other Tools</h1>
        <p>
          Take advantage of decades of tools built by engineers around the
          world.
        </p>
      </article>
    </div>
  </PageBlock>
);

const Details = () => (
  <PageBlock className={style.DetailsContainer}>
    <div className={style.Details}>
      Rojo enables <b>modularizing</b> your Roblox project into multiple pieces
      that can be reasoned about <b>independently</b>.
    </div>
  </PageBlock>
);

const User = ({ user: { url, image, name } }) => (
  <a href={url} className={style.User}>
    <img src={image} alt={name} title={name} />
  </a>
);

const Users = () => {
  const userList = users
    .filter((user) => user.image != null)
    .map((user, index) => <User key={index} user={user} />);

  return (
    <PageBlock className={style.Users}>
      <h1 className={style.UsersTitle}>
        Powering the <b>Top Games</b> on Roblox
      </h1>
      <div className={style.UserWall}>{userList}</div>
      <p className={style.UsersCta}>
        Use Rojo? Want your game here?{" "}
        <a href="https://github.com/rojo-rbx/rojo.space/issues">
          Open an issue!
        </a>
      </p>
    </PageBlock>
  );
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={"Homepage"}
      description="Rojo enables Roblox developers to use professional-grade software engineering tools"
    >
      <main>
        <Splash />
        <Features />
        <Details />
        <Users />
      </main>
    </Layout>
  );
}

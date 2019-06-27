import React from "react";

import { NormalPage } from "../components/layout";
import SEO from "../components/seo";

import style from "./blog.module.css";

const BlogPage = () => (
  <NormalPage>
    <SEO title="Blog" />
    <h1 className={ style.BlogTitle }>Blog Coming Eventually!</h1>
  </NormalPage>
);

export default BlogPage;

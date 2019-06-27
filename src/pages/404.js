import React from "react";

import { NormalPage } from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <NormalPage>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
  </NormalPage>
);

export default NotFoundPage;

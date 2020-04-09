import React from "react";

import Layout from "gatsby-theme-near/src/components/layout";
import NearAuthenticate from "gatsby-theme-near/src/components/near-authenticate"

export default () => (
  <Layout>
    <NearAuthenticate signInParams={{ title: "Example App" }} />
    Homepage in a user's site
  </Layout>
);

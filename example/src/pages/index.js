import React from "react";
import { Text } from "theme-ui"

import Layout from "gatsby-theme-near/src/components/layout";
import NearAuthenticate from "gatsby-theme-near/src/components/near-authenticate"

export default () => (
  <Layout>
    <NearAuthenticate signInParams={{ title: "Example App" }} />
    Homepage in a user's site
    <Text variant="code">
      let status = await connection.provider.status();
      const blockHash = status.sync_status.last_block_hash;
    </Text>
  </Layout>
);

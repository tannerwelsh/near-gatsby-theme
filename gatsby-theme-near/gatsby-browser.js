import React from "react";
import { ThemeProvider } from "theme-ui";
import * as nearlib from "nearlib";

import { theme } from "./src/theme";
import NearContext from "./src/context/near-context"

import "./src/styles/fonts.css"
import "./src/styles/google-fonts.css"

const defaultNearConfig = {
  networkId: "default", // this can be any label to namespace user accounts
  nodeUrl: "https://rpc.nearprotocol.com", // this endpoint must point to the network you want to reach
  walletUrl: "https://wallet.nearprotocol.com", // this endpoint must exist for the wallet to work
  helperUrl: "https://near-contract-helper.onrender.com",
  deps: {
    keyStore: new nearlib.keyStores.BrowserLocalStorageKeyStore(), // keys are stored as plaintext in LocalStorage
  },
}

export const wrapRootElement = ({ element }, pluginOptions) => {
  const { nearConfig } = pluginOptions

  class NearProvider extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        near: null,
        wallet: null,
      };
    }

    async componentDidMount() {
      // Merge custom NEAR config with defaults
      const config = {
        ...defaultNearConfig,
        ...nearConfig,
      }

      const near = await nearlib.connect(config); // connect to the NEAR platform
      const wallet = new nearlib.WalletAccount(near); // instantiate a new wallet

      if (wallet.getAccountId() !== "") {
        near.config.masterAccount = wallet.getAccountId();
      }

      this.setState({ near, wallet });
    }

    render() {
      return (
        <NearContext.Provider value={this.state}>
          {this.props.children}
        </NearContext.Provider>
      );
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <NearProvider>{element}</NearProvider>
    </ThemeProvider>
  );
};

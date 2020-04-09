module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-near",
      options: {
        nearConfig: {
          // Example custom options to pass to gatsby-theme-near
          networkId: "default",
          nodeUrl: "https://rpc.nearprotocol.com",
          walletUrl: "https://wallet.nearprotocol.com",
          helperUrl: "https://near-contract-helper.onrender.com",
        },
      },
    },
  ],
};

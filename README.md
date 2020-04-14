<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby theme providing styles & utility components for building with NEAR protocol
</h1>

![Screen Shot 2020-04-13 at 6 19 41 PM](https://user-images.githubusercontent.com/709100/79173037-aa6b5400-7db3-11ea-831d-5584ad0e3856.png)

## Use this Theme

```shell
cd /path/to/your-gatsby-site
yarn add # TODO: add URL for theme's NPM package
```

Then edit your Gatsby config file:

```js
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
```

[Gatsby docs for using a theme](https://www.gatsbyjs.org/docs/themes/using-a-gatsby-theme/).

## Up and Running

```shell
gatsby new my-theme https://github.com/tannerwelsh/near-gatsby-theme
cd my-theme
yarn workspace example develop
```

## Layout

Repo is split into two yarn workspaces: one for the theme itself, one for an example Gatsby site using the theme.

### `gatsby-theme-near`

This directory is the theme package itself.

- `gatsby-theme-near/`
  - `index.js`: Since themes also function as plugins, this is an empty file that
    gatsby needs to use this theme as a plugin.
  - `src/`: Components, styles, and asset files provied by the theme
  - `static/`: Static files copied directly into the `public/` folder at buildtime
  - `package.json`: The dependencies that your theme will pull in when people install it. `gatsby` should be a `peerDependency`.

### `example`

This is an example usage of your theme. It should look the same as the
site of someone who installed and used your theme from npm.

- `example/`
  - `gatsby-config.js`: Specifies which theme to use and any other one-off config a site might need.
  - `src/`: Source code such as one-off pages or components that might live in
    a user's site.

You can run the example with:

```shell
yarn workspace example develop
```

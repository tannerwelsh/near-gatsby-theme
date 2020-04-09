import React from "react";
import { Button } from "theme-ui";

import NearContext from "../context/near-context";

export default class NearAuthenticate extends React.Component {
  static contextType = NearContext;

  constructor(props) {
    super(props);
    this.state = { isSignedIn: false };

    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  signIn() {
    const {
      account = null,
      title = "My NEAR App",
      successUrl = "",
      failureUrl = "",
    } = this.props.signInParams || {};

    this.context.wallet.requestSignIn(account, title, successUrl, failureUrl);
  }

  signOut() {
    this.context.wallet.signOut();
    this.setState({ isSignedIn: false });
  }

  render() {
    if (!this.context.wallet) return null
    const { wallet } = this.context

    const signInButton = (
      <Button onClick={this.signIn}>Sign in with NEAR</Button>
    );

    const signOutButton = <Button onClick={this.signOut}>Sign out</Button>;

    return wallet.isSignedIn ? signOutButton : signInButton;
  }
}

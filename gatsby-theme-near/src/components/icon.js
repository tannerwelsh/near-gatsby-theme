/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui"

import Account from "../assets/icons/icon-account.svg";
import AccountBl from "../assets/icons/icon-account-bl.svg";
import AccountGrey from "../assets/icons/icon-account-grey.svg";
import Activity from "../assets/icons/icon-activity.svg";
import ActivityGrey from "../assets/icons/icon-activity-grey.svg";
import Add from "../assets/icons/icon-add.svg";
import AddBlue from "../assets/icons/icon-add-blue.svg";
import AppDefault from "../assets/icons/icon-app-default.svg";
import ArrowBlk from "../assets/icons/icon-arrow-blk.svg";
import ArrowDown from "../assets/icons/icon-arrow-down.svg";
import ArrowGrn from "../assets/icons/icon-arrow-grn.svg";
import ArrowLeft from "../assets/icons/icon-arrow-left.svg";
import ArrowRight from "../assets/icons/icon-arrow-right.svg";
import ArrowUp from "../assets/icons/icon-arrow-up.svg";
import ArrowWhite from "../assets/icons/icon-arrow-white.svg";
import Authorize from "../assets/icons/icon-authorize.svg";
import Authorized from "../assets/icons/icon-authorized.svg";
import AuthorizedGrey from "../assets/icons/icon-authorized-grey.svg";
import Beacon from "../assets/icons/icon-beacon.svg";
import Blockchain from "../assets/icons/icon-blockchain.svg";
import Blocks from "../assets/icons/icon-blocks.svg";
import Check from "../assets/icons/icon-check.svg";
import CheckBlue from "../assets/icons/icon-check-blue.svg";
import CheckWhite from "../assets/icons/icon-check-white.svg";
import Close from "../assets/icons/icon-close.svg";
import CloseWhite from "../assets/icons/icon-close-white.svg";
import Collapse from "../assets/icons/icon-collapse.svg";
import Contacts from "../assets/icons/icon-contacts.svg";
import ContactsGrey from "../assets/icons/icon-contacts-grey.svg";
import Contract from "../assets/icons/icon-contract.svg";
import Deny from "../assets/icons/icon-deny.svg";
import Doc from "../assets/icons/icon-doc.svg";
import DocGrey from "../assets/icons/icon-doc-grey.svg";
import EmailIconBlack from "../assets/icons/email-icon-black.svg";
import ExplorerLogo from "../assets/icons/explorer-logo.svg";
import FooterNearkat from "../assets/icons/footer-nearkat.svg";
import Help from "../assets/icons/icon-help.svg";
import Home from "../assets/icons/icon-home.svg";
import IntFlagSmall from "../assets/icons/int-flag-small.svg";
import Issues from "../assets/icons/icon-issues.svg";
import Keys from "../assets/icons/icon-keys.svg";
import KeysGrey from "../assets/icons/icon-keys-grey.svg";
import Lock from "../assets/icons/icon-lock.svg";
import Logout from "../assets/icons/icon-logout.svg";
import ManageWallet from "../assets/icons/icon-manage-wallet.svg";
import MBlock from "../assets/icons/icon-m-block.svg";
import MCopy from "../assets/icons/icon-m-copy.svg";
import MDoc from "../assets/icons/icon-m-doc.svg";
import MFilter from "../assets/icons/icon-m-filter.svg";
import MHeight from "../assets/icons/icon-m-height.svg";
import MHeld from "../assets/icons/icon-m-held.svg";
import MNode from "../assets/icons/icon-m-node.svg";
import MNodeOnline from "../assets/icons/icon-m-node-online.svg";
import MobileMenu from "../assets/icons/icon-mobile-menu.svg";
import MPower from "../assets/icons/icon-m-power.svg";
import MReceipt from "../assets/icons/icon-m-receipt.svg";
import MSearch from "../assets/icons/icon-m-search.svg";
import MSent from "../assets/icons/icon-m-sent.svg";
import MSize from "../assets/icons/icon-m-size.svg";
import MTps from "../assets/icons/icon-m-tps.svg";
import MTransaction from "../assets/icons/icon-m-transaction.svg";
import MUser from "../assets/icons/icon-m-user.svg";
import N_1000 from "../assets/icons/n-1000.svg";
import N_1000Wht from "../assets/icons/n-1000-wht.svg";
import Near from "../assets/icons/near.svg";
import NearFooterLogo from "../assets/icons/near-footer-logo.svg";
import NearLogo from "../assets/icons/near_logo.svg";
import NewWin from "../assets/icons/icon-new-win.svg";
import Nodes from "../assets/icons/icon-nodes.svg";
import Output from "../assets/icons/icon-output.svg";
import Phrase from "../assets/icons/icon-phrase.svg";
import Problems from "../assets/icons/icon-problems.svg";
import Recent from "../assets/icons/icon-recent.svg";
import RecoverEmail from "../assets/icons/icon-recover-email.svg";
import RecoverPhone from "../assets/icons/icon-recover-phone.svg";
import RecoverSeedphrase from "../assets/icons/icon-recover-seedphrase.svg";
import Search from "../assets/icons/icon-search.svg";
import Send from "../assets/icons/icon-send.svg";
import Shard from "../assets/icons/icon-shard.svg";
import ShareBlue from "../assets/icons/icon-share-blue.svg";
import Staking from "../assets/icons/icon-staking.svg";
import Stats from "../assets/icons/icon-stats.svg";
import TAcct from "../assets/icons/icon-t-acct.svg";
import TCall from "../assets/icons/icon-t-call.svg";
import TContract from "../assets/icons/icon-t-contract.svg";
import TKeyDelete from "../assets/icons/icon-t-key-delete.svg";
import TKeyNew from "../assets/icons/icon-t-key-new.svg";
import TKeySwap from "../assets/icons/icon-t-key-swap.svg";
import Transactions from "../assets/icons/icon-transactions.svg";
import TransarrowDown from "../assets/icons/icon-transarrow-down.svg";
import TransarrowUp from "../assets/icons/icon-transarrow-up.svg";
import TStake from "../assets/icons/icon-t-stake.svg";
import TTransfer from "../assets/icons/icon-t-transfer.svg";
import UserIconGrey from "../assets/icons/user-icon-grey.svg";
import Wallet from "../assets/icons/wallet.svg";

const iconMap = new Map([
  ["account", Account],
  ["account-bl", AccountBl],
  ["account-grey", AccountGrey],
  ["activity", Activity],
  ["activity-grey", ActivityGrey],
  ["add", Add],
  ["add-blue", AddBlue],
  ["app-default", AppDefault],
  ["arrow-blk", ArrowBlk],
  ["arrow-down", ArrowDown],
  ["arrow-grn", ArrowGrn],
  ["arrow-left", ArrowLeft],
  ["arrow-right", ArrowRight],
  ["arrow-up", ArrowUp],
  ["arrow-white", ArrowWhite],
  ["authorize", Authorize],
  ["authorized", Authorized],
  ["authorized-grey", AuthorizedGrey],
  ["beacon", Beacon],
  ["blockchain", Blockchain],
  ["blocks", Blocks],
  ["check", Check],
  ["check-blue", CheckBlue],
  ["check-white", CheckWhite],
  ["close", Close],
  ["close-white", CloseWhite],
  ["collapse", Collapse],
  ["contacts", Contacts],
  ["contacts-grey", ContactsGrey],
  ["contract", Contract],
  ["deny", Deny],
  ["doc", Doc],
  ["doc-grey", DocGrey],
  ["email-icon-black", EmailIconBlack],
  ["explorer-logo", ExplorerLogo],
  ["footer-nearkat", FooterNearkat],
  ["help", Help],
  ["home", Home],
  ["int-flag-small", IntFlagSmall],
  ["issues", Issues],
  ["keys", Keys],
  ["keys-grey", KeysGrey],
  ["lock", Lock],
  ["logout", Logout],
  ["manage-wallet", ManageWallet],
  ["m-block", MBlock],
  ["m-copy", MCopy],
  ["m-doc", MDoc],
  ["m-filter", MFilter],
  ["m-height", MHeight],
  ["m-held", MHeld],
  ["m-node", MNode],
  ["m-node-online", MNodeOnline],
  ["mobile-menu", MobileMenu],
  ["m-power", MPower],
  ["m-receipt", MReceipt],
  ["m-search", MSearch],
  ["m-sent", MSent],
  ["m-size", MSize],
  ["m-tps", MTps],
  ["m-transaction", MTransaction],
  ["m-user", MUser],
  ["n-1000", N_1000],
  ["n-1000-wht", N_1000Wht],
  ["near", Near],
  ["near-footer-logo", NearFooterLogo],
  ["near-logo", NearLogo],
  ["new-win", NewWin],
  ["nodes", Nodes],
  ["output", Output],
  ["phrase", Phrase],
  ["problems", Problems],
  ["recent", Recent],
  ["recover-email", RecoverEmail],
  ["recover-phone", RecoverPhone],
  ["recover-seedphrase", RecoverSeedphrase],
  ["search", Search],
  ["send", Send],
  ["shard", Shard],
  ["share-blue", ShareBlue],
  ["staking", Staking],
  ["stats", Stats],
  ["t-acct", TAcct],
  ["t-call", TCall],
  ["t-contract", TContract],
  ["t-key-delete", TKeyDelete],
  ["t-key-new", TKeyNew],
  ["t-key-swap", TKeySwap],
  ["transactions", Transactions],
  ["transarrow-down", TransarrowDown],
  ["transarrow-up", TransarrowUp],
  ["t-stake", TStake],
  ["t-transfer", TTransfer],
  ["user-icon-grey", UserIconGrey],
  ["wallet", Wallet],
]);

const Icon = (props) => {
  const { name } = props;
  const IconSVG = iconMap.get(name);

  return <IconSVG sx={{variant: 'icons.small'}} />;
};

export default Icon;

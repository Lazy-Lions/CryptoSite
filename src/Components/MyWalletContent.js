import React, { useState, useEffect } from "react";
import axios from "axios";
import firebase from "firebase";
import "firebase/auth";
import { Icon } from "semantic-ui-react";
import fire from "../Components/config/fire";
import QRCode from "react-qr-code";
import { Accordion, Card } from "react-bootstrap";
import BuySellDiv from "./BuySellDiv";
import Footer from "./Footer";
import RecentTransaction from "./RecentTransaction";
import { FaBitcoin, FaEthereum, FaChevronDown } from "react-icons/fa";
import { SiLitecoin } from "react-icons/si";
import { FcDepartment, FcExport, FcApproval } from "react-icons/fc";

export default function MyWalletContent() {
  const [confirmbtc, setConfirmbtc] = useState("0.00");
  const [unconfirmbtc, setUnconfirmbtc] = useState("0.00");
  const [totalbtc, setTotalbtc] = useState("0.00");
  const [confirmeth, setConfirmeth] = useState("0.00");
  const [unconfirmeth, setUnconfirmeth] = useState("0.00");
  const [totaleth, setTotaleth] = useState("0.00");
  const [confirmbch, setConfirmbch] = useState("0.00");
  const [unconfirmbch, setUnconfirmbch] = useState("0.00");
  const [totalbch, setTotalbch] = useState("0.00");
  const [confirmltc, setConfirmltc] = useState("0.00");
  const [unconfirmltc, setUnconfirmltc] = useState("0.00");
  const [totalltc, setTotalltc] = useState("0.00");
  const [btcp, setBtcp] = useState("");
  const [btcpr, setBtcpr] = useState("");
  const [ethp, setEthp] = useState("");
  const [ethpr, setEthpr] = useState("");
  const [bchp, setBchp] = useState("");
  const [bchpr, setBchpr] = useState("");
  const [ltcp, setLtcp] = useState("");
  const [ltcpr, setLtcpr] = useState("");
  useEffect(() => {
    console.log(ethp);
    console.log(bchp);
    var id = fire.auth().currentUser.uid;
    firebase
      .database()
      .ref("Currency_Info/" + id)
      .once("value")
      .then((snapshot) => {
        setBtcp(snapshot.val() && snapshot.val().BtcPublic);
        setBtcpr(snapshot.val() && snapshot.val().BtcPrivate);
        setEthp(snapshot.val() && snapshot.val().EthPublic);
        setEthpr(snapshot.val() && snapshot.val().EthPrivate);
        setBchp(snapshot.val() && snapshot.val().BchPublic);
        setBchpr(snapshot.val() && snapshot.val().BchPrivate);
        setLtcp(snapshot.val() && snapshot.val().LtcPublic);
        setLtcpr(snapshot.val() && snapshot.val().LtcPrivate);
      });
    axios
      .get(`http://199.192.16.63/api/BTC/${btcp}/balance`)
      .then((res) => {
        setConfirmbtc(res.data.result.balance);
        setUnconfirmbtc(res.data.result.unconfirmedBalance);
        setTotalbtc(res.data.result.total);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://199.192.16.63/api/ETH/${ethp}/balance`)
      .then((res) => {
        setConfirmeth(res.data.result.balance);
        setUnconfirmeth(res.data.result.unconfirmedBalance);
        setTotaleth(res.data.result.total);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://199.192.16.63/api/BCH/${bchp}/balance`)
      .then((res) => {
        setConfirmbch(res.data.result.balance);
        setUnconfirmbch(res.data.result.unconfirmedBalance);
        setTotalbch(res.data.result.total);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://199.192.16.63/api/LTC/${ltcp}/balance`)
      .then((res) => {
        setConfirmltc(res.data.result.balance);
        setUnconfirmltc(res.data.result.unconfirmedBalance);
        setTotalltc(res.data.result.total);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [
    setBtcp,
    setBtcpr,
    setEthp,
    setEthpr,
    setBchp,
    setBchpr,
    setLtcp,
    setLtcpr,
    btcp,
    ethp,
    bchp,
    ltcp,
  ]);
  const Style = {
    position: "absolute",
    left: "5px",
    top: "17px",
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <main class="margin mt-0">
        <div class="dash-balance">
          <div class="dash-content relative">
            <h3 class="w-text">My Wallet</h3>
            <div class="notification">
              <a href="#">
                <i class="fa fa-plus"></i>
              </a>
            </div>
          </div>
        </div>

        <section class="bal-section container-fluid">
          <div class="resources-card-wrapper">
            <div class=" wallet-card  mr-10 round">
              <div class="container flex-column flex-md-row">
                <img
                  src="./assets/img/content/coin1.png"
                  class="max50"
                  alt=""
                />
                <h3 class="">Bitcoin Wallet</h3>
                <p class="mb-0 font-weight-medium">
                  <i class="txt-green fa fa-arrow-up mr-10"></i>Balance:{" "}
                  {confirmbtc} btc{" "}
                </p>
                <p class="mb-0 font-weight-medium">
                  <i class="txt-green fa fa-arrow-up mr-10"></i>Unconfirmed:{" "}
                  {unconfirmbtc} btc{" "}
                </p>
                <p class="mb-0 font-weight-medium">
                  <i class="txt-green fa fa-arrow-up mr-10"></i>Total:{" "}
                  {totalbtc} btc{" "}
                </p>
                <div class="overlay">
                  <div class="text">
                    <h3>Public key</h3>
                    <marquee width="100%" scrollamount="5">
                      {btcp}
                    </marquee>
                    <Icon
                      name="copy"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigator.clipboard.writeText(btcp)}
                    />
                    <h3>Private key</h3>
                    <marquee width="100%" scrollamount="5">
                      {btcpr}
                    </marquee>
                    <Icon
                      name="copy"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigator.clipboard.writeText(btcpr)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="wallet-card ml-10">
              <div class="container flex-column flex-md-row">
                <img
                  src="./assets/img/content/coin2.png"
                  class="max50"
                  alt=""
                />
                <h3 class="">Etherium Wallet</h3>
                <p class="mb-0 font-weight-medium">
                  <i class="txt-green fa fa-arrow-up mr-10"></i>Balance:{" "}
                  {confirmeth} eth{" "}
                </p>
                <p class="mb-0 font-weight-medium">
                  <i class="txt-green fa fa-arrow-up mr-10"></i>Unconfirmed:{" "}
                  {unconfirmeth} eth{" "}
                </p>
                <p class="mb-0 font-weight-medium">
                  <i class="txt-green fa fa-arrow-up mr-10"></i>Total:{" "}
                  {totaleth} eth{" "}
                </p>
                <div class="overlay">
                  <div class="text">
                    <h3>Public key</h3>
                    <marquee width="100%" scrollamount="5">
                      {ethp}
                    </marquee>
                    <Icon
                      name="copy"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigator.clipboard.writeText(btcp)}
                    />
                    <h3>Private key</h3>
                    <marquee width="100%" scrollamount="5">
                      {ethpr}
                    </marquee>
                    <Icon
                      name="copy"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigator.clipboard.writeText(btcpr)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="resources-card-wrapper mt-15">
            <div class="wallet-card mr-10">
              <div class="container flex-column flex-md-row">
                <img
                  src="./assets/img/content/coin4.png"
                  class="max50"
                  alt=""
                />
                <h3 class="">BitcoinCash Wallet</h3>
                <p class="mb-0 font-weight-medium">
                  <i class="txt-green fa fa-arrow-up mr-10"></i>Balance:{" "}
                  {confirmbch} bch{" "}
                </p>
                <p class="mb-0 font-weight-medium">
                  <i class="txt-green fa fa-arrow-up mr-10"></i>Unconfirmed:{" "}
                  {unconfirmbch} bch{" "}
                </p>
                <p class="mb-0 font-weight-medium">
                  <i class="txt-green fa fa-arrow-up mr-10"></i>Total:{" "}
                  {totalbch} bch{" "}
                </p>
                <div class="overlay">
                  <div class="text">
                    <h3>Public key</h3>
                    <marquee width="100%" scrollamount="5">
                      {bchp}
                    </marquee>
                    <Icon
                      name="copy"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigator.clipboard.writeText(btcp)}
                    />
                    <h3>Private key</h3>
                    <marquee width="100%" scrollamount="5">
                      {bchpr}
                    </marquee>
                    <Icon
                      name="copy"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigator.clipboard.writeText(btcpr)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="wallet-card ml-10">
              <div class="container flex-column flex-md-row">
                <img
                  src="./assets/img/content/coin3.png"
                  class="max50"
                  alt=""
                />
                <h3 class="">Litecoin Wallet</h3>
                <p class="mb-0 font-weight-medium">
                  <i class="txt-green fa fa-arrow-up mr-10"></i>Balance:{" "}
                  {confirmltc} ltc{" "}
                </p>
                <p class="mb-0 font-weight-medium">
                  <i class="txt-green fa fa-arrow-up mr-10"></i>Unconfirmed:{" "}
                  {unconfirmltc} ltc{" "}
                </p>
                <p class="mb-0 font-weight-medium">
                  <i class="txt-green fa fa-arrow-up mr-10"></i>Total:{" "}
                  {totalltc} ltc{" "}
                </p>
                <div class="overlay">
                  <div class="text">
                    <h3>Public key</h3>
                    <marquee width="100%" scrollamount="5">
                      {ltcp}
                    </marquee>
                    <Icon
                      name="copy"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigator.clipboard.writeText(btcp)}
                    />
                    <h3>Private key</h3>
                    <marquee width="100%" scrollamount="5">
                      {ltcpr}
                    </marquee>
                    <Icon
                      name="copy"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigator.clipboard.writeText(btcpr)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="wallets-list container-fluid">
          <h4 class="title-main">Cryptocoins Wallets</h4>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <div class="expandable-header purp">
                  <FaBitcoin
                    style={{ marginRight: "10px" }}
                    size={40}
                    color="white"
                  />
                  <h3 class="list-title">Bitcoin Wallet</h3>
                  <FaChevronDown class="list-arrow" size={30} color="white" />
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <h4>Recent Bitcoin Transactions</h4>
                  <div class="recent-trans">
                    <ul class="dropdown-menu-list list-unstyled no-mb">
                      <li>
                        <div class="notice-icon">
                          <div style={Style}>
                            <FcDepartment size={25} />
                          </div>
                        </div>
                        <div>
                          <span class="name">
                            <strong>Recieved Amount</strong>
                            <span class="time small">+ 3.39498 BTC</span>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div class="notice-icon">
                          <div style={Style}>
                            <FcExport size={25} />
                          </div>
                        </div>
                        <div>
                          <span class="name">
                            <strong>Sent Amount</strong>
                            <span class="time small">- 0.81729 BTC</span>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div class="notice-icon">
                          <div style={Style}>
                            <FcApproval size={25} />
                          </div>
                        </div>
                        <div>
                          <span class="name">
                            <strong>Recieved Amount</strong>
                            <span class="time small">+ 548,485.44 BTC</span>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="wallet-address">
                    <h4 class="w-text mt-0">Bitcoin Wallet Address</h4>
                    <div class="form-row-group with-icons">
                      <div class="form-row no-padding">
                        <i class="cc BTC text-muted"></i>
                        <input
                          type="text"
                          name="aaa"
                          class="form-element"
                          value={btcp}
                        />
                      </div>
                    </div>
                    <QRCode value={btcp} class="mt-15" />
                    <h4>This is your Wallet ID</h4>
                    <p class="g-text mb-0">
                      Scan This crediential to send or exchange crypto assets
                      with just scaning this code
                    </p>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <div class="expandable-header purp">
                  <FaEthereum
                    style={{ marginRight: "10px" }}
                    size={40}
                    color="white"
                  />
                  <h3 class="list-title">Ethereum Wallet</h3>
                  <FaChevronDown class="list-arrow" size={30} color="white" />
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <h4>Recent Ethereum Transactions</h4>
                  <div class="recent-trans">
                    <ul class="dropdown-menu-list list-unstyled no-mb">
                      <li>
                        <div class="notice-icon">
                          <div style={Style}>
                            <FcDepartment size={25} />
                          </div>
                        </div>
                        <div>
                          <span class="name">
                            <strong>Recieved Amount</strong>
                            <span class="time small">+ 3.39498 ETH</span>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div class="notice-icon">
                          <div style={Style}>
                            <FcExport size={25} />
                          </div>
                        </div>
                        <div>
                          <span class="name">
                            <strong>Sent Amount</strong>
                            <span class="time small">- 0.81729 ETH</span>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div class="notice-icon">
                          <div style={Style}>
                            <FcApproval size={25} />
                          </div>
                        </div>
                        <div>
                          <span class="name">
                            <strong>Recieved Amount</strong>
                            <span class="time small">+ BTC8,485.44 ETH</span>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="wallet-address">
                    <h4 class="w-text mt-0">Ethereum Wallet Address</h4>
                    <div class="form-row-group with-icons">
                      <div class="form-row no-padding">
                        <i class="cc ETH text-muted"></i>
                        <input
                          type="text"
                          name="aaa"
                          class="form-element"
                          value={ethp}
                        />
                      </div>
                    </div>
                    <QRCode value={ethp} class="mt-15" />
                    <h4>This is your Wallet ID</h4>
                    <p class="g-text mb-0">
                      Scan This crediential to send or exchange crypto assets
                      with just scaning this code
                    </p>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <div class="expandable-header purp">
                  <FaBitcoin
                    size={40}
                    style={{ marginRight: "10px" }}
                    color="white"
                  />
                  <h3 class="list-title">Bitcoin Cash Wallet</h3>
                  <FaChevronDown class="list-arrow" size={30} color="white" />
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <h4>Recent Bitcoin Cash Transactions</h4>
                  <div class="recent-trans">
                    <ul class="dropdown-menu-list list-unstyled no-mb">
                      <li>
                        <div class="notice-icon">
                          <div style={Style}>
                            <FcDepartment size={25} />
                          </div>
                        </div>
                        <div>
                          <span class="name">
                            <strong>Recieved Amount</strong>
                            <span class="time small">+ 3.39498 BCH</span>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div class="notice-icon">
                          <div style={Style}>
                            <FcExport size={25} />
                          </div>
                        </div>
                        <div>
                          <span class="name">
                            <strong>Sent Amount</strong>
                            <span class="time small">- 0.81729 BCH</span>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div class="notice-icon">
                          <div style={Style}>
                            <FcApproval size={25} />
                          </div>
                        </div>
                        <div>
                          <span class="name">
                            <strong>Recieved Amount</strong>
                            <span class="time small">+ 8,485.44 BCH</span>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="wallet-address">
                    <h4 class="w-text mt-0">Bitcoin Cash Wallet Address</h4>
                    <div class="form-row-group with-icons">
                      <div class="form-row no-padding">
                        <i class="cc LTC text-muted"></i>
                        <input
                          type="text"
                          name="aaa"
                          class="form-element"
                          value={bchp}
                        />
                      </div>
                    </div>
                    <QRCode value={bchp} class="mt-15" />
                    <h4>This is your Wallet ID</h4>
                    <p class="g-text mb-0">
                      Scan This crediential to send or exchange crypto assets
                      with just scaning this code
                    </p>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <div class="expandable-header purp">
                  <SiLitecoin
                    style={{ marginRight: "10px" }}
                    size={40}
                    color="white"
                  />
                  <h3 class="list-title">Litecoin Wallet</h3>
                  <FaChevronDown class="list-arrow" size={30} color="white" />
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <h4>Recent Litecoin Transactions</h4>
                  <div class="recent-trans">
                    <ul class="dropdown-menu-list list-unstyled no-mb">
                      <li>
                        <div class="notice-icon">
                          <div style={Style}>
                            <FcDepartment size={25} />
                          </div>
                        </div>
                        <div>
                          <span class="name">
                            <strong>Recieved Amount</strong>
                            <span class="time small">+ 3.39498 LTC</span>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div class="notice-icon">
                          <div style={Style}>
                            <FcExport size={25} />
                          </div>
                        </div>
                        <div>
                          <span class="name">
                            <strong>Sent Amount</strong>
                            <span class="time small">- 0.81729 LTC</span>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div class="notice-icon">
                          <div style={Style}>
                            <FcApproval size={25} />
                          </div>
                        </div>
                        <div>
                          <span class="name">
                            <strong>Recieved Amount</strong>
                            <span class="time small">+ BTC8,485.44 LTC</span>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="wallet-address">
                    <h4 class="w-text mt-0">Litecoin Wallet Address</h4>
                    <div class="form-row-group with-icons">
                      <div class="form-row no-padding">
                        <i class="cc LTC text-muted"></i>
                        <input
                          type="text"
                          name="aaa"
                          class="form-element"
                          value={ltcp}
                        />
                      </div>
                    </div>
                    <QRCode value={ltcp} class="mt-15" />
                    <h4>This is your Wallet ID</h4>
                    <p class="g-text mb-0">
                      Scan This crediential to send or exchange crypto assets
                      with just scaning this code
                    </p>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </section>
        <BuySellDiv />
        <RecentTransaction />
        <Footer />
      </main>
    </div>
  );
}

import React from "react";
import BuySellDiv from "./BuySellDiv";
import CryotoTradeCoin from "./CryotoTradeCoin";
import Footer from "./Footer";
import { Tabs, Tab, TabContent } from "react-bootstrap";
import RecentTransaction from "./RecentTransaction";
import { TradingMarket } from "./TradingMarket";

export default function CryptoTradeContent() {
  return (
    <div style={{ marginTop: "20px" }}>
      <div class="dash-balance">
        <div class="dash-content relative">
          <h3 class="w-text">Trading Market</h3>
          <div class="notification">
            <a href="#">
              <i class="fa fa-plus"></i>
            </a>
          </div>
        </div>
      </div>

      <TradingMarket />
      <BuySellDiv />
      <div style={{ height: "50px" }}></div>
      <div
        style={{
          padding: "15px",
          boxShadow: "",
        }}
      >
        <Tabs
          fill
          className="text-center bg-light"
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
        >
          <Tab className="bg-light" eventKey="home" title="All">
            <TabContents />
          </Tab>
          <Tab className="bg-light" eventKey="profile" title="Buy">
            <TabContents />
          </Tab>
          <Tab className="bg-light" eventKey="contact" title=" Sell">
            <TabContents />
          </Tab>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}

const TabContents = () => {
  return (
    <ul class="transaction-list list-unstyled">
      <li>
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <img
              class="img-xs"
              src="./assets/img/content/s1.png"
              alt="coin image"
            />
            <div class="ml-10">
              <h4 class="coin-name">Bitcoin</h4>
              <small class="text-muted">Buy Order</small>
            </div>
          </div>
          <div>
            <small class="d-block mb-0 txt-green">0.94853</small>
            <small class="text-muted d-block">$2,748.94</small>
          </div>
        </div>
      </li>
      <li>
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <img
              class="img-xs"
              src="./assets/img/content/s2.png"
              alt="coin image"
            />
            <div class="ml-10">
              <h4 class="coin-name">Ethereum</h4>
              <small class="text-muted">Sell Order</small>
            </div>
          </div>
          <div>
            <small class="d-block mb-0 txt-red">1.84993</small>
            <small class="text-muted d-block">$3,748.94</small>
          </div>
        </div>
      </li>
      <li>
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <img
              class="img-xs"
              src="./assets/img/content/s3.png"
              alt="coin image"
            />
            <div class="ml-10">
              <h4 class="coin-name">Ripple</h4>
              <small class="text-muted">Transaction</small>
            </div>
          </div>
          <div>
            <small class="d-block mb-0 txt-blue">500.348</small>
            <small class="text-muted d-block">$239.48</small>
          </div>
        </div>
      </li>
      <li>
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <img
              class="img-xs"
              src="./assets/img/content/s1.png"
              alt="coin image"
            />
            <div class="ml-10">
              <h4 class="coin-name">Dashcoin</h4>
              <small class="text-muted">Buy Order</small>
            </div>
          </div>
          <div>
            <small class="d-block mb-0 txt-green">1.23347</small>
            <small class="text-muted d-block">$239.94</small>
          </div>
        </div>
      </li>
    </ul>
  );
};

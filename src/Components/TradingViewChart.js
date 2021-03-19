import React, { Component } from "react";

class TradingViewChart extends React.PureComponent {
  constructor(props) {
    super(props);
    this._ref = React.createRef();
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol:
        this.props.name === "btc"
          ? "COINBASE:BTCUSD"
          : this.props.name === "eth"
          ? "COINBASE:ETHUSD"
          : this.props.name === "ltc"
          ? "COINBASE:LTCUSD"
          : "COINBASE:BCHUSD",
      width: "100%",
      height: "100%",
      defaultColumn: "overview",
      screener_type: "crypto_mkt",
      displayCurrency: "BTC",
      colorTheme: "light",
      locale: "en",
    });
    this._ref.current.appendChild(script);
    // document.getElementsByTagName("a").removeAttribute("href");
  }
  render() {
    return (
      <div
        class="tradingview-widget-container container-fluid d-flex justify-content-center "
        ref={this._ref}
      >
        <div class="tradingview-widget-container__widget "></div>
      </div>
    );
  }
}

export default TradingViewChart;

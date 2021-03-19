import React from "react";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiLitecoin } from "react-icons/si";

export default function RecentTransaction() {
  return (
    <div>
      <section className="trans-sec container-fluid">
        <h4 className="title-main mt-0 ">Recent Transactions</h4>
        <ul className="transaction-list list-unstyled mb-0">
          <li>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <FaBitcoin size={50} color="orange" />
                <div className="ml-10">
                  <h4 className="coin-name">Bitcoin</h4>
                  <small className="text-muted">
                    08-24 <span className="ml-10">20.04PM</span>
                  </small>
                </div>
              </div>
              <div>
                <small className="d-block mb-0 txt-green">+0.94853</small>
                <small className="text-muted d-block">$2,748.94</small>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <FaEthereum size={50} color="grey" />
                <div className="ml-10">
                  <h4 className="coin-name">Ethereum</h4>
                  <small className="text-muted">
                    08-24 <span className="ml-10">20.04PM</span>
                  </small>
                </div>
              </div>
              <div>
                <small className="d-block mb-0 txt-green">+1.84993</small>
                <small className="text-muted d-block">$3,748.94</small>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <FaBitcoin size={50} color="green" />
                <div className="ml-10">
                  <h4 className="coin-name">BitcoinCash</h4>
                  <small className="text-muted">
                    08-24 <span className="ml-10">20.04PM</span>
                  </small>
                </div>
              </div>
              <div>
                <small className="d-block mb-0 txt-red">-23.84523</small>
                <small className="text-muted d-block">$1,493.03</small>
              </div>
            </div>
          </li>
          <li className="mb-0">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <SiLitecoin size={50} color="silver" />
                <div className="ml-10">
                  <h4 className="coin-name">Litecoin</h4>
                  <small className="text-muted">
                    08-24 <span className="ml-10">20.04PM</span>
                  </small>
                </div>
              </div>
              <div>
                <small className="d-block mb-0 txt-green">+500.347</small>
                <small className="text-muted d-block">$239.94</small>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

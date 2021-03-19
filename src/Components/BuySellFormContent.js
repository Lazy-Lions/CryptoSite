import { Modal } from "react-bootstrap";
import React, { useState } from "react";

export default function BuySellFormContent({ name, margin }) {
  const [showOrderModal, setShowOrderModal] = useState(false);
  return (
    <section>
      <h4 class="title-main">Place {name} Order</h4>
      <div class="wallet-address">
        <h3 class="w-text mb-30 mt-0">{name} Cryptocurrency</h3>

        <div class="txt-left">
          <label class="g-text">Select Cryptocurrency</label>
          <div class="form-row-group with-icons">
            <div class="form-row no-padding">
              <img src="./assets/img/content/1.png" class="icon" alt="" />

              <select class="form-element">
                <option value="" selected>
                  Bitcoin
                </option>
                <option value="1">Ethereum</option>
                <option value="1">Dashcoin</option>
                <option value="1">Ripple</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-mini-divider"></div>

        <div class="txt-left">
          <label class="g-text">Select Payment Method</label>
          <div class="form-row-group with-icons">
            <div class="form-row no-padding">
              <img src="./assets/img/content/3.png" class="icon" alt="" />

              <select class="form-element">
                <option value="" selected>
                  Mastercard
                </option>
                <option value="1">Paypal</option>
                <option value="1">Mastercard</option>
                <option value="1">Bank Account</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-mini-divider"></div>

        <div class="txt-left">
          <label class="g-text">Wallet Address</label>
          <div class="form-row-group with-icons">
            <div class="form-row no-padding">
              <img src="./assets/img/content/2.png" class="icon" alt="" />
              <input
                type="text"
                name="aaa"
                class="form-element"
                value="XAHS-AKDLAD4523AAI"
              />
            </div>
          </div>
        </div>

        <div class="form-mini-divider"></div>

        <div class="txt-left calc-crr">
          <label class="g-text">USD Amount</label>
          <div class="form-row-group with-icons">
            <div class="form-row no-padding">
              <img src="./assets/img/content/2.png" class="icon" alt="" />
              <input
                type="text"
                name="aaa"
                class="form-element"
                placeholder="1 usd"
              />
            </div>
          </div>
        </div>
        <div class="txt-left calc-crr-mid">
          <img src="./assets/img/content/exchange.png" class="mt-15" alt="" />
        </div>
        <div class="txt-left calc-crr">
          <label class="g-text">BTC Amount</label>
          <div class="form-row-group with-icons">
            <div class="form-row no-padding">
              <img src="img/content/2.png" class="icon" alt="" />
              <input
                type="text"
                name="aaa"
                class="form-element"
                placeholder="0.0001"
              />
            </div>
          </div>
        </div>

        <div class="form-mini-divider"></div>

        <div>
          <a
            href="#"
            class="button circle block yellow"
            data-popup="buyOrder"
            id="getCheckedButton1"
            onClick={() => setShowOrderModal(true)}
          >
            Place {name} Order
          </a>
        </div>
      </div>

      <Modal
        size="xl"
        show={showOrderModal}
        onHide={() => setShowOrderModal(false)}
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div class="popup-content txt-center">
            <img
              src="./assets/img/content/crypto-buy.png"
              class="img-buy"
              alt=""
            />

            <h5 class="txt-blue mb-0">Congratulations</h5>
            <h4 class="mt-10 mb-10">Your Order Placed Successfully</h4>
            <p class="txt-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              ducimus aliquid dignissimos voluptate
            </p>
            <ul class="transaction-details list-unstyled">
              <li>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <div class="tran-details txt-left">
                      <h4 class="coin-name">Desposite To</h4>
                      <small class="text-muted">
                        <span class="txt-turquoise">Ethereum</span> *** ***RS4
                      </small>
                    </div>
                  </div>
                  <div>
                    <small class="d-block mb-0">
                      <span class="text-muted">Status</span>
                    </small>
                    <small class="txt-green d-block">Completed</small>
                  </div>
                </div>
              </li>
              <li>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <div class="tran-details txt-left">
                      <h4 class="coin-name">Payment Method</h4>
                      <small class="text-muted">
                        <span class="txt-turquoise">VISA</span> *** *** 3847
                      </small>
                    </div>
                  </div>
                  <div>
                    <small class="d-block mb-0">
                      Fee <span class="txt-turquoise">$5.7</span>{" "}
                    </small>
                    <small class="txt-green d-block">
                      Monday <span class="txt-turquoise">12:24PM</span>
                    </small>
                  </div>
                </div>
              </li>
            </ul>
            <div>
              <a href="#" class="more-btn mb-10">
                Confirm Order
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}

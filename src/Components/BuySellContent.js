import React, { useState } from "react";
import {
  FaAddressBook,
  FaDollarSign,
  FaPlus,
  FaSuitcase,
  FaUser,
} from "react-icons/fa";
import BuySellFormContent from "./BuySellFormContent";
import Footer from "./Footer";
import RecentTransaction from "./RecentTransaction";
import { Modal, Button } from "react-bootstrap";
import { FcCurrencyExchange } from "react-icons/fc";
import { Receive, Send } from "../Pages/SendReceive";
import { Link } from "react-router-dom";

export default function BuySellContent() {
  const Style = {
    position: "absolute",
    left: "10px",
    top: "5px",
  };

  const [show, setShow] = useState(false);

  return (
    <main style={{ marginTop: "20px" }} class="margin mb-5">
      <div class="dash-balance">
        <div class="dash-content relative">
          <h3 class="w-text">Buy & Sell</h3>
          <div class="notification">
            <a href="#">
              <FaPlus />
            </a>
          </div>
        </div>
      </div>
      <section class="bal-section container-fluid">
        <div id="content">
          <div id="content-body">
            <div class="content-head">
              <div class="d-flex align-items-center">
                <div class="d-flex flex-grow">
                  <div class="mr-auto">
                    <p class="mb-0">Total Balance</p>
                  </div>
                  <div class="ml-auto align-self-end">
                    <h3 class="text-muted mt-0 mb-0">$9,938.43</h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-row">
              <div class="content-col">
                <Send />
                <span>Send</span>
              </div>
              <div class="content-col">
                <Receive />
                <span>Recieve </span>
              </div>
              <div class="content-col">
                <Link className="serv-icon">
                  <FcCurrencyExchange size={50} />
                </Link>
                <span>Exchange </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="container-fluid o-hidden">
        <h4 class="title-main">Send Cryptocoin to</h4>
        <div class="swiper-recievers">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div
                class="money-receiver add"
                onClick={() => {
                  setShow(true);
                }}
              >
                <FaPlus size={40} />
                <h4>Add New</h4>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="money-receiver">
                <img src="./assets/img/content/avatar/avatar-1.png" alt="" />
                <h4>D. Fary</h4>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="money-receiver">
                <img src="./assets/img/content/avatar/avatar-2.png" alt="" />
                <h4>A. jone</h4>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="money-receiver">
                <img src="./assets/img/content/avatar/avatar-3.png" alt="" />
                <h4>M. Nour</h4>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="money-receiver">
                <img src="./assets/img/content/avatar/avatar-4.png" alt="" />
                <h4>A. Jack</h4>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="money-receiver">
                <img src="./assets/img/content/avatar/avatar-5.png" alt="" />
                <h4>A. jone</h4>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="money-receiver">
                <img src="./assets/img/content/avatar/avatar-5.png" alt="" />
                <h4>A. jone</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BuySellFormContent name="Buy" />
      <BuySellFormContent name="Sell" />
      <RecentTransaction />
      <Footer />

      <Modal size="xl" show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Receiver</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="popup-header">
            <span class="popup-close" data-dismiss="true">
              <i class="fa fa-times"></i>
            </span>
          </div>
          <div class="popup-content">
            <div class="form-row-group with-icons">
              <div class="form-row no-padding">
                <div style={Style}>
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="aaa"
                  class="form-element"
                  placeholder="Receiver Name"
                />
              </div>
            </div>

            <div class="form-mini-divider"></div>

            <div class="form-row-group with-icons">
              <div class="form-row no-padding">
                <div style={Style}>
                  <FaSuitcase />
                </div>
                <input
                  type="text"
                  name="aaa"
                  class="form-element"
                  placeholder="Wallet Address"
                />
              </div>
            </div>

            <div class="form-mini-divider"></div>

            <div class="form-row-group with-icons">
              <div class="form-row no-padding">
                <div style={Style}>
                  <FaDollarSign />
                </div>
                <select class="form-element">
                  <option value="" selected>
                    Wallet Currency
                  </option>
                  <option value="1">Bitcoin</option>
                  <option value="1">Ethereum</option>
                  <option value="1">Litecoin</option>
                </select>
              </div>
            </div>

            <div class="form-mini-divider"></div>

            <div class="form-row-group with-icons">
              <div class="form-row no-padding">
                <div style={Style}>
                  <FaAddressBook />
                </div>
                <textarea
                  class="form-element"
                  placeholder="Message"
                  rows="6"
                ></textarea>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div class="popup-footer">
            <button class="button orange">Add Now</button>
          </div>
        </Modal.Footer>
      </Modal>
    </main>
  );
}

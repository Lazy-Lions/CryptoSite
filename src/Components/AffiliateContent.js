import React from "react";
import Footer from "./Footer";
import { FaPlus, FaCopy } from "react-icons/fa";
export default function AffiliateContent() {
  return (
    <div style={{ marginTop: "20px" }}>
      <main class="margin mt-0">
        <div class="dash-balance">
          <div class="dash-content relative">
            <h3 class="w-text">Affiliate System</h3>
            <div class="notification">
              <FaPlus size={20} color="white" />
            </div>
          </div>
        </div>

        <section class="bal-section container-fluid">
          <div class="ref-card c1">
            <div class="d-flex align-items-center">
              <div class="d-flex flex-grow">
                <div class="mr-auto">
                  <h1 class="b-val"> $1,249.03 </h1>
                  <p class="g-text mb-10">Total Referal Earnings</p>
                  <div class="badge badge-pill">
                    {" "}
                    This month 18.98%{" "}
                    <i class="txt-green fa fa-arrow-up ml-10"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ref-card c2">
            <div class="d-flex align-items-center">
              <div class="d-flex flex-grow">
                <div class="mr-auto">
                  <h1 class="b-val"> $336,32 </h1>
                  <p class="g-text mb-10">Pending Earnings</p>
                  <div class="badge badge-pill">
                    {" "}
                    This month 11.39%{" "}
                    <i class="txt-green fa fa-arrow-up ml-10"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ref-card c3 mb-0">
            <div class="d-flex align-items-center">
              <div class="d-flex flex-grow">
                <div class="mr-auto">
                  <h1 class="b-val"> $1,249.03 </h1>
                  <p class="g-text mb-10">Ready to Payout</p>
                  <div class="badge badge-pill">
                    {" "}
                    This month 07.44%{" "}
                    <i class="txt-green fa fa-arrow-up ml-10"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="container-fluid">
          <div id="content">
            <h4 class="title-main">Affiliate Statistics</h4>
            <div class="c-panel pl-0">
              <div class="row align-items-center">
                <div class="col-12">
                  <div class="advertising-wrapper">
                    <div id="barGraph"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="container-fluid refer mt-15">
          <div id="cont">
            <div id="content-body">
              <div class="content-head purp">
                <div class="d-flex align-items-center">
                  <div class="d-flex flex-grow">
                    <div class="mr-auto">
                      <h3 class="w-text mt-0 mb-0">Refer Fiends & Earn</h3>
                      <p class="mb-0 g-text">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div class="ref-bouns">
                      <h3 class="mt-0 mb-5">$20</h3>
                      <span>Bouns</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ref-content">
                <h4 class="mt-0">Your Referal Link</h4>
                <div class="form-row-group relative">
                  <div class="form-row no-padding">
                    <input
                      type="text"
                      name="aaa"
                      class="form-element"
                      value="https://www.examplecom/ref=?6823"
                    />
                    <a href="#" class="ref-copy">
                      <FaCopy size={20} color="white" />
                    </a>
                  </div>
                </div>
                <h4>Share Referal Link</h4>
                <a href="#" class="button circle block orange">
                  Facebook
                </a>
                <a href="#" class="button circle block blue">
                  Twitter
                </a>
                <a href="#" class="button circle block red">
                  Google Plus
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="container-fluid">
          <div class="resources-card-wrapper">
            <div class="ref-statistics mr-10">
              <img
                src="./assets/img/content/ref-icon1.png"
                class="img-xs"
                alt=""
              />
              <div class="d-flex flex-column ml-md-2">
                <h4 class="mt-10 mb-5 ">578 Click</h4>
                <p class="text-muted font-weight-medium">Referral Clicks</p>
              </div>
            </div>
            <div class="ref-statistics ml-10">
              <img
                src="./assets/img/content/ref-icon2.png"
                class="img-xs"
                alt=""
              />
              <div class="d-flex flex-column ml-md-2">
                <h4 class="mt-10 mb-5 ">378 Signup</h4>
                <p class="text-muted font-weight-medium">Successful Signup</p>
              </div>
            </div>
          </div>
          <div class="resources-card-wrapper">
            <div class="ref-statistics mr-10">
              <img
                src="./assets/img/content/ref-icon3.png"
                class="img-xs"
                alt=""
              />
              <div class="d-flex flex-column ml-md-2">
                <h4 class="mt-10 mb-5 ">$1,283.28</h4>
                <p class="text-muted font-weight-medium">Creadit Earned</p>
              </div>
            </div>
            <div class="ref-statistics ml-10">
              <img
                src="./assets/img/content/ref-icon4.png"
                class="img-xs"
                alt=""
              />
              <div class="d-flex flex-column ml-md-2">
                <h4 class="mt-10 mb-5 ">0.92823 BTC</h4>
                <p class="text-muted font-weight-medium">Crypto Exchanged</p>
              </div>
            </div>
          </div>
        </section>

        <section class="container-fluid">
          <h4 class="title-main mt-5">Recent Refered Members</h4>
          <ul class="transaction-list list-unstyled">
            <li>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <span class="member-img">
                    <img src="./assets/img/content/avatar/user-1.png" alt="" />{" "}
                    alt=""
                  </span>
                  <div class="ml-10">
                    <h4 class="coin-name">Member ID 2u47</h4>
                    <small class="text-muted">
                      Bonus <span class="txt-turquoise">$23.23</span> USD
                    </small>
                  </div>
                </div>
                <div>
                  <small class="d-block mb-0 txt-green">
                    +0.94846 <span class="text-muted">BTC</span>
                  </small>
                  <small class="text-muted d-block">$2,748.94</small>
                </div>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <span class="member-img">
                    <img src="./assets/img/content/avatar/user-2.png" alt="" />
                  </span>
                  <div class="ml-10">
                    <h4 class="coin-name">Member ID wq88</h4>
                    <small class="text-muted">
                      Bonus <span class="txt-turquoise">$37.23</span> USD
                    </small>
                  </div>
                </div>
                <div>
                  <small class="d-block mb-0 txt-green">
                    +1.84993 <span class="text-muted">ETH</span>
                  </small>
                  <small class="text-muted d-block">$3,748.94</small>
                </div>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <span class="member-img">
                    <img src="./assets/img/content/avatar/user-3.png" alt="" />
                  </span>
                  <div class="ml-10">
                    <h4 class="coin-name">Member ID 16g2</h4>
                    <small class="text-muted">
                      Bonus <span class="txt-turquoise">$46,34</span> USD
                    </small>
                  </div>
                </div>
                <div>
                  <small class="d-block mb-0 txt-green">
                    -23.84523 <span class="text-muted">LTC</span>
                  </small>
                  <small class="text-muted d-block">$1,493.03</small>
                </div>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <span class="member-img">
                    <img src="./assets/img/content/avatar/user-4.png" alt="" />
                  </span>
                  <div class="ml-10">
                    <h4 class="coin-name">Member ID 378y</h4>
                    <small class="text-muted">
                      Bonus <span class="txt-turquoise">$58,48</span> USD
                    </small>
                  </div>
                </div>
                <div>
                  <small class="d-block mb-0 txt-green">
                    +500.347 <span class="text-muted">XRP</span>
                  </small>
                  <small class="text-muted d-block">$239.94</small>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <Footer />
      </main>
    </div>
  );
}

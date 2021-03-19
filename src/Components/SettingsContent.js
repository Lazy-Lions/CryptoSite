import React from "react";
import { toggleSidebar } from "../states/SideBarToggle";
import { useRecoilState } from "recoil";
import { FaCheckCircle } from "react-icons/fa";
import { Checkbox } from "semantic-ui-react";

export default function SettingsContent() {
  const [toggleSidebarVal, setToggleSidebar] = useRecoilState(toggleSidebar);
  return (
    <div>
      <header>
        <a class="go-back-link" href="javascript:history.back();">
          <i class="fa fa-arrow-left"></i>
        </a>
        <h1 class="page-title">Crypto Settings</h1>
        <div
          class={
            !toggleSidebarVal ? "navi-menu-button" : "navi-menu-button focused"
          }
          onClick={() => {
            setToggleSidebar((s) => !s);
          }}
        >
          <em></em>
          <em></em>
          <em></em>
        </div>
      </header>
      <main>
        <section class="crypto container-fluid">
          <h4 class="title-main">Card Settings</h4>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="card-content card2">
                  <FaCheckCircle color="green" size={30} />
                  <h3 class="card-no mb-10">
                    <span>****</span>
                    <span>****</span>
                    <span>****</span>
                    <span>2864</span>
                  </h3>
                  <div class="card-info d-flex">
                    <div class="holder-info">
                      <small class="c-info">Card Holder</small>
                      <h6 class="c-name">Smith Wright</h6>
                    </div>
                    <div class="expire-info">
                      <small class="c-info">Expires</small>
                      <h6 class="c-name">08/22</h6>
                    </div>
                    <div class="cvv-info">
                      <small class="c-info">CVV</small>
                      <h6 class="c-name">826</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="card-content card1">
                  <FaCheckCircle color="green" size={30} />
                  <h3 class="card-no mb-10">
                    <span>****</span>
                    <span>****</span>
                    <span>****</span>
                    <span>2864</span>
                  </h3>
                  <div class="card-info d-flex">
                    <div class="holder-info">
                      <small class="c-info">Card Holder</small>
                      <h6 class="c-name">Smith Wright</h6>
                    </div>
                    <div class="expire-info">
                      <small class="c-info">Expires</small>
                      <h6 class="c-name">08/22</h6>
                    </div>
                    <div class="cvv-info">
                      <small class="c-info">CVV</small>
                      <h6 class="c-name">826</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="card-content card3">
                  <FaCheckCircle color="green" size={30} />
                  <h3 class="card-no mb-10">
                    <span>****</span>
                    <span>****</span>
                    <span>****</span>
                    <span>2864</span>
                  </h3>
                  <div class="card-info d-flex">
                    <div class="holder-info">
                      <small class="c-info">Card Holder</small>
                      <h6 class="c-name">Smith Wright</h6>
                    </div>
                    <div class="expire-info">
                      <small class="c-info">Expires</small>
                      <h6 class="c-name">08/22</h6>
                    </div>
                    <div class="cvv-info">
                      <small class="c-info">CVV</small>
                      <h6 class="c-name">826</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="container-fluid">
          <form id="settingsForm">
            <div class="form-divider"></div>
            <div class="form-label-divider">
              <span>Edit Setting</span>
            </div>
            <div class="form-divider"></div>

            <div class="list-box">
              <div class="list-item">
                <img src="./assets/img/content/coin1.png" alt="" />
                <em class="seperate"></em>
                <span class="list-item-title">
                  BTC <small class="text-muted">(Bitcoin)</small>
                </span>

                <div class="sweet-check">
                  <Checkbox toggle />
                </div>
              </div>
            </div>

            <div class="list-box">
              <div class="list-item">
                <img src="./assets/img/content/coin2.png" alt="" />
                <em class="seperate"></em>
                <span class="list-item-title">
                  ETH <small class="text-muted">(Ethereum)</small>
                </span>

                <div class="sweet-check">
                  <Checkbox toggle />
                </div>
              </div>
            </div>

            <div class="list-box">
              <div class="list-item">
                <img src="./assets/img/content/coin3.png" alt="" />
                <em class="seperate"></em>
                <span class="list-item-title">
                  DASH <small class="text-muted">(Dashcoin)</small>
                </span>
                <div class="sweet-check">
                  <Checkbox toggle />
                </div>
              </div>
            </div>

            <div class="list-box">
              <div class="list-item">
                <img src="./assets/img/content/coin4.png" alt="" />
                <em class="seperate"></em>
                <span class="list-item-title">
                  XRP <small class="text-muted">(Ripple)</small>
                </span>

                <div class="sweet-check">
                  <Checkbox toggle />
                </div>
              </div>
            </div>

            <div class="list-box">
              <div class="list-item">
                <img src="./assets/img/content/coin5.png" alt="" />
                <em class="seperate"></em>
                <span class="list-item-title">
                  BCH <small class="text-muted">(Bitcoincash)</small>
                </span>

                <div class="sweet-check">
                  <Checkbox toggle />
                </div>
              </div>
            </div>

            <div class="list-box">
              <div class="list-item">
                <img src="./assets/img/content/coin6.png" alt="" />
                <em class="seperate"></em>
                <span class="list-item-title">
                  DOGE <small class="text-muted">(Dogecoin)</small>
                </span>

                <div class="sweet-check">
                  <Checkbox toggle />
                </div>
              </div>
            </div>

            <div class="list-box">
              <div class="list-item">
                <img src="./assets/img/content/coin7.png" alt="" />
                <em class="seperate"></em>
                <span class="list-item-title">
                  XMR <small class="text-muted">(Monero)</small>
                </span>

                <div class="sweet-check">
                  <Checkbox toggle />
                </div>
              </div>
            </div>

            <div class="form-divider"></div>
            <div class="form-row mb-70">
              <a
                href="#"
                class="button circle block orange"
                id="getCheckedButton"
              >
                Add New Asset
              </a>
            </div>
            <div class="form-divider"></div>
          </form>
        </div>
      </main>
    </div>
  );
}

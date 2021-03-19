import React from "react";
import { useRecoilState } from "recoil";
import { toggleNotification } from "../states/SideBarToggle";
import { FaCheck, FaClock, FaRegClock, FaTimes } from "react-icons/fa";

export default function NotificationBox() {
  const [toggleNotificationVal, setToggleNotification] = useRecoilState(
    toggleNotification
  );
  return (
    <div
      class="search-form"
      style={{ display: toggleNotificationVal ? "block" : "none" }}
    >
      <span
        class="close-search-form"
        onClick={() => {
          setToggleNotification((s) => !s);
        }}
      >
        <FaTimes size={15} color="white"/>
      </span>
      <form>
        <div class="search-input">
          <input
            type="text"
            name="q"
            class="form-element"
            placeholder="Search..."
          />
          <button type="submit" class="search-input-btn">
            <FaTimes size={15} color="white"/>
          </button>
        </div>
      </form>
      <ul class="notification-list list-unstyled">
        <li>
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <div class="">
                <h5 class="coin-name">You have 3 notifications</h5>
              </div>
            </div>
            <div>
              <a href="#">
                <small class="text-muted d-block">mark all as read</small>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <div class="notice-icon available">
                <FaCheck size={15} color="white" />
              </div>
              <div class="ml-10">
                <h4 class="coin-name">Successful transaction 0.01 BTC</h4>
                <small class="text-muted">15 min ago</small>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <div class="notice-icon away">
                <FaRegClock size={15} color="white" />
              </div>
              <div class="ml-10">
                <h4 class="coin-name">4 of Pending Transactions!</h4>
                <small class="text-muted"> 12 hours ago</small>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <div class="notice-icon busy">
                <FaTimes size={15} color="white" />
              </div>
              <div class="ml-10">
                <h4 class="coin-name">Cancelled Order of 200 ICO</h4>
                <small class="text-muted">15 Feb - 08:34</small>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <div class="notice-icon available">
                <FaCheck size={15} color="white" />
              </div>
              <div class="ml-10">
                <h4 class="coin-name">Great Speed Notify of 1.34 LTC</h4>
                <small class="text-muted">24 jan - 20:43</small>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <a href="#" class="text-muted">
                Read all notifications
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

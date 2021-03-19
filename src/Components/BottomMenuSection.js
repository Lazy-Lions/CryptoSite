import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export default function BottomMenuSection() {
  return (
    <div class="bottom-menu-section">
      <ul class="bottom-menu list-unstyled list-inline">
        <li>
          <Link to="/">
            <img src="./assets/img/content/l1.png" alt="" />
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to="/wallet">
            <img src="./assets/img/content/l2.png" alt="" />
            <p>Wallet</p>
          </Link>
        </li>
        <li>
          <a class="b-m-pluse" href="#">
            <FaPlus />
          </a>
        </li>
        <li>
          <Link to="/settings">
            <img src="./assets/img/content/l3.png" alt="" />
            <p>Cards</p>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <img src="./assets/img/content/l4.png" alt="" />
            <p>Profile</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

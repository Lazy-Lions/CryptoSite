import React, { useState } from "react";
import firebase from "firebase";
import fire from "../Components/config/fire";
import "firebase/auth";
import { useRecoilState } from "recoil";
import { Button } from "react-bootstrap";
import { Modal } from "semantic-ui-react";
import { toggleSidebar } from "../states/SideBarToggle";
import { FaAngleDown, FaSignOutAlt } from "react-icons/fa";
import { Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Login, ForgotPassword } from "../Pages/Login";
import {
  FcBriefcase,
  FcBullish,
  FcBusinessman,
  FcMindMap,
  FcOrgUnit,
  FcSettings,
} from "react-icons/fc";
import { GiBuyCard } from "react-icons/gi";

export default function MenuNavigation() {
  const Style = {
    textAlign: "center",
    cursor: "pointer",
    fontWeight: "900",
    color: "blue",
  };
  const [toggleSidebarVal, setToggleSidebar] = useRecoilState(toggleSidebar);
  const [firstOpen, setFirstOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);
  console.log(toggleSidebarVal);
  const logout = () => {
    fire.auth().signOut();
  };
  //class={toggleSidebarVal ? "nav-menu opened" : "nav-menu"}
  return (
    <div className={toggleSidebarVal ? "nav-menu-opened" : "nav-menu"}>
      <nav class="menu ">
        <div class="nav-container">
          <ul class="main-menu">
            <li class="">
              <a href="wallet.html">
                <img src="./assets/img/content/icons/2.png" alt="" />
                <strong class="special"></strong>{" "}
              </a>
            </li>
            <li class="active">
              <Link to="/" onClick={() => setToggleSidebar(false)}>
                <FcOrgUnit size={30} />
                <strong class="special">Dashboard</strong>{" "}
              </Link>
            </li>
            <li class="">
              <Link to="/wallet" onClick={() => setToggleSidebar(false)}>
                <FcBriefcase size={30} />
                <strong class="special">My Wallet</strong>{" "}
              </Link>
            </li>
            <li class="">
              <Link to="/trading" onClick={() => setToggleSidebar(false)}>
                <FcBullish size={30} />
                <strong class="special">Crypto Trade</strong>{" "}
              </Link>
            </li>
            <li class="">
              <Link to="/buy&sell" onClick={() => setToggleSidebar(false)}>
                <GiBuyCard size={30} color="orange" />
                <strong class="special">Buy & sell</strong>{" "}
              </Link>
            </li>
            <li class="">
              <Link to="/profile" onClick={() => setToggleSidebar(false)}>
                <FcBusinessman size={30} />
                <strong class="special">Trader Profile</strong>{" "}
              </Link>
            </li>
            <li class="">
              <Link to="/affiliate" onClick={() => setToggleSidebar(false)}>
                <FcMindMap size={30} />
                <strong class="special">Affiliate System</strong>{" "}
              </Link>
            </li>
            <li class="">
              <Link to="/settings" onClick={() => setToggleSidebar(false)}>
                <FcSettings size={30} />
                <strong class="special">Settings</strong>{" "}
              </Link>
            </li>
            <li class="">
              <Link
                onClick={() => {
                  logout();
                  setToggleSidebar(false);
                }}
              >
                <FaSignOutAlt size={30} color="red" />
                <strong class="special">Log Out</strong>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

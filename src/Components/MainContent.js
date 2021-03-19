import React, { useEffect, useState } from "react";
import fire from "../Components/config/fire";
import "firebase/auth";
import firebase from "firebase";
import RecentTransaction from "./RecentTransaction";
import TradingViewChart from "./TradingViewChart";
import {
  FcBarChart,
  FcDoughnutChart,
  FcCurrencyExchange,
} from "react-icons/fc";
import { GiBuyCard } from "react-icons/gi";

import Footer from "./Footer";
import Img from "./img/Avatar.png";
import { Receive, Send } from "../Pages/SendReceive";
import { Link } from "react-router-dom";

export default function MainContent() {
  const [image, setImage] = useState("");
  useEffect(() => {
    var id = fire.auth().currentUser.uid;
    firebase
      .database()
      .ref(`User_Images/${id}/images`)
      .once("value")
      .then((snapshot) => {
        setImage(snapshot.val() && snapshot.val().Image);
      });
  }, [setImage]);
  return (
    <div className="margin mt-0">
      <div className="dash-balance">
        <div className="d-flex align-items-center mt-30">
          <div className="d-flex flex-grow">
            <div className="mr-auto">
              <h1 className="b-val"> $2,589.50 </h1>
              <p className="g-text mb-0">Total Balance</p>
            </div>
            <div className="ml-auto align-self-end">
              <Link to="/profile" className="profile-av">
                <img src={image || Img} />
              </Link>
            </div>
          </div>
        </div>

        <div className="services-bulk">
          <div className="content-row">
            <div className="serv-item">
              <Send />
              <span>Send</span>
            </div>
            <div className="serv-item">
              <Receive />
              <span>Recieve </span>
            </div>
            <div className="serv-item">
              <Link to="/buy&sell" className="serv-icon">
                <GiBuyCard size={50} />
              </Link>
              <span>Buy & Sell </span>
            </div>
            <div className="serv-item">
              <Link className="serv-icon">
                <FcCurrencyExchange size={50} />
              </Link>
              <span>Exchange </span>
            </div>
          </div>
        </div>
      </div>

      <RecentTransaction />
      <section className="container-fluid">
        <div className="content">
          <h4 className="title-main mt-10">Balance Statistics</h4>
          <div className="c-panel pl-0 pt-10 pb-15">
            <TradingViewChart />
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
      <section className="bal-section container-fluid mt-30">
        <h4 className="title-main mt-0">Cryptocoins Balance</h4>
        <div className="resources-card-wrapper">
          <div className="resources-card mr-10">
            <div className="d-flex flex-column flex-md-row">
              <FcBarChart size={70} />
              <div className="d-flex flex-column ml-md-2">
                <p className="text-muted mb-10 font-weight-medium">
                  Total Income
                </p>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "57%" }}
                  ></div>
                </div>
                <h4 className="mt-10 mb-0">$2,748,98</h4>
              </div>
            </div>
          </div>
          <div className="resources-card ml-10">
            <div className="d-flex flex-column flex-md-row">
              <FcDoughnutChart size={70} />
              <div className="d-flex flex-column ml-md-2">
                <p className="text-muted mb-10 font-weight-medium"> Expenses</p>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "67%" }}
                  ></div>
                </div>
                <h4 className="mt-10 mb-0">$1,643.22</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

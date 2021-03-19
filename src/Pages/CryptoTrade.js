import React from "react";
import Header from "../Components/Header";
import NotificationBox from "../Components/NotificationBox";
import BottomMenuSection from "../Components/BottomMenuSection";
import CryptoTradeContent from "../Components/CryptoTradeContent";

export default function CryptoTrade() {
  return (
    <div>
      <Header />
      <NotificationBox />
      <BottomMenuSection />
      <CryptoTradeContent/>
    </div>
  );
}

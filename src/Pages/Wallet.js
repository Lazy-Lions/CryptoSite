import React from "react";
import BottomMenuSection from "../Components/BottomMenuSection";
import Header from "../Components/Header";
import MyWalletContent from "../Components/MyWalletContent";
import NotificationBox from "../Components/NotificationBox";

export default function Wallet() {
  return (
    <div>
      <Header />
      <NotificationBox />
      <BottomMenuSection />
      <MyWalletContent />
    </div>
  );
}

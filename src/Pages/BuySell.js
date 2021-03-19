import React from "react";
import BottomMenuSection from "../Components/BottomMenuSection";
import BuySellContent from "../Components/BuySellContent";
import Header from "../Components/Header";
import NotificationBox from "../Components/NotificationBox";

export default function BuySell() {
  return (
    <div>
      <Header />
      <NotificationBox />
      <BottomMenuSection />
      <BuySellContent/>
    </div>
  );
}

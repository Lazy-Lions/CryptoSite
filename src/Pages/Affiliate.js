import React from "react";
import AffiliateContent from "../Components/AffiliateContent";
import BottomMenuSection from "../Components/BottomMenuSection";
import Header from "../Components/Header";
import NotificationBox from "../Components/NotificationBox";

export default function Affiliate() {
  return (
    <div>
      <Header />
      <NotificationBox />
      <BottomMenuSection />
      <AffiliateContent />
    </div>
  );
}

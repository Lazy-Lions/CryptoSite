import React from "react";
import BottomMenuSection from "../Components/BottomMenuSection";
import Header from "../Components/Header";
import MainContent from "../Components/MainContent";
import NotificationBox from "../Components/NotificationBox";

export default function DashBoard() {
  return (
    <div>
      <Header />
      <NotificationBox />
      <BottomMenuSection />
      <MainContent />
    </div>
  );
}

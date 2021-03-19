import React from "react";
import BottomMenuSection from "../Components/BottomMenuSection";
import Header from "../Components/Header";
import NotificationBox from "../Components/NotificationBox";
import UserProfileContent from "../Components/UserProfileContent";

export default function UserProfile() {
  return (
    <div>
      <Header />
      <NotificationBox />
      <div style={{ height: "20px" }}></div>
      <BottomMenuSection />
      <UserProfileContent />
    </div>
  );
}

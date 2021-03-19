import React from "react";
import { useRecoilState } from "recoil";
import { toggleSidebar, toggleNotification } from "../states/SideBarToggle";

export default function Header() {
  const [toggleSidebarVal, setToggleSidebar] = useRecoilState(toggleSidebar);
  const [toggleNotificationVal, setToggleNotification] = useRecoilState(
    toggleNotification,
  );

  return (
    <div>
      <header class="no-background">
        <div
          class="search-button"
          data-search="open"
          onClick={() => {
            setToggleNotification((s) => !s);
          }}
        >
          <img
            src="./assets/img/content/notification1.png"
            class="not-icon1"
            alt=""
          />
          <img
            src="./assets/img/content/notification2.png"
            class="not-icon2"
            alt=""
          />
        </div>
        <div
          class={
            !toggleSidebarVal ? "navi-menu-button" : "navi-menu-button focused"
          }
          onClick={() => {
            setToggleSidebar((s) => !s);
          }}
        >
          <em></em>
          <em></em>
          <em></em>
        </div>
      </header>
    </div>
  );
}

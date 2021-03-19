import React from "react";
import { toggleSidebar } from "../states/SideBarToggle";
import { useRecoilState } from "recoil";

export default function ForgotPassword() {
  const [toggleSidebarVal, setToggleSidebar] = useRecoilState(toggleSidebar);
  return (
    <div>
      <header>
        <a class="go-back-link" href="javascript:history.back();">
          <i class="fa fa-arrow-left"></i>
        </a>
        <h1 class="page-title">FORGOT PASSWORD</h1>
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
      <main>
        <div class="container-fluid">
          <div class="form-divider"></div>

          <div class="form-row-group with-icons">
            <div class="form-row no-padding">
              <i class="fa fa-envelope"></i>
              <input
                type="email"
                name="aaa"
                class="form-element"
                placeholder="Email address"
              />
            </div>
          </div>

          <div class="form-divider"></div>

          <div class="form-row">
            <a href="#" class="button circle block orange">
              Send me password
            </a>
          </div>

          <div class="d-flex align-items-center justify-content-center mt-15">
            Back to <a href="signup.html">Login</a>
          </div>
        </div>
      </main>
    </div>
  );
}

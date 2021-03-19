import React from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer style={{ marginBottom: "80px" }}>
        <div class="container-fluid">
          <ul>
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaGoogle />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
          </ul>
          <p>Copyright © All Right Reserved</p>
        </div>
      </footer>
    </div>
  );
}

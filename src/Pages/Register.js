import React, { useState, useEffect } from "react";
import firebase from "firebase";
import fire from "../Components/config/fire";
import "firebase/auth";
import { Form, Button } from "react-bootstrap";
import { Modal } from "semantic-ui-react";
import { atom, useRecoilState } from "recoil";
import axios from "axios";
import { toggleSidebar } from "../states/SideBarToggle";
import { Link } from "react-router-dom";
import { Login, ForgotPassword } from "./Login";

export const firstnameState = atom({
  key: "firstname",
  default: "",
});
export const lastnameState = atom({
  key: "lastname",
  default: "",
});
export const emailState = atom({
  key: "email",
  default: "",
});
export const passwordState = atom({
  key: "password",
  default: "",
});
export const btcpublic = atom({
  key: "btcpublic",
  default: "",
});
export const btcprivate = atom({
  key: "btcprivate",
  default: "",
});
export const ethpublic = atom({
  key: "ethpublic",
  default: "",
});
export const ethprivate = atom({
  key: "ethprivate",
  default: "",
});
export const bchpublic = atom({
  key: "bchpublic",
  default: "",
});
export const bchprivate = atom({
  key: "bchprivate",
  default: "",
});
export const ltcpublic = atom({
  key: "ltcpublic",
  default: "",
});
export const ltcprivate = atom({
  key: "ltcprivate",
  default: "",
});

export default function Register() {
  const [toggleSidebarVal, setToggleSidebar] = useRecoilState(toggleSidebar);
  const [btcp, setBtcpublic] = useRecoilState(btcpublic);
  const [btcpr, setBtcprivate] = useRecoilState(btcprivate);
  const [ethp, setEthpublic] = useRecoilState(ethpublic);
  const [ethpr, setEthprivate] = useRecoilState(ethprivate);
  const [bchp, setBchpublic] = useRecoilState(bchpublic);
  const [bchpr, setBchprivate] = useRecoilState(bchprivate);
  const [ltcp, setLtcpublic] = useRecoilState(ltcpublic);
  const [ltcpr, setLtcprivate] = useRecoilState(ltcprivate);
  const [fname, setFname] = useRecoilState(firstnameState);
  const [lname, setLname] = useRecoilState(lastnameState);
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [width, setWidth] = useState(window.innerWidth);
  const [validated, setValidated] = useState(false);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const Style = {
    container: {
      paddingInline: width > 990 ? "10rem" : "3rem",
      paddingBlock: width > 990 ? "5rem" : "2rem",
      alignContent: "center",
      color: "olive",
    },
    header: {
      paddingBlock: "2rem",
    },
    element: {
      backgroundColor: "whitesmoke",
      paddingInline: width > 990 ? "5rem" : "2rem",
      paddingBottom: "2rem",
      borderRadius: "1rem",
      boxShadow: "0 0 18px  #f5f5f5",
    },
  };
  useEffect(() => {
    axios
      .post("http://199.192.16.63/api/create_wallet", { currency: "BTC" })
      .then((res) => {
        setBtcpublic(res.data.result.public);
        setBtcprivate(res.data.result.private);
      })
      .catch((err) => console.log(err));
    axios
      .post("http://199.192.16.63/api/create_wallet", { currency: "ETH" })
      .then((res) => {
        setEthpublic(res.data.result.public);
        setEthprivate(res.data.result.private);
      })
      .catch((err) => console.log(err));
    axios
      .post("http://199.192.16.63/api/create_wallet", { currency: "BCH" })
      .then((res) => {
        setBchpublic(res.data.result.public);
        setBchprivate(res.data.result.private);
      })
      .catch((err) => console.log(err));
    axios
      .post("http://199.192.16.63/api/create_wallet", { currency: "LTC" })
      .then((res) => {
        setLtcpublic(res.data.result.public);
        setLtcprivate(res.data.result.private);
      })
      .catch((err) => console.log(err));
  }, [
    setBtcpublic,
    setBtcprivate,
    setEthpublic,
    setEthprivate,
    setBchpublic,
    setBchprivate,
    setLtcpublic,
    setLtcprivate,
  ]);
  const signUp = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Succesful");
        var id = fire.auth().currentUser.uid;
        firebase
          .database()
          .ref("User_Info/" + id)
          .set({
            Firstname: fname,
            Lastname: lname,
          });
        firebase
          .database()
          .ref("Currency_Info/" + id)
          .set({
            BtcPublic: btcp,
            BtcPrivate: btcpr,
            EthPublic: ethp,
            EthPrivate: ethpr,
            BchPublic: bchp,
            BchPrivate: bchpr,
            LtcPublic: ltcp,
            LtcPrivate: ltcpr,
          });
        firebase
          .database()
          .ref("User_Info/" + id)
          .once("value")
          .then((snapshot) => {
            setFname(snapshot.val() && snapshot.val().Firstname);
          });
      })
      .catch((err) => {
        console.log("Error");
      });
  };
  const [firstOpen, setFirstOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);
  return (
    <div>
      <header>
        <a class="go-back-link" href="javascript:history.back();">
          <i class="fa fa-arrow-left"></i>
        </a>
        <h1 class="page-title">SIGN UP</h1>
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

          <div class="form-row">
            <a href="#" class="button circle block blue mb-15">
              {" "}
              <i class="fa fa-facebook"></i> Sign up with FACEBOOK
            </a>
          </div>
          <div class="form-row">
            <a href="#" class="button circle block red">
              <i class="fa fa-google"></i> Sign up with GOOGLE
            </a>
          </div>

          <div class="form-divider"></div>
          <div class="form-label-divider">
            <span>OR</span>
          </div>
          <div class="form-divider"></div>

          <div class="form-row-group with-icons">
            <div class="form-row no-padding">
              <i class="fa fa-user"></i>
              <input
                type="text"
                name="aaa"
                class="form-element"
                placeholder="First name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div class="form-row no-padding">
              <i class="fa fa-user"></i>
              <input
                type="text"
                name="aaa"
                class="form-element"
                placeholder="Last name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <div class="form-row no-padding">
              <i class="fa fa-envelope"></i>
              <input
                type="email"
                name="aaa"
                class="form-element"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-row no-padding">
              <i class="fa fa-lock"></i>
              <input
                type="password"
                name="aaa"
                class="form-element"
                placeholder="Password"
                value={password}
                aria-describedby="passwordHelpBlock"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div class="form-divider"></div>

          <div class="form-row">
            <button
              as={Link}
              to="/"
              class="button circle block orange"
              onClick={signUp}
            >
              Sign Up
            </button>
          </div>

          <div class="d-flex align-items-center justify-content-center mt-15">
            Already have an account?{" "}
            <Button
              variant="outline-warning"
              onClick={() => setFirstOpen(true)}
            >
              Login
            </Button>
            <Modal
              onClose={() => setFirstOpen(false)}
              onOpen={() => setFirstOpen(true)}
              open={firstOpen}
              size="tiny"
              centered
              style={{ height: "fit-content" }}
            >
              <Modal.Content>
                <Login modaal={() => setFirstOpen(false)} />
              </Modal.Content>

              <Modal.Actions>
                <p style={Style} onClick={() => setSecondOpen(true)}>
                  Forgot Password?
                </p>
              </Modal.Actions>
              <Modal
                onClose={() => setSecondOpen(false)}
                open={secondOpen}
                size="mini"
                style={{ height: "fit-content" }}
                centered
              >
                <Modal.Content>
                  <ForgotPassword />
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    icon="check"
                    content="All Done"
                    onClick={() => setSecondOpen(false)}
                  />
                </Modal.Actions>
              </Modal>
            </Modal>
          </div>
        </div>
      </main>
    </div>
  );
}

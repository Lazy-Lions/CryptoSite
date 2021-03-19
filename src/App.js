import React, { useEffect } from "react";
import "firebase/auth";
import fire from "./Components/config/fire";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { atom, useRecoilState } from "recoil";
import MenuNavigation from "./Components/MenuNavigation";
import BuySell from "./Pages/BuySell";
import CryptoTrade from "./Pages/CryptoTrade";
import DashBoard from "./Pages/DashBoard";
import Index from "./Pages/Index";
import UserProfile from "./Pages/UserProfile";
import Wallet from "./Pages/Wallet";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import Affiliate from "./Pages/Affiliate";
import { DetailsChart } from "./Components/TradingMarket";
import Settings from "./Pages/Settings";

export const userState = atom({
  key: "userState",
  default: false,
});
const App = () => {
  const [user, setUser] = useRecoilState(userState);
  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      user ? setUser(true) : setUser(false);
    });
    console.log("User Logged in");
  }, [user, setUser]);
  return !user ? (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/" component={Index} />
      </Switch>
    </Router>
  ) : (
    <Router>
      <div class="wrapper">
        <MenuNavigation />
        <div className="wrapper-inline">
          <Switch>
            <Route
              path="/details/:name"
              render={(props) => <DetailsChart {...props} />}
            />
            <Route path="/forgot_password" component={ForgotPassword} />
            <Route path="/settings" component={Settings} />
            <Route path="/affiliate" component={Affiliate} />
            <Route path="/trading" component={CryptoTrade} />
            <Route path="/wallet" component={Wallet} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/buy&sell" component={BuySell} />
            <Route path="/" component={DashBoard} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

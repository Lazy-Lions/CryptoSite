import React, { Component } from "react";
import firebase from "firebase";
import "firebase/storage";
import fire from "../Components/config/fire";
import Img from "../Components/img/Avatar.png";
import {
  FaCamera,
  FaUser,
  FaHome,
  FaGlobeAmericas,
  FaTransgenderAlt,
  FaBirthdayCake,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { Sparklines, SparklinesLine, SparklinesBars } from "react-sparklines";
import Footer from "./Footer";
const data = [
  46822.8552455619,
  48025.18236725473,
  47536.761539534506,
  47087.16804405672,
  46497.703754767135,
  45563.602076232295,
  46389.48023611226,
  45279.29714416771,
  46243.80904903247,
  46611.18857831368,
  47055.272192154596,
  46499.21828491724,
  46366.6506700321,
  47127.05981281485,
  47040.13507974832,
  47082.3928348438,
  47055.868086844544,
  46848.85419935941,
  46510.736783442466,
  46319.64260516762,
  46304.45449152826,
  46299.096229146846,
  46164.44016169053,
  45981.77225957528,
  46223.31913498457,
  46531.743341561414,
  46672.9161088254,
  46682.47286290658,
  46509.940937992345,
  46481.86926389207,
  46485.985813694424,
  45564.84714480674,
  45462.40384342035,
  44833.267381430174,
  44283.558574113624,
  44487.79459257227,
  45041.173322968636,
  45024.100871454815,
  44970.89209950391,
  44598.47181940013,
  44864.92428515944,
  45054.239036355364,
  44848.69344950499,
  44187.55945071082,
  44286.76448336648,
  44703.53845915115,
  45353.55508930817,
  44769.42862542665,
  44663.65486419956,
  44552.66103789821,
  44678.68537032764,
  44909.61243415135,
  45411.17121290637,
  46179.00541553165,
  46054.28026755455,
  47955.8815336257,
  47484.653652894885,
  47749.68047728298,
  47922.45987098658,
  47496.62098248499,
  47222.9831719397,
  47434.65047738381,
  47607.369136516856,
  47074.35527848516,
  46786.501689765224,
  47499.27660080816,
  47815.96175554316,
  48012.57846110786,
  48216.13437588234,
  47781.9580983982,
  47500.21378781513,
  47113.50153492208,
  47221.09573635404,
  47312.30069681106,
  47340.61147144899,
  47049.24407763847,
  47339.15253224385,
  47345.246757007844,
  47531.621858104314,
  47620.34141405727,
  47960.84287845154,
  46716.564311380964,
  47017.8868113775,
  47528.03480509394,
  47555.855803284954,
  47145.24950500805,
  47198.98402769743,
  47500.05891087597,
  47695.1209347129,
  47694.83316871613,
  47414.1862550079,
  47592.08424992752,
  47590.06380247422,
  47769.34130225554,
  47778.97276294089,
  47818.781165819164,
  47824.62281821764,
  47675.591234653235,
  47140.1963883116,
  47355.618365196424,
  47159.431870925095,
  46679.5534155937,
  46296.60220783228,
  46884.18296762147,
  46927.83149245025,
  46926.675372277605,
  46935.95285163663,
  47088.57568866298,
  46687.591577314066,
  46743.48463123342,
  46780.62948197996,
  46837.265603101696,
  47063.25888155468,
  46998.96059525472,
  47007.26367365752,
  47466.74107813106,
  47389.45732031188,
  47303.75277005233,
  47255.606394487055,
  47413.84516967594,
  48759.32424065163,
  48507.061569607475,
  48568.03579792561,
  48461.186989103386,
  49026.84078629081,
  48845.08131650659,
  48875.81890265539,
  49087.20681382356,
  48625.44724393501,
  48638.56669076275,
  48451.08542464199,
  48824.192614890875,
  48558.28196763652,
  48563.903471922786,
  48533.06040750724,
  48744.169304848554,
  48742.10068193661,
  49082.8059943863,
  48565.32288945199,
  48242.91184336785,
  48146.23982322108,
  46862.88823877233,
  47083.03805970495,
  46918.93102691646,
  46770.02817531785,
  47212.2475468462,
  47310.200440076245,
  47579.18764517152,
  47532.0946726225,
  47555.156200437814,
  47709.562084736834,
  47984.41938601861,
  47873.79429902326,
  47657.77874796809,
  48029.345585984294,
  48411.28769411903,
  48432.370637517946,
  48373.73347497062,
  48614.864701755476,
  48585.178531618,
  48259.04975793262,
  48247.94545823356,
  47806.49395997484,
  47900.542137557444,
  48235.82086919736,
  48407.52455320469,
  49483.034495424436,
  49318.51536921472,
];

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      birthday: "",
      gender: "",
      address: "",
      country: "",
      image: "",
      url: "",
      Progress: 0,
    };
    this.fileUpload = React.createRef();
  }
  showFileUpload = () => {
    this.fileUpload.current.click();
  };
  handleChange = (e) => {
    this.setState({ image: e.target.files[0] });
    let reader = new FileReader();
    reader.onload = (e) => {
      this.setState({ url: e.target.result });
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  handleUpload = () => {
    const { image } = this.state;
    var id = fire.auth().currentUser.uid;
    firebase
      .storage()
      .ref(`User_Images/${id}/${image.name}`)
      .put(image)
      .on(
        "state_changed",
        (snapshot) => {
          const Progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          );
          this.setState({ Progress });
        },
        (error) => {
          console.log(error);
        },
        () => {
          firebase
            .storage()
            .ref(`User_Images/${id}`)
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              this.setState({ url });
              firebase.database().ref(`User_Images/${id}/images`).set({
                Image: this.state.url,
              });
            });
        },
      );
  };
  componentDidMount() {
    var id = fire.auth().currentUser.uid;
    firebase
      .database()
      .ref(`User_Images/${id}/images`)
      .once("value")
      .then((snapshot) => {
        this.setState({ url: snapshot.val() && snapshot.val().Image });
      });
    firebase
      .database()
      .ref("User_Info/" + id)
      .once("value")
      .then((snapshot) => {
        this.setState({ fname: snapshot.val() && snapshot.val().Firstname });
        this.setState({ lname: snapshot.val() && snapshot.val().Lastname });
        this.setState({
          birthday: snapshot.val() && snapshot.val().Birthday,
        });
        this.setState({ gender: snapshot.val() && snapshot.val().Gender });
        this.setState({ address: snapshot.val() && snapshot.val().Address });
        this.setState({ country: snapshot.val() && snapshot.val().Country });
      });
  }
  UpdateInfo = (event) => {
    alert("Info saved Succesfully");
    const { fname, lname, birthday, gender, address, country } = this.state;
    event.preventDefault();
    var id = fire.auth().currentUser.uid;
    firebase
      .database()
      .ref("User_Info/" + id)
      .set({
        Firstname: fname,
        Lastname: lname,
        Birthday: birthday,
        Gender: gender,
        Address: address,
        Country: country,
      });
  };
  render() {
    const { fname, lname, birthday, gender, address, country } = this.state;
    return (
      <main class="margin mt-0">
        <div class="dash-balance">
          <div class="dash-content relative">
            <h3 class="w-text">Trader Porfile</h3>
            <div class="notification">
              <a href="#">
                <i class="fa fa-plus"></i>
              </a>
            </div>
          </div>
        </div>
        <section class="container-fluid bal-section">
          <div class="form-row txt-center  d-flex align-items-center justify-content-center">
            <div class="profile-image">
              <input
                type="file"
                id="my_file"
                style={{ display: "none" }}
                ref={this.fileUpload}
                onChange={this.handleChange}
              />
              <img
                class="avatar-img"
                alt="User Avatar"
                src={this.state.url || Img}
                width="100"
                height="100"
              />
              <Link
                onClick={this.showFileUpload}
                style={{ cursor: "pointer" }}
                class="update-btn"
              >
                <FaCamera />
              </Link>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Button onClick={this.handleUpload} color="blue" size="mini">
              Save
            </Button>
          </div>
          <div class="trader-info">
            <h1>
              {fname} {lname}
            </h1>
            <p>New York, USA</p>
            <div className="row trader-info-list">
              <div className="col-sm-12 col-md-4">
                <div class="profile1">
                  <Sparklines data={data} limit={10}>
                    <SparklinesBars style={{ fill: "#41c3f9" }} />
                  </Sparklines>
                </div>
                <h2>324</h2>
                <small class="txt-muted">Transaction</small>
              </div>
              <div className="col-sm-12 col-md-4">
                <div class="profile1">
                  <Sparklines data={data} limit={10}>
                    <SparklinesBars style={{ fill: "#41c3f9" }} />
                  </Sparklines>
                </div>
                <h2>324</h2>
                <small class="txt-muted">Transaction</small>
              </div>
              <div className="col-sm-12 col-md-4">
                <div class="profile1">
                  <Sparklines data={data} limit={10}>
                    <SparklinesBars style={{ fill: "#41c3f9" }} />
                  </Sparklines>
                </div>
                <h2>324</h2>
                <small class="txt-muted">Transaction</small>
              </div>
            </div>
          </div>
        </section>

        <section class="container-fluid">
          <div id="content">
            <h4 class="title-main">Account Value</h4>
            <div class="c-panel pl-0">
              <div class="row align-items-center">
                <div class="col-12">
                  <div class="accountValue">
                    <Sparklines data={data}>
                      <SparklinesLine
                        style={{
                          strokeWidth: 0.1,
                          stroke: "#336aff",
                        }}
                      />
                    </Sparklines>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="container-fluid">
          <h4 class="title-main">Account Info</h4>
          <div class="form-row-group with-icons">
            <div class="form-row no-padding">
              <i>
                <FaUser />
              </i>
              <input
                type="text"
                name="aaa"
                class="form-element"
                placeholder="FirstName"
                value={fname}
                onChange={(e) => this.setState({ Fname: e.target.value })}
              />
            </div>
            <div class="form-row no-padding">
              <i>
                <FaUser />
              </i>
              <input
                type="text"
                name="aaa"
                class="form-element"
                placeholder="LastName"
                value={lname}
                onChange={(e) => this.setState({ Lname: e.target.value })}
              />
            </div>
            <div class="form-row no-padding">
              <i>
                <FaBirthdayCake />
              </i>
              <input
                type="date"
                class="form-element"
                name="aaa"
                value={birthday}
                placeholder="Birthday"
                onChange={(e) => this.setState({ birthday: e.target.value })}
              />
            </div>
            <div class="form-row no-padding">
              <i>
                <FaTransgenderAlt />
              </i>
              <select
                class="form-element"
                name="aaa"
                onChange={(e) => this.setState({ gender: e.target.value })}
                value={gender}
              >
                <option value="Male" selected>
                  Male
                </option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div class="form-row no-padding">
              <i>
                <FaHome />
              </i>
              <input
                type="text"
                class="form-element"
                name="aaa"
                value={address}
                placeholder="#House, #Road"
                onChange={(e) => this.setState({ address: e.target.value })}
              />
            </div>
            <div class="form-row no-padding">
              <i>
                <FaGlobeAmericas />
              </i>
              <input
                type="text"
                name="aaa"
                class="form-element"
                value={country}
                placeholder="Country"
                onChange={(e) => this.setState({ country: e.target.value })}
              />
            </div>
          </div>
          <div class="form-row">
            <Link onClick={this.UpdateInfo} class="button circle block orange">
              Update
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    );
  }
}

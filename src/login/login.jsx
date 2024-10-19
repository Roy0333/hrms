import { useNavigate } from "react-router-dom";
import "./login.scss";
import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let [passMsg, setpassMsg] = useState("");
  let [loginCount, setloginCount] = useState(1);
  let [buttonDiasble, setbuttonDiasble] = useState(false);
  const nevigate = useNavigate();

  function loginSubmit() {
    localStorage.setItem("userName", userName);
    localStorage.setItem("password", password);
    if (userName === "Akash" && password === "0333") {
      // console.log("You are logged in");
      setpassMsg("You're Successfuly Logged In");
      localStorage.setItem("isLoggedin", "true");
      nevigate("/");
      window.location.reload();
    } else if (userName === "" && password === "") {
      // console.log("Please Enter Credentials");
      setpassMsg("Please Enter Credentials");
      // localStorage.setItem("isLoggedin", "false");
      localStorage.removeItem("isLoggedin");
    } else {
      // console.log("Please check your username and password");
      setpassMsg("Please check your Credentials");
      localStorage.clear();
    }
  }
  const loginTryCounter = () => {
    setloginCount(loginCount + 1);
    // console.log(loginCount);
    if (loginCount === 3) {
      setbuttonDiasble(true);
      // console.log("You've tried 3times");
    }
  };

  return (
    <div className="login__wrapper">
      <div className="login__container">
        <div className="login_left_section">
          <img src="../../src/assets/images/loginPage-img.png"></img>
        </div>
        <div className="login_right_section">
          <form>
            <h1>Welcome {userName}</h1>
            <span className="short_content">Please Login To Continue!</span>
            <div className="form_group">
              <label>User Name</label>
              <input
                type="text"
                id="userName"
                className="form_control"
                placeholder="Enter Your User Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form_group">
              <label>Password</label>
              <input
                type="password"
                id="password"
                className="form_control"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="success_msg">{passMsg}</span>
            </div>
            <button
              type="button"
              className={`login_btn btn_primary ${
                buttonDiasble ? "btn_disabled" : ""
              }`}
              onClick={() => {
                loginSubmit();
                loginTryCounter();
              }}
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

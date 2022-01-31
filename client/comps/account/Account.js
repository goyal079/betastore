import React, { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";
const Account = () => {
  const strong = {
    backgroundColor: "green",
    width: "100%",
    height: "100%",
    borderRadius: "12px",
  };
  const average = {
    backgroundColor: "gold",
    width: "65%",
    height: "100%",
    borderRadius: "12px",
  };
  const weak = {
    backgroundColor: "red",
    width: "25%",
    height: "100%",
    borderRadius: "12px",
  };
  const [access, setAccess] = useState(true);
  const register = () => {
    setAccess(false);
  };
  const login = () => {
    setAccess(true);
  };

  const [reg, setReg] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [bar, setBar] = useState(false);
  const [style, setStyle] = useState({});
  const [log, setLog] = useState({
    username: "",
    password: "",
  });

  function passwordStrength(val) {
    if (val.length >= 6) {
      setBar(true);
      let combo = val;
      let letters = combo.split("").some((ele) => {
        return /^[a-zA-Z]*$/.test(ele);
      });
      let numbers = combo.split("").some((ele) => {
        return /^[0-9]*$/.test(ele);
      });
      let specials = combo.split("").some((ele) => {
        return /^[!@#$%^&*)(+=._-]*$/.test(ele);
      });
      if (letters && numbers && specials) {
        setStyle(strong);
      } else if (
        (letters && numbers) ||
        (numbers && specials) ||
        (letters && specials)
      ) {
        setStyle(average);
      } else if (letters || numbers || specials) {
        setStyle(weak);
      }
    } else {
      setBar(false);
    }
  }

  const registration = (e) => {
    if (e.target.id == "password") {
      setReg({ ...reg, [e.target.id]: e.target.value });
      passwordStrength(e.target.value);
    } else {
      setReg({ ...reg, [e.target.id]: e.target.value });
    }
  };
  const loggingIn = (e) => {
    setLog({ ...log, [e.target.id]: e.target.value });
  };

  return (
    <div className="account-page">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src="images/image1.png" alt="Logo" width="100%" />
          </div>
          <div className="col-2">
            <div className="form-container">
              <div className="form-btn">
                <span onClick={login}>Login</span>
                <span onClick={register}>Register</span>
                <hr
                  id="Indicator"
                  style={
                    access
                      ? { transform: "translateX(0px)" }
                      : { transform: "translateX(100px)" }
                  }
                />
              </div>
              <form
                id="LoginForm"
                style={
                  access
                    ? { transform: "translateX(300px)" }
                    : { transform: "translateX(0px)" }
                }
                onChange={loggingIn}
              >
                <input
                  type="text"
                  placeholder="Username"
                  id="username"
                  value={log.username}
                />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={log.password}
                />
                <button type="submit" className="btn">
                  Login
                </button>
                <a href="">Forget Password</a>
              </form>

              <form
                id="RegForm"
                style={
                  access
                    ? { transform: "translateX(300px)" }
                    : { transform: "translateX(0px)" }
                }
                onChange={registration}
              >
                <input
                  type="text"
                  placeholder="Username"
                  id="username"
                  value={reg.username}
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={reg.email}
                />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={reg.password}
                  onChange={(e) => {
                    if (e.target.value.length >= 6) {
                      setBar(true);
                    } else {
                      setBar(false);
                    }
                  }}
                />
                {bar && (
                  <div
                    id="bar"
                    style={{
                      border: "1.5px solid gray",
                      borderRadius: "5px",
                      height: "10px",
                    }}
                  >
                    <div
                      id="status"
                      style={{ transition: "all ease-in-out 450ms", ...style }}
                    ></div>
                  </div>
                )}
                {/* {bar && <PasswordStrengthBar password={reg.password} />} */}
                <button type="submit" className="btn">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

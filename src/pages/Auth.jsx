import Login from "../components/Login/Login";
import Registration from "../components/Login/Registration";
import { Route, Routes } from "react-router-dom";

const Auth = () => {
  return (
    <>
      <div className="loginPage">
        <div className="side_left">
          <div className="login-or-registr">
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
            </Routes>
          </div>
        </div>
        <div className="side_right">
          <div className="titles">
            <div className="titles__title_colored">
              Get in touch
              <br />
              with us.
            </div>
            <div className="titles__title">
              Let’s start it <br /> right now
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;

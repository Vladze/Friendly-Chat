import styles from "./Login.module.scss";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/slices/authSlice";
import axios from "axios";

const Registration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.isAuth.value);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur" });
  const [error, setError] = useState(null);
  const errorStatus = {
    400: "*Your password and confirmation password must match",
    422: "*User with this username already exists",
  };

  useEffect(() => {
    isAuth && forwardingToChat();
  }, [isAuth]);

  const forwardingToChat = () => {
    navigate("/", { replace: true });
  };

  const registration = (data) => {
    const url = "http://chat.local/api/user/auth/sign-up";

    axios({ method: "post", url: url, data: data })
      .then(function (res) {
        localStorage.setItem("token", res.data.access_token);
        dispatch(signIn());
      })
      .catch(function (error) {
        if (error.response) {
          setError(errorStatus[error.response.status]);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  };

  const onSubmit = (data) => {
    setError(null);
    alert(JSON.stringify(data));
    registration(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
      <div className={styles.form}>
        <h3 className={styles.title}>Create an account</h3>
        <input
          {...register("username", {
            required: "Required field",
            minLength: {
              value: 2,
              message: "Minimum length 2",
            },
          })}
          type="text"
          className={styles.input}
          placeholder="Username"
        />
        <div className={styles.errors}>
          {errors?.username && (
            <span>{errors?.username?.message || "Error!"}</span>
          )}
        </div>

        <input
          {...register("password", {
            required: "Required field",
            minLength: {
              value: 6,
              message: "Minimum length 6",
            },
          })}
          type="password"
          className={styles.input}
          placeholder="Password"
        />
        <div className={styles.errors}>
          {errors?.password && (
            <span>{errors?.password?.message || "Error!"}</span>
          )}
        </div>

        <input
          {...register("repeat_password", {
            required: "Required field",
            minLength: {
              value: 6,
              message: "Minimum length 6",
            },
          })}
          type="password"
          className={styles.input}
          placeholder="Confirm password"
        />
        <div className={styles.errors}>
          {errors?.repeat_password && (
            <span>{errors?.repeat_password?.message || "Error!"}</span>
          )}
        </div>
        <div className={styles.errors}>{error && <span>{error}</span>}</div>
        <button className={styles.btn}>Submit</button>
      </div>
      <div className={styles.link}>
        Already have an account? <Link to="/auth/login">Sign In</Link>
      </div>
    </form>
  );
};

export default Registration;

// 422 - "user with this username address already exists"
// 400 - "your password and confirmation password must match"

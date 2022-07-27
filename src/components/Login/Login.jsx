import styles from "./Login.module.scss";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/slices/authSlice";
import axios from "axios";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fromPage = location.state?.from?.pathname || "/";
  const isAuth = useSelector((state) => state.isAuth.value);
  const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    isAuth && forwardingToChat();
  }, [isAuth]);

  const forwardingToChat = () => {
    navigate(fromPage, { replace: true });
  };

  const login = (data) => {
    const url = "http://chat.local/api/user/auth/sign-in";

    axios({ method: "post", url: url, data: data })
      .then(function (res) {
        localStorage.setItem("token", res.data.access_token);
        dispatch(signIn());
      })
      .catch(function (error) {
        if (error.response) {
          setError("Incorrect username or password");
        } else {
          console.log("Error", error.message);
        }
      });
  };

  const onSubmit = (data) => {
    setError(null);
    login(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
      <div className={styles.form}>
        <h3 className={styles.title}>Sign In</h3>
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
        <div className={styles.errors}>{error && <span>{error}</span>}</div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </div>
      <div className={styles.link}>
        Don't have an account? <Link to="/auth/registration">Create</Link>
      </div>
    </form>
  );
};

export default Login;

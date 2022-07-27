import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const isAuth = useSelector((state) => state.isAuth.value);

  if (!isAuth) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return children;
};

export { RequireAuth };

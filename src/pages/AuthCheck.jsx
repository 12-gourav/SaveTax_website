import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AuthCheck = ({ children }) => {
  const { isActive } = useSelector((state) => state.users);
  let location = useLocation();

  if (isActive === false) {
    return <Navigate to="/auth/login" state={{ from: location.pathname }} replace />;
  }
  return children;
};

export default AuthCheck;
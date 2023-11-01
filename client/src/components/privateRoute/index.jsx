import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const loggedIn = true;
  if (loggedIn) {
    return children;
  } else {
    return <Navigate to={"/auth/login"} />;
  }
};

export default PrivateRoute;

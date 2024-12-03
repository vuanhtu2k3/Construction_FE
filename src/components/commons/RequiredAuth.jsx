import { useContext } from "react";
import { AuthContext } from "../back-end/context/Auth";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const RequiredAuth = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to='admin/login' />;
  }
  return children;
};

RequiredAuth.propTypes = { // Fixed: Changed PropTypes to propTypes
  children: PropTypes.node.isRequired,
};

export default RequiredAuth;

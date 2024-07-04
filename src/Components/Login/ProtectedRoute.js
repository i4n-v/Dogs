import React from "react";
import { Navigate } from "react-router";
import { UserContext } from "../../UserContext";

function ProtectedRoute({ children }) {
  const { login } = React.useContext(UserContext);

  if (login === true) return children;
  else if (login === false) return <Navigate to="/login" />;
  else return null;
}

export default ProtectedRoute;

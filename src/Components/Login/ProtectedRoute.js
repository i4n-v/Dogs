import React from "react";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
  const { data } = useSelector((state) => state.user);

  if (data) return children;
  else if (data === null) return <Navigate to="/login" />;
  else return null;
}

export default ProtectedRoute;

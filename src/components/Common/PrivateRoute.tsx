import React from "react";

export interface PrivateRouteProps {}

export const PrivateRoute = (props: PrivateRouteProps) => {
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));

  return <div>PrivateRoute</div>;
};

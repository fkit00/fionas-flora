import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./login.css"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="button" onClick={() => loginWithRedirect()}>Sign up or Log in</button>;
};

export default LoginButton;
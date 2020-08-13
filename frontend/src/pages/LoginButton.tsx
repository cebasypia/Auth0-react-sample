import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div>
      {!isAuthenticated &&
        <button onClick={() => loginWithRedirect()}>Log In</button>
      }
    </div>
  )

};

export default LoginButton;
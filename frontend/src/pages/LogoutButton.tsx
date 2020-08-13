import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    <div>
      {isAuthenticated &&
        <button onClick={() => logout()}>Log Out</button>
      }
    </div>
  )
};

export default LogoutButton;
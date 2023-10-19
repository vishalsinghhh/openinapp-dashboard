import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";

import search from "../../images/search.svg";
import bell from "../../images/bell.svg";
import user1 from "../../images/user.png";

const NavBar = () => {
  const [user] = useAuthState(auth);
  
  return (
    <div className="dashMain">
      <div className="dashTitle">Dashboard</div>

      <div>
        <img src={search} alt="img" />
      </div>
      <div>
        <img src={bell} alt="img" className="bell" />
      </div>
      <div>
        {user?.providerData[0].photoURL ? (
          <img
            src={user?.providerData[0].photoURL}
            alt="img"
            width={30}
            height={30}
            className="imageMain"
          />
        ) : (
          <img
            src={user1}
            alt="img"
            width={30}
            height={30}
            className="imageMain"
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;

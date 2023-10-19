import React from "react";
import dash1 from "../../images/dash1.svg";
import dash2 from "../../images/dash2.svg";
import dash3 from "../../images/dash3.svg";
import dash4 from "../../images/dash4.svg";
import dash5 from "../../images/dash5.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="Board">Board.</div>
      <div className="icons">
        <div className="flex">
          <img src={dash1} alt="Dashboard" className="imgDash" />
          <div className="Dashboard">Dashboard</div>
        </div>
        <div className="flex">
          <img src={dash2} alt="Transactions" className="imgDash" />
          <div>Transactions</div>
        </div>
        <div className="flex">
          <img src={dash3} alt="Schedules" className="imgDash" />
          <div>Schedules</div>
        </div>
        <div className="flex">
          <img src={dash4} alt="Users" className="imgDash" />
          <div>Users</div>
        </div>
        <div className="flex">
          <img src={dash5} alt="Settings" className="imgDash" />
          <div>Settings</div>
        </div>
      </div>
      <div className="help">
        <div className="gap">Help</div>
        <div>Contact Us</div>
      </div>
    </div>
  );
};

export default Sidebar;

import { Message, Person, Search, Notifications } from "@material-ui/icons";
import React from "react";
import "./Topbar1.css";
import { Link } from "react-router-dom";
import { Profile } from "../../Pages/profile/Profile";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Sidesh</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input className="searchInput" placeholder="Search for friends" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
         
          <span style={{ color: "white" }}  className="topbarLink">Homepage</span>
         
         
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Message />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">5</span>
          </div>
          <Link to="/login">
           
            <div style={{ color: "white" }} className="topbarIconItem">
              Login
            </div>
          </Link>
        </div>
        <Link to="/profile">
          <img src="/assets/person/6.jpeg.jpg" alt="hi" className="topbarImg" />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;

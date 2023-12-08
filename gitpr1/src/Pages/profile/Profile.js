import { Sidebar } from "../../components/sidebar/Sidebar";
import { Feed1 } from "../../components/feed/Feed1";
import { Rightbar } from "../../components/rightbar/Rightbar";
import Topbar from "../../components/Topbar1/Topbar1";
import React from "react";
import "./profile.css";

export const Profile = () => {
  return (
    <div>
      <Topbar></Topbar>
      <div className="profile">
        <Sidebar></Sidebar>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="/assets/post/3.jpeg.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="/assets/person/6.jpeg.jpg"
                alt=""
              />
              <div className="profileInfo">
                <h4 className="profileInfoName">Sidesh</h4>
                <span className="profileInfoDesc"> Hello my friends</span>
              </div>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed1></Feed1>
            <Rightbar profile></Rightbar>
          </div>
        </div>
      </div>
    </div>
  );
};

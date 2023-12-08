import React from "react";
import Topbar from "../../components/Topbar1/Topbar1";

import { Sidebar } from "../../components/sidebar/Sidebar";
import {  Feed1 } from "../../components/feed/Feed1";
import { Rightbar } from "../../components/rightbar/Rightbar";
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Topbar></Topbar>
      <div className="homeContainer">
        <Sidebar></Sidebar>
        <Feed1></Feed1>
        <Rightbar></Rightbar>
      </div>
    </div>
  );
};

export default Home;

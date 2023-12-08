import {
  Bookmark,
  Chat,
  Group,
  HelpOutline,
  RssFeed,
  VideoCall,
  Event,
  WorkOutline,
  School,
  PlayCircleFilledOutlined,
} from "@material-ui/icons";
import "./sidebar.css";
import { Users } from "../../dummyData";
import { CloseFriend } from "../closeFriend/CloseFriend";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"></RssFeed>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon"></Chat>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon"></PlayCircleFilledOutlined>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon"></Group>
            <span className="sidebarListItemText">Groups</span>
          </li>

          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon"></Bookmark>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon"></HelpOutline>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon"></WorkOutline>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon"></Event>
            <span className="sidebarListItemText">Events</span>
          </li>

          <li className="sidebarListItem">
            <School className="sidebarIcon"></School>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList" >
             {Users.map(u=><CloseFriend key={u.id} user={u}/>)}
        </ul>
        
      </div>
    </div>
  );
};

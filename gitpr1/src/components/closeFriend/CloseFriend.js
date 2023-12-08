import "./closeFriend.css";

export const CloseFriend = ({user}) => {
  return (
    <div>
      <li className="sidebarFriend">
        <img
          src={user.profilePicture}
          className="sidebarFriendImg"
          alt=""
        />
        <span className="sidebarFriendName">{user.userName}</span>
      </li>
    </div>
  );
};

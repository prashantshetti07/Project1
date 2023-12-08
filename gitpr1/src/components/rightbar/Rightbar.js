import "./rightbar.css";
import { Users } from "../../dummyData";
import { Online } from "../online/Online";

const HomeRightbar = () => {
  return (
    <>
      <div className="birthdayContainer">
        <img className="birthdayImg" src="/assets/gift.png" alt="" />
        <span className="birthdayText">
          <b>Pola Faster</b> and <b>3 other friends</b> have a birthday today
        </span>
      </div>
      <img className="rightbarAd" src="/assets/person/1.jpeg.jpg" alt="" />
      <h4 className="rightbarTitle">online Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map((u) => (
          <Online key={u.id} user={u} />
        ))}
      </ul>
    </>
  );
};

const ProfileRightbar = () => {
  return (
    <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City :</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From :</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship :</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingsImg"
              src="/assets/person/2.jpeg.jpg"
              alt=""
            />
            <span className="rightbarFollowingsName">Jhon snoe</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingsImg"
              src="/assets/person/3.jpeg.jpg"
              alt=""
            />
            <span className="rightbarFollowingsName">Rony</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingsImg"
              src="/assets/person/4.jpeg.jpg"
              alt=""
            />
            <span className="rightbarFollowingsName">Messi</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingsImg"
              src="/assets/person/5.jpeg.jpg"
              alt=""
            />
            <span className="rightbarFollowingsName">Maria</span>
          </div>
        </div>
      </div>
    </>
  );
};

export const Rightbar = ({profile}) => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       {profile? <ProfileRightbar/>:<HomeRightbar/>}
      </div>
    </div>
  );
};

import ProfilePic from "../assets/profilejpeg.jpeg";
import { ABOUTME } from "../component/constant";
const Profile = () => {
  return (
    <div className="flex borderBottom">
      <div className="py-3 px-4 flex items-center">
        <div className="">
          <p className="">{ABOUTME}</p>
        </div>
      </div>
      <div className="py-3 px-4">
        <img src={ProfilePic} alt="profile picture" />
      </div>
    </div>
  );
};

export default Profile;

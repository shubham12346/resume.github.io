import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { URl } from "../component/constant";
import { FiMoon } from "react-icons/fi";

export type headerProp = {
  handleThemeChange: () => void;
};

const Header = ({ handleThemeChange }: headerProp) => {
  const handleNavigate = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <nav className="borderBottom">
      <div className=" flex flex-row justify-between items-center py-4">
        <div className="flex px-4 items-center">
          <div className="px-4 relative group">
            <span className="lg:hidden ">SA</span>
            <span className="hidden lg:block">Shubham Agrahari</span>
            <span className="absolute hidden  group-hover:block bg-gray-700 text-white text-xs rounded-md py-1 px-2 top-8 mb-1">
              Shubham Agrahari
            </span>
          </div>
          <div className="px-2">
            <FiMoon onClick={handleThemeChange} />
          </div>
        </div>
        <div className="flex justify-evenly cursor-pointer">
          <div className="px-4 ">
            <FaGithub
              onClick={() => {
                handleNavigate(URl.github);
              }}
            />
          </div>
          <div className="px-4">
            <FaXTwitter
              onClick={() => {
                handleNavigate(URl.twitter);
              }}
            />
          </div>
          <div className="px-4">
            <FaLinkedinIn
              onClick={() => {
                handleNavigate(URl.linkedIn);
              }}
            />
          </div>
          <div className="px-4">
            <FaInstagram
              onClick={() => {
                handleNavigate(URl.instagram);
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

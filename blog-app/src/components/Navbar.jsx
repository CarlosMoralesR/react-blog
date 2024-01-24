import { useState } from "react";
import AvatarModal from "./AvatarModal";
import froggy from "../assets/froggy.png";
import avatar from "../assets/avatar.png";

import LogoutIcon from "@mui/icons-material/Logout";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-slate-700 via-purple-800 to-slate-700 p-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center text-white font-bold">
          <img
            src={froggy}
            alt="User Avatar"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover mr-5 sm:transition-all sm:duration-100 sm:ease-out sm:hover:w-16 sm:hover:h-16"
          />
          <p className="hover:text-black text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Welcome to Bloggy!
          </p>
        </div>
        <div className="flex items-center">
          <div className="hidden sm:flex items-center text-white hover:text-black mr-8 text-xl hover:shadow-2xl">
            carlosdmr29
          </div>

          <img
            src={avatar}
            alt="User Avatar"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover cursor-pointer hover:opacity-80 hover:shadow-2xl"
            onClick={() => setIsModalOpen(true)}
            data-tooltip-id="profile-tooltip"
            data-tooltip-content="Profile"
            data-tooltip-place="bottom"
          />
          <Tooltip id="profile-tooltip" />
          <div className="hidden sm:flex items-center text-white  mr-6 text-xl hover:shadow-2xl">
            <HelpOutlineIcon
              className="ml-8 cursor-pointer hover:opacity-50 hover:shadow-lg hover:text-black"
              data-tooltip-id="help-tooltip"
              data-tooltip-content="FAQ"
              data-tooltip-place="bottom"
            />
            <Tooltip id="help-tooltip" />
            <LogoutIcon
              className="ml-4 cursor-pointer hover:opacity-50 hover:shadow-lg hover:text-black"
              data-tooltip-id="logout-tooltip"
              data-tooltip-content="Log Out"
              data-tooltip-place="bottom"
            />
            <Tooltip id="logout-tooltip" />
          </div>
        </div>

        {isModalOpen && (
          <>
            <AvatarModal
              username="carlosdmr29"
              onClose={() => setIsModalOpen(false)}
              onLogout={handleLogout}
            />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

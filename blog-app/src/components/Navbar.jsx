import avatar from "../assets/avatar.png";
import froggy from "../assets/froggy.png";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-slate-700 via-purple-800 to-slate-700 p-10">
      <div className="flex items-center justify-between">
        <div className="flex  items-center text-white  font-bold text-3xl">
          <img
            src={froggy}
            alt="User Avatar"
            className="w-14 h-14  rounded-full object-cover mr-5 transition-all duration-100 ease-out hover:w-16 hover:h-16"
          />
          <p className="hover:text-black">Welcome to Bloggy!</p>
        </div>
        <div className="flex items-center">
          <div className="text-white hover:text-black mr-8 text-xl hover:shadow-2xl">
            carlosdmr29
          </div>
          <img
            src={avatar}
            alt="User Avatar"
            className="w-14 h-14 rounded-full object-cover cursor-pointer hover:opacity-80 hover:shadow-2xl"
          />
          <LogoutIcon className="ml-6 cursor-pointer hover:opacity-70 hover:shadow-lg"></LogoutIcon>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

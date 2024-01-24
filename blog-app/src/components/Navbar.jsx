import avatar from "../assets/avatar.png";
import froggy from "../assets/froggy.png";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-slate-700 via-purple-800 to-slate-700 p-6">
      <div className="flex items-center justify-between">
        <div className="flex  items-center text-white font-bold text-2xl">
          <img
            src={froggy}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover mr-5"
          />
          Welcome to Bloggy!
        </div>
        <div className="flex items-center">
          <div className="text-white mr-4 text-lg">carlosm29</div>
          <img
            src={avatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import LogoutIcon from "@mui/icons-material/Logout";
import avatar from "../assets/avatar.png";
import CloseIcon from "@mui/icons-material/Close";

const AvatarModal = ({ username, onClose, onLogout }) => {
  return (
    <div className="fixed z-20 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 w-48">
        <div className="flex justify-end">
          <button className="py-1 px-1 rounded" onClick={onClose}>
            <CloseIcon></CloseIcon>
          </button>
        </div>

        <div className="text-center mb-4">
          <img
            src={avatar}
            alt="User Avatar"
            className="w-16 h-16 rounded-full object-cover mx-auto mb-2"
          />
          <p className="text-xl font-bold">{username}</p>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-red-500 flex justify-center text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={onLogout}
          >
            <LogoutIcon className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarModal;

import AddIcon from "@mui/icons-material/Add";
import { Tooltip } from "react-tooltip";

const AddPostButton = ({ onClick }) => {
  return (
    <div className="flex justify-end p-4 mx-6">
      <button
        className="bg-[#6bfa40] text-black h-12 w-12 lg:py-1 lg:px-3 rounded hover:bg-[#8df76c] hover:shadow-xl"
        onClick={onClick}
        data-tooltip-id="add-post-tooltip"
        data-tooltip-content="Add Post-It"
        data-tooltip-place="left"
      >
        <AddIcon></AddIcon>
        <Tooltip id="add-post-tooltip" />
      </button>
    </div>
  );
};

export default AddPostButton;

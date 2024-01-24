const AddPostButton = ({ onClick }) => {
  return (
    <div className="flex justify-end p-4 mx-6">
      <button
        className="bg-[#f7d571] text-black py-2 px-4 rounded hover:bg-[#f1c94e] hover:shadow-xl"
        onClick={onClick}
      >
        Add Post
      </button>
    </div>
  );
};

export default AddPostButton;

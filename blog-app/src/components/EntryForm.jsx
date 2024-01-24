import { useState } from "react";

const EntryForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    const newEntry = {
      title,
      author,
      date: new Date().toLocaleDateString(),
      content,
    };
    onSubmit(newEntry);
    setTitle("");
    setAuthor("");
    setContent("");
  };

  return (
    <div className="max-w-md mx-auto my-3">
      <h2 className="text-xl text-center font-bold mb-4">Add New Post</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-base font-bold mb-2">
          Title:
        </label>
        <input
          type="text"
          placeholder="Insert Title..."
          className="w-full p-2 border border-gray-300 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-base font-bold mb-2">
          Author:
        </label>
        <input
          type="text"
          placeholder="Name & Last Name..."
          className="w-full p-2 border border-gray-300 rounded"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-base font-bold mb-2">
          Content:
        </label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Share your content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={handleSubmit}
      >
        Save Post
      </button>
    </div>
  );
};

export default EntryForm;

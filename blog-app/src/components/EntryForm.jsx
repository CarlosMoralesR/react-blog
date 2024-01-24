import { useState } from "react";

const EntryForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!author.trim()) {
      newErrors.author = "Author is required";
    }

    if (!content.trim()) {
      newErrors.content = "Content is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));

    switch (field) {
      case "title":
        setTitle(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "content":
        setContent(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
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
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl text-center font-bold mb-4">Add New Post-It</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-base font-bold mb-2">
          Title:
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="text"
          placeholder="Insert Short Title..."
          className={`w-full p-2 border border-gray-300 rounded ${
            errors.title ? "border-red-500" : ""
          }`}
          value={title}
          onChange={(e) => handleInputChange("title", e.target.value)}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-base font-bold mb-2">
          Author:
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="text"
          placeholder="Insert Name & Last Name..."
          className={`w-full p-2 border border-gray-300 rounded ${
            errors.author ? "border-red-500" : ""
          }`}
          value={author}
          onChange={(e) => handleInputChange("author", e.target.value)}
        />
        {errors.author && (
          <p className="text-red-500 text-sm mt-1">{errors.author}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-base font-bold mb-2">
          Content:
          <span className="text-red-500 ml-1">*</span>
        </label>
        <textarea
          className={`w-full h-28 p-2 border border-gray-300 rounded resize-none ${
            errors.content ? "border-red-500" : ""
          }`}
          placeholder="Share your content here..."
          value={content}
          onChange={(e) => handleInputChange("content", e.target.value)}
        />
        {errors.content && (
          <p className="text-red-500 text-sm mt-1">{errors.content}</p>
        )}
      </div>
      <div className="flex justify-end">
        <button
          className="bg-[#6bfa40] text-black py-2 px-4 rounded hover:bg-[#8df76c"
          onClick={handleSubmit}
        >
          Save Post-It
        </button>
      </div>
    </div>
  );
};

export default EntryForm;

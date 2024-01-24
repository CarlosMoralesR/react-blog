const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by title, author or content"
      onChange={handleSearch}
      className="border p-2 rounded mb-4 w-72"
    />
  );
};

export default SearchBar;

import { useState } from "react";
import SearchBar from "./SearchBar";

const EntryList = ({ entries, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredEntries = entries.filter(
    (entry) =>
      entry.title.toLowerCase().includes(searchTerm) ||
      entry.author.toLowerCase().includes(searchTerm) ||
      entry.content.toLowerCase().includes(searchTerm)
  );

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8">
        {filteredEntries.map((entry) => (
          <div
            key={`${entry.title}-${entry.author}`}
            className="bg-[#f8f869] border-gray-300 p-6 w-52 h-52 cursor-pointer hover:bg-[#f7f783] shadow-xl hover:shadow-2xl rounded rounded-tl-none rounded-br-3xl"
            onClick={() => onSelect(entry)}
          >
            <span className="capitalize block text-base">
              <strong>{entry.title}</strong> <br />
              {entry.author} <br />
            </span>
            <small>{formatDate(entry.publicationDate)}</small>
            <p className="text-sm mt-1">{entry.content.substring(0, 70)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntryList;

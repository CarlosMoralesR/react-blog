const EntryList = ({ entries, onSelect }) => {
  return (
    <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8">
      {entries.map((entry) => (
        <div
          key={entry.title}
          className="bg-[#F9F871] border-gray-300 p-6 w-52 h-52 cursor-pointer hover:bg-[#f3f37d] shadow-xl rounded rounded-tl-none rounded-br-3xl"
          onClick={() => onSelect(entry)}
        >
          <span className="capitalize block">
            <strong>{entry.title}</strong> <br />
            {entry.author} <br /> <small>{entry.date}</small>
          </span>
          <p className="text-sm mt-1">{entry.content.substring(0, 70)}</p>
        </div>
      ))}
    </div>
  );
};

export default EntryList;

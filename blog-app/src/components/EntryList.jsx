const EntryList = ({ entries, onSelect }) => {
  return (
    <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8">
      {entries.map((entry) => (
        <div
          key={entry.title}
          className="bg-[#f8f869] border-gray-300 p-6 w-52 h-52 cursor-pointer hover:bg-[#f7f783] shadow-xl hover:shadow-2xl rounded rounded-tl-none rounded-br-3xl"
          onClick={() => onSelect(entry)}
        >
          <span className="capitalize block text-lg">
            <strong>{entry.title}</strong> <br />
            {entry.author} <br />
          </span>
          <small>{entry.date}</small>
          <p className="text-sm mt-1">{entry.content.substring(0, 70)}</p>
        </div>
      ))}
    </div>
  );
};

export default EntryList;

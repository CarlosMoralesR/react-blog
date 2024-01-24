const EntryList = ({ entries, onSelect }) => {
  return (
    <div className="">
      <ul>
        {entries.map((entry) => (
          <li
            key={entry.title}
            className="cursor-pointer mb-2 border border-gray-300 p-2 rounded hover:bg-gray-100"
            onClick={() => onSelect(entry)}
          >
            <span className="capitalize">
              <strong>{entry.title}</strong> - {entry.author}{" "}
            </span>{" "}
            ({entry.date})<p>{entry.content.substring(0, 70)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EntryList;

const EntryDetail = ({ entry }) => {
  return (
    <div className="">
      <h2 className="text-3xl capitalize font-bold mb-2">{entry.title}</h2>
      <p className="mb-2 capitalize">
        <strong>Author:</strong> {entry.author}
      </p>
      <p className="mb-2">
        <small>
          <strong>Date:</strong> {entry.date}
        </small>
      </p>
      <p>{entry.content}</p>
    </div>
  );
};

export default EntryDetail;

const EntryDetail = ({ entry }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl capitalize font-bold mb-4">{entry.title}</h2>
      <p className="mb-2 capitalize">
        <strong>Author:</strong> {entry.author}
      </p>
      <p className="mb-2">
        <strong>Date:</strong> {entry.date}
      </p>
      <p>{entry.content}</p>
    </div>
  );
};

export default EntryDetail;

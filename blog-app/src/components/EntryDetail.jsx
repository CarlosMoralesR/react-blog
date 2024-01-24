const formatDate = (dateString) => {
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    undefined,
    options
  );
  return formattedDate;
};

const EntryDetail = ({ entry }) => {
  return (
    <div className="">
      <h2 className="text-3xl capitalize font-bold mb-2">{entry.title}</h2>
      <p className="mb-2 capitalize">
        <strong>Author:</strong> {entry.author}
      </p>
      <p className="mb-2">
        <small>
          <strong>Date:</strong> {formatDate(entry.publicationDate)}
        </small>
      </p>
      <p>{entry.content}</p>
    </div>
  );
};

export default EntryDetail;

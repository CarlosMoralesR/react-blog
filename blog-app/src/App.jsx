import { useState } from "react";
import EntryForm from "./components/EntryForm";
import CloseIcon from "@mui/icons-material/Close";
// import EntryList from "./components/EntryList";
// import EntryDetail from "./components/EntryDetail";
import Navbar from "./components/Navbar";
import AddPostButton from "./components/AddPostButton";
// import * as api from "./services/api";

const App = () => {
  // const [entries, setEntries] = useState([]);
  // const [selectedEntry, setSelectedEntry] = useState(null);
  const [isAddingEntry, setIsAddingEntry] = useState(false);

  // useEffect(() => {
  //   // Llamada inicial para obtener las entradas desde la API
  //   const fetchData = async () => {
  //     const data = await api.getEntries();
  //     setEntries(data);
  //   };
  //   fetchData();
  // }, []);

  // const addEntry = async (newEntry) => {
  //   const savedEntry = await api.saveEntry(newEntry);
  //   setEntries([...entries, savedEntry]);
  // };

  // const selectEntry = (entry) => {
  //   setSelectedEntry(entry);
  // };

  return (
    <div>
      <Navbar />
      <AddPostButton onClick={() => setIsAddingEntry(true)} />

      {isAddingEntry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 w-96">
            <button
              className="mt-4 py-1 px-1 rounded"
              onClick={() => setIsAddingEntry(false)}
            >
              <CloseIcon className="text-black hover:text-gray-500"></CloseIcon>
            </button>
            <EntryForm onSubmit="" />
          </div>
        </div>
      )}

      {/* <div className="max-w-3xl mx-auto my-4">
        <EntryList entries={entries} onSelect={selectEntry} />
        {selectedEntry && <EntryDetail entry={selectedEntry} />}
      </div> */}
    </div>
  );
};

export default App;

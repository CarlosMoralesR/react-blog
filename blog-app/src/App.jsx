// App.jsx
import { useState, useEffect } from "react";
import EntryForm from "./components/EntryForm";
import CloseIcon from "@mui/icons-material/Close";
import EntryList from "./components/EntryList";
import EntryDetail from "./components/EntryDetail";
import Navbar from "./components/Navbar";
import AddPostButton from "./components/AddPostButton";
import { getEntries, addEntry, deleteEntry } from "./services/api";

const App = () => {
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isAddingEntry, setIsAddingEntry] = useState(false);
  const [entries, setEntries] = useState([]);
  const [offlineEntries, setOfflineEntries] = useState([]);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [loadingEntries, setLoadingEntries] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = () => {
    setLoadingEntries(true);
    getEntries()
      .then((data) => {
        setEntries(data);
        setOfflineEntries(data);
        localStorage.setItem("entries", JSON.stringify(data));
      })
      .catch((error) => console.error("Error fetching entries:", error))
      .finally(() => setLoadingEntries(false));
  };

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    if (!isOnline) {
      const storedEntries = JSON.parse(localStorage.getItem("entries")) || [];
      setOfflineEntries(storedEntries);
    }
  }, [isOnline]);

  const selectEntry = (entry) => {
    setSelectedEntry(entry);
  };

  const handleAddEntry = (newEntry) => {
    if (isOnline) {
      setLoading(true);

      addEntry(newEntry)
        .then((data) => {
          setEntries([...entries, data]);
          const updatedOfflineEntries = [...offlineEntries, newEntry];
          setOfflineEntries(updatedOfflineEntries);
          localStorage.setItem(
            "entries",
            JSON.stringify(updatedOfflineEntries)
          );
        })
        .catch((error) => {
          console.error("Error adding entry:", error);
        })
        .finally(() => {
          setLoading(false);
          setIsAddingEntry(false);
        });
    }
  };

  const handleDeleteEntry = (entry) => {
    setLoading(true);

    deleteEntry(entry.id)
      .then(() => {
        fetchEntries();
        setSelectedEntry(null);
      })
      .catch((error) => {
        console.error("Error deleting entry:", error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-between">
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold my-6 mx-14">
          Turn your ideas into colorful Post-its!
        </h2>

        <AddPostButton
          onClick={() => setIsAddingEntry(true)}
          className={isOnline ? "" : "hover:cursor-not-allowed"}
          disabled={!isOnline}
        />
      </div>

      {loadingEntries && (
        <div className="fixed inset-0 z-10 bg-opacity-50 flex items-center justify-center">
          <div className="loading-circle mx-auto my-4"></div>
        </div>
      )}

      {isAddingEntry && (
        <div className="fixed z-20 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 w-96">
            <div className="flex justify-end">
              <button
                className="py-1 px-1 rounded"
                onClick={() => setIsAddingEntry(false)}
                disabled={loading}
              >
                <CloseIcon className="text-black hover:text-gray-500"></CloseIcon>
              </button>
            </div>

            {loading ? (
              <div className="loading-circle z-10 mx-auto my-4"></div>
            ) : (
              <EntryForm onSubmit={handleAddEntry} />
            )}
          </div>
        </div>
      )}

      <div className="mx-14">
        {isOnline ? (
          <EntryList
            entries={entries}
            onSelect={selectEntry}
            onDelete={handleDeleteEntry}
            loading={loading}
            isOnline={isOnline}
          />
        ) : (
          <>
            <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-4 max-w-sm">
                <p className="text-center text-red-500">
                  No Internet connection. Offline Mode On.
                </p>
              </div>
            </div>
            <EntryList
              entries={offlineEntries}
              onSelect={selectEntry}
              isOnline={isOnline}
            />
          </>
        )}
        {selectedEntry && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-[#f8f869] p-6 max-w-md w-auto rounded rounded-tl-none rounded-br-3xl shadow-2xl">
              <div className="flex justify-end">
                <button
                  className="py-1 px-1 rounded"
                  onClick={() => setSelectedEntry(null)}
                >
                  <CloseIcon className="text-black hover:text-gray-500"></CloseIcon>
                </button>
              </div>

              <EntryDetail entry={selectedEntry} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

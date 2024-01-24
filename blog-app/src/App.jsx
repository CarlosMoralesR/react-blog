import { useState } from "react";
import EntryForm from "./components/EntryForm";
import CloseIcon from "@mui/icons-material/Close";
import EntryList from "./components/EntryList";
import Navbar from "./components/Navbar";
import AddPostButton from "./components/AddPostButton";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isAddingEntry, setIsAddingEntry] = useState(false);

  const entries = [
    {
      title: "hola",
      author: "carlos",
      date: "12-12-12",
      content:
        "Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos predefinidos cuando sea necesario, haciendo a este el único generador verdadero (válido) en la Internet. Usa un diccionario de mas de 200 palabras provenientes del latín, combinadas con estructuras muy útiles de sentencias, para generar texto de Lorem Ipsum que parezca razonable. Este Lorem Ipsum generado siempre estará libre de repeticiones, humor agregado o palabras no características del lenguaje, etc.",
    },
    {
      title: "hola",
      author: "carlos",
      date: "12-12-12",
      content: "hola",
    },
    {
      title: "hola",
      author: "carlos",
      date: "12-12-12",
      content: "hola",
    },
  ];

  const selectEntry = (entry) => {
    setSelectedEntry(entry);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold m-6">Posts</h2>

        <AddPostButton onClick={() => setIsAddingEntry(true)} />
      </div>

      {isAddingEntry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 w-96">
            <div className="flex justify-end">
              <button
                className="py-1 px-1 rounded"
                onClick={() => setIsAddingEntry(false)}
              >
                <CloseIcon className="text-black hover:text-gray-500"></CloseIcon>
              </button>
            </div>

            <EntryForm onSubmit="" />
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-3 flex justify-center">
        <EntryList entries={entries} onSelect={selectEntry} />
      </div>
    </div>
  );
};

export default App;

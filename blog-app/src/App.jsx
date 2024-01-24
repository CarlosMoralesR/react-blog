import { useState } from "react";
import EntryForm from "./components/EntryForm";
import CloseIcon from "@mui/icons-material/Close";
import EntryList from "./components/EntryList";
import EntryDetail from "./components/EntryDetail";
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
      title: "Post 2",
      author: "Angel",
      date: "12-12-12",
      content:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus cursus lobortis. Nunc in tristique tellus. Vestibulum eget justo congue, varius eros in, aliquet magna. Integer vulputate lacus eu ligula eleifend, et vulputate ipsum tempus. Phasellus non efficitur sem. Proin ut dui molestie, ornare nisi sit amet, ornare nisl. Ut id aliquet neque, sed ultricies risus. Vestibulum eget porta dolor. Vestibulum vulputate pretium leo ut sagittis. Integer rutrum in ligula et ultrices. Pellentesque sapien sapien, cursus et ex convallis, molestie consequat velit. Maecenas ut consequat massa. Donec egestas quis erat id molestie. Integer pulvinar ac lectus nec viverra. Sed egestas interdum orci at semper. Pellentesque feugiat, nibh ut tincidunt vestibulum, ligula magna volutpat nulla, non lobortis augue neque in nulla.",
    },
    {
      title: "Post 3",
      author: "A1",
      date: "12-12-12",
      content:
        "In ut dolor vel lectus imperdiet dictum egestas vel metus. Suspendisse facilisis sapien justo, et tincidunt sem vestibulum sit amet. Quisque vitae turpis ut enim luctus sollicitudin. Pellentesque vitae purus velit. In et ipsum ac felis ornare lacinia sit amet ac arcu. Nullam accumsan justo vitae ornare pretium. Ut turpis quam, sagittis nec dolor eu, tristique consectetur diam. Duis leo lacus, dictum ac lacus ut, posuere consectetur mauris. Suspendisse varius neque sit amet nulla viverra sagittis. Vestibulum dictum suscipit mi vel blandit. Vivamus ac ornare dui.",
    },
    {
      title: "Post 3",
      author: "A2",
      date: "12-12-12",
      content:
        "In ut dolor vel lectus imperdiet dictum egestas vel metus. Suspendisse facilisis sapien justo, et tincidunt sem vestibulum sit amet. Quisque vitae turpis ut enim luctus sollicitudin. Pellentesque vitae purus velit. In et ipsum ac felis ornare lacinia sit amet ac arcu. Nullam accumsan justo vitae ornare pretium. Ut turpis quam, sagittis nec dolor eu, tristique consectetur diam. Duis leo lacus, dictum ac lacus ut, posuere consectetur mauris. Suspendisse varius neque sit amet nulla viverra sagittis. Vestibulum dictum suscipit mi vel blandit. Vivamus ac ornare dui.",
    },
    {
      title: "Post 3",
      author: "A3",
      date: "12-12-12",
      content:
        "In ut dolor vel lectus imperdiet dictum egestas vel metus. Suspendisse facilisis sapien justo, et tincidunt sem vestibulum sit amet. Quisque vitae turpis ut enim luctus sollicitudin. Pellentesque vitae purus velit. In et ipsum ac felis ornare lacinia sit amet ac arcu. Nullam accumsan justo vitae ornare pretium. Ut turpis quam, sagittis nec dolor eu, tristique consectetur diam. Duis leo lacus, dictum ac lacus ut, posuere consectetur mauris. Suspendisse varius neque sit amet nulla viverra sagittis. Vestibulum dictum suscipit mi vel blandit. Vivamus ac ornare dui.",
    },
    {
      title: "Post 3",
      author: "A4",
      date: "12-12-12",
      content:
        "In ut dolor vel lectus imperdiet dictum egestas vel metus. Suspendisse facilisis sapien justo, et tincidunt sem vestibulum sit amet. Quisque vitae turpis ut enim luctus sollicitudin. Pellentesque vitae purus velit. In et ipsum ac felis ornare lacinia sit amet ac arcu. Nullam accumsan justo vitae ornare pretium. Ut turpis quam, sagittis nec dolor eu, tristique consectetur diam. Duis leo lacus, dictum ac lacus ut, posuere consectetur mauris. Suspendisse varius neque sit amet nulla viverra sagittis. Vestibulum dictum suscipit mi vel blandit. Vivamus ac ornare dui.",
    },
    {
      title: "Post 3",
      author: "A5",
      date: "12-12-12",
      content:
        "In ut dolor vel lectus imperdiet dictum egestas vel metus. Suspendisse facilisis sapien justo, et tincidunt sem vestibulum sit amet. Quisque vitae turpis ut enim luctus sollicitudin. Pellentesque vitae purus velit. In et ipsum ac felis ornare lacinia sit amet ac arcu. Nullam accumsan justo vitae ornare pretium. Ut turpis quam, sagittis nec dolor eu, tristique consectetur diam. Duis leo lacus, dictum ac lacus ut, posuere consectetur mauris. Suspendisse varius neque sit amet nulla viverra sagittis. Vestibulum dictum suscipit mi vel blandit. Vivamus ac ornare dui.",
    },
    {
      title: "Post 3",
      author: "A6",
      date: "12-12-12",
      content:
        "In ut dolor vel lectus imperdiet dictum egestas vel metus. Suspendisse facilisis sapien justo, et tincidunt sem vestibulum sit amet. Quisque vitae turpis ut enim luctus sollicitudin. Pellentesque vitae purus velit. In et ipsum ac felis ornare lacinia sit amet ac arcu. Nullam accumsan justo vitae ornare pretium. Ut turpis quam, sagittis nec dolor eu, tristique consectetur diam. Duis leo lacus, dictum ac lacus ut, posuere consectetur mauris. Suspendisse varius neque sit amet nulla viverra sagittis. Vestibulum dictum suscipit mi vel blandit. Vivamus ac ornare dui.",
    },
    {
      title: "Post 3",
      author: "A7",
      date: "12-12-12",
      content:
        "In ut dolor vel lectus imperdiet dictum egestas vel metus. Suspendisse facilisis sapien justo, et tincidunt sem vestibulum sit amet. Quisque vitae turpis ut enim luctus sollicitudin. Pellentesque vitae purus velit. In et ipsum ac felis ornare lacinia sit amet ac arcu. Nullam accumsan justo vitae ornare pretium. Ut turpis quam, sagittis nec dolor eu, tristique consectetur diam. Duis leo lacus, dictum ac lacus ut, posuere consectetur mauris. Suspendisse varius neque sit amet nulla viverra sagittis. Vestibulum dictum suscipit mi vel blandit. Vivamus ac ornare dui.",
    },
  ];

  const selectEntry = (entry) => {
    setSelectedEntry(entry);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-between">
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold my-6 mx-14">
          Turn your ideas into colorful Post-its!
        </h2>

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

      <div className="mx-14">
        <EntryList entries={entries} onSelect={selectEntry} />
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

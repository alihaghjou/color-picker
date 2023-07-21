import { useState } from "react";
import FormColor from "./FormColor";
import { useGetColors } from "./hooks";

function App() {
  const options = useGetColors();
  const [result, setResult] = useState({
    selected: "",
    isTrue: false,
    isSubmited: false,
  });
  const [select, setSelect] = useState({ selected: "", isTrue: false });
  const bgColor = options.filter((item) => item.isTrue === true)[0].option;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!select.selected) return;
    setResult({
      selected: select.selected,
      isTrue: select.isTrue,
      isSubmited: true,
    });
  };
  return (
    <main className="flex flex-col justify-center items-center gap-8 py-4">
      <h1>Choose the right color:</h1>
      <section>
        <div
          className="w-64 h-64 mb-6 rounded"
          style={{ backgroundColor: `#${bgColor}` }}
        ></div>
        <FormColor
          isSubmited={result.isSubmited}
          handleSubmit={handleSubmit}
          select={select}
          setSelect={setSelect}
          options={options}
        />
        {result.isSubmited && (
          <div className="text-center py-4">
            {result.isTrue ? (
              <div>You gussed right!!!</div>
            ) : (
              <div>
                Wrong, Correcr answer is <b className="underline">{bgColor}</b>
              </div>
            )}
            <button
              onClick={() => location.reload()}
              className="ring-1 rounded ring-slate-600 py-2 px-4 mt-4 hover:bg-sky-700 hover:text-sky-300"
            >
              Go Again
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;

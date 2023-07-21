import { useEffect, useState } from "react";
import { generateColor, shuffle } from "./functions";
import FormColor from "./FormColor";

function App() {
  const [result, setResult] = useState({
    selected: "",
    isTrue: false,
    isSubmited: false,
  });
  const [select, setSelect] = useState({ selected: "", isTrue: false });
  const [options, setOptions] = useState([
    { option: generateColor(), isTrue: false },
    { option: generateColor(), isTrue: false },
    { option: generateColor(), isTrue: true },
    { option: generateColor(), isTrue: false },
  ]);
  useEffect(() => {
    const list = shuffle(options);
    setOptions(list);
  }, []);
  const bgColor = options.filter((item) => item.isTrue === true)[0].option;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          handleSubmit={handleSubmit}
          select={select}
          setSelect={setSelect}
          options={options}
        />
        {result.isSubmited && (
          <div className="text-center py-4">
            {result.isTrue ? (
              <div>You gussed right</div>
            ) : (
              <div>Wrong, Correcr answer is <b className="underline">{bgColor}</b></div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;

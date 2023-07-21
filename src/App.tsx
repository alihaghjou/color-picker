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
    <div>
      <h1>Choose the right color:</h1>
      <div className="w-10 h-10" style={{ backgroundColor: `#${bgColor}` }}>
        {bgColor}
      </div>
      <FormColor
        handleSubmit={handleSubmit}
        select={select}
        setSelect={setSelect}
        options={options}
      />
      {result.isSubmited && (
        <div>
          {result.isTrue ? (
            <div>You gussed right</div>
          ) : (
            <div>Wrong, Correcr answer is {bgColor}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;

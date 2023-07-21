import { useEffect, useState } from "react";

function App() {
  const generateColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };
  const [select, setSelect] = useState({ selected: "", isTrue: false });
  const [options, setOptions] = useState([
    { option: generateColor(), isTrue: false },
    { option: generateColor(), isTrue: false },
    { option: generateColor(), isTrue: true },
    { option: generateColor(), isTrue: false },
  ]);
  const bgColor = options.filter((item) => item.isTrue === true)[0].option;
  const color = `w-10 h-10 bg-[#${bgColor}]`;
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(select);
  }
  return (
    <div>
      <h1>Choose the right color:</h1>
      <div className={color}>color</div>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
        {options.map((option) => (
          <div key={option.option}>
            <input
              type="radio"
              name="color"
              id="1"
              value={option.option}
              onChange={(e) =>
                setSelect({ selected: e.target.value, isTrue: option.isTrue })
              }
              checked={select.selected === option.option}
            />
            <label htmlFor="">#{option.option}</label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

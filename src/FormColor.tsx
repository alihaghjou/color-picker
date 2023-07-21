import React from "react";

type typeProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  options: {
    option: string;
    isTrue: boolean;
  }[];
  select: {
    selected: string;
    isTrue: boolean;
  };
  setSelect: React.Dispatch<
    React.SetStateAction<{
      selected: string;
      isTrue: boolean;
    }>
  >;
};

function FormColor({ handleSubmit, options, select, setSelect }: typeProps) {
  return (
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
  );
}

export default FormColor;

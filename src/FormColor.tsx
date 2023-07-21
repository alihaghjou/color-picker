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
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6">
      <article className="grid grid-cols-2 gap-4">
        {options.map((option) => (
          <div key={option.option} className="flex items-center justify-center">
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
      </article>

      <button
        type="submit"
        className="ring-1 ring-cyan-900 rounded py-4 hover:bg-cyan-900 hover:text-cyan-100 text-cyan-900"
      >
        Submit
      </button>
    </form>
  );
}

export default FormColor;

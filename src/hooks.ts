import { useState, useEffect } from "react";
import { generateColor, shuffle } from "./functions";

export function useGetColors() {
    const [options, setOptions] = useState([
      { option: generateColor(), isTrue: false },
      { option: generateColor(), isTrue: false },
      { option: generateColor(), isTrue: true },
      { option: generateColor(), isTrue: false },
    ]);
    useEffect(() => {
      const list = shuffle(options);
      setOptions(list);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return options
  }
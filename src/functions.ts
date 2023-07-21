export const shuffle = (
    arr: {
      option: string;
      isTrue: boolean;
    }[]
  ) => [...arr].sort(() => Math.random() - 0.5);

export const generateColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };
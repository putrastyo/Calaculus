import { createContext, useState } from "react";
import { evaluate } from "mathjs";

interface CalContextProps {
  result: string;
  history: string;
  calculate: () => void;
  setResult: React.Dispatch<React.SetStateAction<string>>;
  handleReset: () => void;
  handleRemove: () => void;
}

export const CalContext = createContext<CalContextProps | undefined>(undefined);

export const CalProvider = ({ children }: { children: React.ReactNode }) => {
  const [history, setHistory] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    setHistory(result);
    setResult(evaluate(result));
  };

  const handleReset = () => {
    setHistory("");
    setResult("");
  };

  const handleRemove = () => {
    setResult(result.slice(0, -1));
  };

  const value = {
    result,
    calculate,
    setResult,
    history,
    handleReset,
    handleRemove,
  };

  return <CalContext.Provider value={value}>{children}</CalContext.Provider>;
};

import { useContext } from "react";
import { CalContext } from "../context/CalContext";

export const useCal = () => {
  const context = useContext(CalContext);
  if (context === undefined) {
    throw new Error("useCal must be used within a CalProvider");
  }
  return context;
};

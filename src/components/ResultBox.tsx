import { useCal } from "../hooks/useCal";

const ResultBox = () => {
  const { result, history } = useCal();
  return (
    <div className="w-full pb-6 overflow-x-auto bg-white text-end">
      <p className="text-gray-500">{history ? history + "=" : ""}</p>
      <h4 className="text-3xl font-semibold">{result ? result : "0"}</h4>
    </div>
  );
};

export default ResultBox;

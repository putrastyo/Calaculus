import { useCal } from "../hooks/useCal";
import Button from "./Button";

export const ButtonArea = () => {
  const { setResult, calculate, handleReset, handleRemove } = useCal();

  const handleClick = (val: string) => {
    setResult((prev) => prev + val);
  };

  return (
    <div className="grid grid-cols-4 gap-3">
      <Button value="C" theme="equal" onClick={handleReset} />
      <Button value="&#8637;" theme="remove" onClick={handleRemove} />
      <Button value="%" theme="operator" onClick={() => handleClick("%")} />
      <Button
        value="&divide;"
        theme="operator"
        onClick={() => handleClick("/")}
      />
      <Button value="7" theme="number" onClick={() => handleClick("7")} />
      <Button value="8" theme="number" onClick={() => handleClick("8")} />
      <Button value="9" theme="number" onClick={() => handleClick("9")} />
      <Button
        value="&times;"
        theme="operator"
        onClick={() => handleClick("*")}
      />
      <Button value="4" theme="number" onClick={() => handleClick("4")} />
      <Button value="5" theme="number" onClick={() => handleClick("5")} />
      <Button value="6" theme="number" onClick={() => handleClick("6")} />
      <Button
        value="&minus;"
        theme="operator"
        onClick={() => handleClick("-")}
      />
      <Button value="1" theme="number" onClick={() => handleClick("1")} />
      <Button value="2" theme="number" onClick={() => handleClick("2")} />
      <Button value="3" theme="number" onClick={() => handleClick("3")} />
      <Button value="+" theme="operator" onClick={() => handleClick("+")} />
      <Button value="0" theme="number" onClick={() => handleClick("0")} />
      <Button value="00" theme="number" onClick={() => handleClick("00")} />
      <Button value="." theme="number" onClick={() => handleClick(".")} />
      <Button value="=" theme="equal" onClick={() => calculate()} />
    </div>
  );
};
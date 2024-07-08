type ButtonProps = {
  value: string;
  onClick?: () => void;
  theme: "number" | "operator" | "equal" | "remove";
};

const Button = (props: ButtonProps) => {
  let buttonTheme = "";

  switch (props.theme) {
    case "number":
      buttonTheme = "bg-indigo-300";
      break;
    case "operator":
      buttonTheme = "bg-indigo-600";
      break;
    case "equal":
      buttonTheme = "bg-zinc-900";
      break;
    case "remove":
      buttonTheme = "bg-red-500";
      break;
    default:
      buttonTheme = "bg-indigo-300";
      break;
  }

  return (
    <button
      type="button"
      className={`p-4 text-2xl font-bold rounded text-white ${buttonTheme}`}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

export default Button;

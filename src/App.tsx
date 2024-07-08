import { ButtonArea } from "./components/ButtonArea";
import ResultBox from "./components/ResultBox";

const App = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="p-6 bg-white rounded-xl lg:w-1/3">
        <ResultBox />
        <ButtonArea />
      </div>
    </section>
  );
};

export default App;

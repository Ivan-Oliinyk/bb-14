import "./app.scss";
import getRandomRgbColor from "./helpers/getRandomRgbColor";

const App = () => {
  return (
    <div className="container">
      <ul className="list">
        <li className="item" style={{ backgroundColor: getRandomRgbColor() }}>
          <p>1</p>
        </li>
        <li className="item" style={{ backgroundColor: getRandomRgbColor() }}>
          2
        </li>
        <li className="item" style={{ backgroundColor: getRandomRgbColor() }}>
          3
        </li>
        <li className="item" style={{ backgroundColor: getRandomRgbColor() }}>
          4
        </li>
        <li className="item" style={{ backgroundColor: getRandomRgbColor() }}>
          5
        </li>
        <li className="item" style={{ backgroundColor: getRandomRgbColor() }}>
          6
        </li>
        <li className="item" style={{ backgroundColor: getRandomRgbColor() }}>
          7
        </li>
        <li className="item" style={{ backgroundColor: getRandomRgbColor() }}>
          8
        </li>
        <li className="item" style={{ backgroundColor: getRandomRgbColor() }}>
          9
        </li>
      </ul>
    </div>
  );
};

export default App;

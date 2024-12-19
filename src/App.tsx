import { useState } from "react";
import cardBackground from "./assets/background.svg";
import logoRshb from "./assets/logo-rshb.svg";
import logoMir from "./assets/logo-mir.svg";
import eye from "./assets/eye.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("#00AEBE");

  return (
    <main>
      <h1>Демо рубашки карты</h1>

      <section>
        <fieldset>
          <legend>Выберите цвет рубашки карты</legend>

          <div>
            <input
              type="color"
              name="color"
              id="color"
              value={color}
              onChange={(event) => setColor(event.target.value)}
            />
          </div>
        </fieldset>

        <div className="card">
          <img className="background" src={cardBackground} />
          <div className="color" style={{ background: color }}></div>
          <img className="logo" src={logoRshb} />
          <img className="logo-mir" src={logoMir} />
          <div className="info">
            <span>Кредитная</span>
            <span className="number">
              **9023 <img src={eye} />
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;

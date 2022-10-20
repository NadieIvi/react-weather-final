import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />
        <footer>
          This project was coded by Nadie Ivanitska and is{" "}
          <a
            href="https://github.com/NadieIvi/react-weather-final"
            target="_blank"
            rel="noreferrer"
          >
            open-soursed on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://635143cc5a82b92e045ff185--roaring-biscochitos-e8e105.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

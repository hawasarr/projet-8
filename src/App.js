import React, { useState } from "react";
import { BsSun } from "react-icons/bs";
import "./index.css";
const api = {
  key: "dfa1cd46fe6a1961fe572d5d2218a28e",
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  // console.log(weather);

  const appelApi = () => {
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then((reponse) => {
        return reponse.json();
      })
      .then((data) => {
        console.log({ data });
        return setWeather(data);
      });
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Application Meteo</h1>
        <input
          type="text"
          className="App-link"
          placeholder="Entrer le nom du ville"
          onChange={(e) => {
            setCity(e.target.value);
            console.log(city);
          }}
          value={city}
        />
        <button className="btn-submit" onClick={appelApi}>
          Envoyer
        </button>
        {weather ? (
          <div>
            <p>
              {weather.name},{weather.sys.country}
            </p>
            <p>{new Date().toLocaleString()}</p>
            <p>Temprature: {Math.round(weather.main.temp)}°C</p>
            <p>humidity: {Math.round(weather.main.humidity)}%</p>
            <div className="div">
              <p className="p1">{weather.weather[0].description}</p>
              <BsSun color="black" />
            </div>
          </div>
        ) : null}{" "}
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <section className="weather-app">
      <div className="form">
        <form id="search-form">
          <input
            type="search"
            placeholder="Enter a city..."
            required
            className="search-form"
            id="search-input"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </div>

      <h1 id="city">Caracas</h1>
      <div className="data">
        <div className="temperature">
          <img
            id="icon"
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
          />
          <span id="temperature">21</span>
          <span id="unit">°C</span>
        </div>
        <div>
          Humidity:
          <span className="humidity">
            <span id="humidity-value">87</span>%
          </span>
          <br />
          Wind:{" "}
          <span className="wind">
            <span id="wind-value">7.2</span> km/h
          </span>
        </div>
        <div className="current">
          <span id="weekday">Tuesday</span>, <span id="hour">12</span>:
          <span id="minutes">15</span>
          <br />
          <span id="weather">clear sky</span>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default App;

import React, { useState } from "react";
import WeatherCard from "./components/weatherCard";
import Shimmer from "./components/shimmer";

const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = "aa7f20d1838653ca605d367fad715df8";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchLocation = async (e) => {
    if (e.key === "Enter") {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLocation("");
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-black to-slate-800 flex flex-col items-center">
      <div className="p-5">
        <input
          type="text"
          className="w-[250px] sm:w-[600px] text-lg rounded-3xl border border-gray-700 bg-slate-700 p-2 text-gray-300 focus:outline-none shadow-slate-800 shadow-md placeholder:text-center"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDownCapture={searchLocation}
        />
      </div>
      {isLoading ? <Shimmer /> : <WeatherCard weatherData={data} />}
    </div>
  );
};

export default App;

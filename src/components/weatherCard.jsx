import React from "react";

const WeatherCard = ({ weatherData }) => {
  const weather =
    weatherData.weather && (weatherData?.main?.temp - 273).toFixed();

  const feelsLike =
    weatherData.weather && (weatherData?.main?.feels_like - 273).toFixed();
  return weatherData.weather ? (
    <div className="w-[280px] h-[170px] sm:w-[500px] sm:h-[250px] bg-slate-700 shadow-lg shadow-slate-800 rounded-xl px-6 mt-[100px]">
      <div className="flex justify-between w-full h-[140px]">
        <div className="w-1/2 sm:my-4 mx-auto flex justify-between items-center">
          <div className="flex flex-col items-start justify-between h-full">
            <div>
              <p className="text-md sm:text-lg font-bold font-sans text-slate-200">
                {weatherData?.name},{weatherData?.sys?.country}
              </p>
              <p className="text-xs sm:text-sm text-slate-400">
                {weatherData?.weather[0]?.description}
              </p>
            </div>
            <div>
              <h1 className="text-2xl sm:text-5xl font-semibold text-slate-200">
                {weather} °C
              </h1>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-col justify-between items-end h-[140px]">
          <div className="relative">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`}
              alt=""
              className="w-14 sm:w-[100px]"
            />
          </div>
          {weatherData.name !== undefined ? (
            <div className="flex flex-col justify-evenly my-2 gap-y-1 sm:my-4 sm:gap-y-2 mx-auto text-xs">
              <div className="flex justify-between gap-x-10 sm:gap-x-28">
                <p>Feels Like</p>
                <p className="font-semibold sm:font-bold w-20">{feelsLike}</p>
              </div>
              <div className="flex justify-between gap-x-10">
                <p>Humidity</p>
                <p className="font-semibold sm:font-bold w-20">
                  {weatherData?.main?.humidity} %
                </p>
              </div>
              <div className="flex justify-between gap-x-6">
                <p>Wind Speed</p>
                <p className="font-semibold sm:font-bold w-20">
                  {weatherData?.wind?.speed.toFixed()} KPH
                </p>
              </div>
              <div className="flex justify-between gap-x-5">
                <p>Pressure</p>
                <p className="font-semibold sm:font-bold w-20">
                  {weatherData?.main?.pressure} hpa
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  ) : null;
};

export default WeatherCard;

import { useRef, useState } from "react";
import { getWeatherData } from "../functions/getWeatherData";
import CurrentWeather from "./CurrentWeather";
import returnTimeRn from "../functions/returnTimeRn";
import getForecast from "../functions/getForecast";

import getCoordinates from "../functions/getCoordinates";
interface Props {
  data: object;
  setData: (data: object) => void;
  setActiveBtn: (data: boolean) => void;
  activeBtn: boolean;
}
export default function SearchComponent({
  data,
  setData,
  setActiveBtn,
  activeBtn,
}: Props) {
  const [isPressed, setIsPressed] = useState(false);
  const [time, setTime] = useState("");
  const [forecastTemps, setForecastTemps] = useState(null);
  const [cityName, setCityName] = useState("");
  const [cityCountry, setCityCountry] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const getWeather = async (val: string) => {
    const date = new Date();
    const coordinates = await getCoordinates(val);
    const lat = coordinates["lat"];
    const lon = coordinates["lon"];
    const weatherData = await getWeatherData(val, activeBtn, lat, lon);
    const forecastData = await getForecast(lat, lon, activeBtn);
    console.log(weatherData);

    if (!weatherData) {
      console.log("not working weather data returning null");
      return;
    }
    if (!forecastData) {
      console.log("not working weather data returning null forecast");
      return;
    }

    setData(weatherData);
    setIsPressed(true);
    setTime(returnTimeRn(date));
    setForecastTemps(forecastData);
    setCityName(coordinates.name);
    setCityCountry(coordinates.country);
  };

  return (
    <>
      <div className="w-full max-w-[580px] mb-14">
        <div className="flex items-center gap-3 bg-white/[0.06] border border-white/[0.11] rounded-full py-[7px] pl-[22px] pr-[7px] backdrop-blur-xl transition-colors focus-within:border-[rgba(0,210,190,0.45)]">
          <span className="text-base opacity-50 shrink-0">🔍</span>
          <input
            // value="cairo"
            type="text"
            ref={inputRef}
            onKeyDown={(event) => {
              const val = (event.target as HTMLInputElement).value;
              if (!val) {
                return;
              }
              if (event.key.toLowerCase() === "enter") {
                getWeather(val);
              }
            }}
            placeholder="Search for a city..."
            className="flex-1 bg-transparent border-none outline-none text-[15px] text-white placeholder:text-white/30"
          />
          <button
            className="bg-gradient-to-br from-[#00c8b8] to-[#0080ff] rounded-full py-[11px] px-6 text-sm font-medium text-white shrink-0 hover:opacity-80 active:scale-95 transition-all cursor-pointer"
            onClick={() => {
              const inputValue: string | undefined = inputRef.current?.value;
              if (inputValue === undefined || inputValue === "") {
                return;
              }
              console.log(inputValue);
              getWeather(inputValue);
            }}
          >
            Search
          </button>
        </div>
      </div>
      {isPressed === true ? (
        <>
          <CurrentWeather
            time={time}
            forecast={forecastTemps}
            resp={data}
            activeBtn={activeBtn}
            setActiveBtn={setActiveBtn}
            name={cityName}
            country={cityCountry}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

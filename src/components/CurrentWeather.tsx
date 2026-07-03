import { useEffect, useState } from "react";
import UnitToggle from "./UnitToggle";
import Forecast from "./Forecast";

interface Props {
  activeBtn: boolean;
  setActiveBtn: (celsuis: boolean) => void;
  resp: any;
  time: string;
  forecast: any;
  name: string;
  country: string;
}
export default function CurrentWeather({
  activeBtn,
  resp,
  forecast,
  time,
  setActiveBtn,
  name,
  country,
}: Props) {
  console.log("current weather data", resp);

  const data = resp.data;
  const current = data.current;
  const temperature = Math.round(current.temperature_2m);
  const [temp, setTemp] = useState(temperature);
  const humidity = current.relative_humidity_2m;
  const feelsLike = Math.round(current.apparent_temperature);
  const [feelsLikeTemp, setFeelsLikeTemp] = useState(feelsLike);
  const windSpeed = Math.round(current.wind_speed_10m);
  const minTemp = Math.round(data.daily.temperature_2m_min[0]);
  const maxTemp = Math.round(data.daily.temperature_2m_max[0]);
  useEffect(() => {
    setTemp(temperature);
    setFeelsLikeTemp(feelsLike);
  }, [data]);
  return (
    <>
      <div className="text-center mb-14">
        <p className="text-[17px] font-medium text-white/90 mb-1">
          {name}, {country}
        </p>
        <p className="text-[13px] text-white/30 mb-7">{time}</p>
        <UnitToggle
          setFeelsLikeTemp={setFeelsLikeTemp}
          FeelsLikeTemp={feelsLikeTemp}
          temp={temp}
          setTemp={setTemp}
          activeBtn={activeBtn}
          setActiveBtn={setActiveBtn}
        />
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-[60px] drop-shadow-[0_0_28px_rgba(0,210,190,0.3)]">
            ⛅
          </span>
          <span className="temp-gradient text-[118px] font-light leading-none tracking-[-6px]">
            {temp}°
          </span>
          <span className="self-start mt-6 text-xs font-medium text-white/40 bg-white/5 border border-white/[0.08] rounded-full px-2 py-0.5">
            {activeBtn === true ? "F" : "C"}
          </span>
        </div>

        <p className="text-[17px] text-[rgba(0,210,185,0.75)] mb-9">
          Partly Cloudy
        </p>

        <div className="flex items-center justify-center gap-7">
          <div className="flex flex-col items-center gap-1">
            <span className="text-lg font-medium">{humidity}%</span>
            <span className="text-xs text-white/30">💧 Humidity</span>
          </div>
          <div className="w-px h-9 bg-white/10"></div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-lg font-medium">{windSpeed} mph</span>
            <span className="text-xs text-white/30">💨 Wind</span>
          </div>
          <div className="w-px h-9 bg-white/10"></div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-lg font-medium">
              {feelsLikeTemp}°{activeBtn === true ? "F" : "C"}
            </span>
            <span className="text-xs text-white/30">🌡 Feels like</span>
          </div>
        </div>
      </div>
      <Forecast
        data={forecast}
        today_min_temp={minTemp}
        today_max_temp={maxTemp}
        activeBtn={activeBtn}
      />
    </>
  );
}

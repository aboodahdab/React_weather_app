import axios from "axios";
// import CityNotFound from "../components/CityNotFound";

type dataType = {
  config: {};
  data: {};
  headers: {};
  request: {};
  status: number;
  statusText: string;
};
async function getWeatherData(
  place: string,
  celsuis: boolean,
  lat: number,
  lon: number,
) {
  let params: Record<string, string | number> = {
    latitude: lat,
    longitude: lon,
    current: "temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m",
    daily: "temperature_2m_max,temperature_2m_min",
    timezone: "auto",
  };
  if (celsuis === true) {
    params["temperature_unit"] = "fahrenheit";
  } else {
    params["temperature_unit"] = "celsius";
  }
  console.log(params);
  const data: dataType = await axios.get(
    `https://api.open-meteo.com/v1/forecast`,
    {
      params: params,
    },
  );

  if (data.status === 200) {
    const dataObj: {} = data.data;
    console.log(dataObj, data);
    return data;
  }
  return null;
}
export { getWeatherData };

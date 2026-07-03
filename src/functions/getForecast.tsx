import axios from "axios";
export default async function getForecast(
  lat: number,
  lon: number,
  celsuis: boolean,
) {
  const query: Record<string, string | number> = {
    latitude: lat,
    longitude: lon,
    daily: "temperature_2m_max,temperature_2m_min,weather_code",
    forecast_days: 6,
    timezone: "auto",
  };
  if (celsuis === true) {
    query["temperature_unit"] = "fahrenheit";
  } else {
    query["temperature_unit"] = "celsius";
  }
  console.log(query);
  const resp = await axios.get("https://api.open-meteo.com/v1/forecast", {
    params: query,
  });

  console.log(resp);
  return resp.data;
}

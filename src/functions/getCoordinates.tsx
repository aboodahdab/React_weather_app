import axios from "axios";

export default async function getCoordinates(city: string) {
  const resp = await axios.get(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`,
  );
  const data = resp.data.results[0];
  console.log(data["latitude"], data["longitude"]);
  return { lat: data["latitude"], lon: data["longitude"], name: data["name"], country: data["country"] };
}

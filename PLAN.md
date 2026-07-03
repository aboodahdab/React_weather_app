# Weather App — Feature Plan

## Context
Building a weather app as a learning project after finishing supersimpledev's React course. Uses a real weather API and allows searching any city.

---

## 1. Default Location

Detect the user's location on load using the browser's Geolocation API and fetch weather for it automatically.

- [ ] Request location permission from the browser on load
- [ ] Fetch weather for the detected coordinates
- [ ] If the user denies permission, show an empty state with just the search bar — no weather data until they search a city

---

## 2. Current Weather Display

Show the current weather for the active location (detected or searched).

- [ ] City name and country
- [ ] Current temperature with a °F / °C unit toggle
- [ ] Weather condition (e.g. Sunny, Rainy, Cloudy)
- [ ] Weather condition icon
- [ ] Humidity percentage
- [ ] Wind speed
- [ ] Feels-like temperature

---

## 3. Search

Let the user search for any city and update the weather display.

- [ ] Search bar input
- [ ] Submit on button click or Enter key
- [ ] Update the weather display with the searched city's data

---

## 4. 7-Day Forecast

Show a week of weather below the current display.

- [ ] Show today + the next 6 days
- [ ] Each day shows: day name, condition icon, high and low temperature

---

## 5. States

Handle the different UI states throughout the app.

- [ ] Empty state — shown on load if the user denies location permission (search bar only)
- [ ] Loading state while waiting for the API response
- [ ] Error state if the city is not found or the request fails

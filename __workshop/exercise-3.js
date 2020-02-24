// Exercise 3 - `getAddressPosition`
// ---------------------------------
// 1. Go to https://darksky.net/dev/ and read the documentation
// 2. Signup and get a free API key
// 3. Complete the code of the function.
// The `position` parameter is an object with `lat` and `lng`.
// 4. Make sure your function only returns a `Promise` for the current temperature
// (a number) and nothing else

// Given a position (latitude and longitude), returns the position
const rp = require("request-promise");

const SECRET_KEY = "370d394f681f1d19e0bd248e20f2378f";
function getCurrentTemperatureAtPosition(position) {
  const latitude = position[0];
  const longitude = position[1];
  rp(
    `https://api.darksky.net/forecast/${SECRET_KEY}/${latitude},${longitude}`
  ).then(data => console.log(JSON.parse(data).currently.temperature));
}

getCurrentTemperatureAtPosition([42.3601, -71.0589]);

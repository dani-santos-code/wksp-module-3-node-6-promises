// Exercise 4 - `getCurrentTemperature`
// -----------------------------------
// While it's useful to get the current temperature for a specific lat/lng,
// most often we want to provide the name of a place instead.
//
// You already created a function that can do address ==> position,
// and one that can do position ==> temperature. For this exercise,
// re-use these two functions to create one that goes directly from address ==> temperature.
//
// You can copy/paste your code from the previous exercises,
// or require them at the top of this file.
// Remember to _export_ them from their file, if you plan on _requiring_ them.

// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
const opencage = require("opencage-api-client");
const currentTemperature = require("./exercise-3");

const getAddressPosition = address => {
  const requestObj = {
    key: "becae4c8eede418886d7001a6ffe8290",
    q: address
  };

  return opencage
    .geocode(requestObj)
    .then(data => {
      if (data.status.code == 200) {
        if (data.results.length > 0) {
          const place = data.results[0];
          return place;
        }
      } else {
      }
    })
    .catch(error => console.log("error", error.message));
};

const getCurrentTemperature = address => {
  return getAddressPosition(address)
    .then(data => data.geometry)
    .then(data =>
      currentTemperature.getCurrentTemperatureAtPosition(data, address)
    );
};

getCurrentTemperature("1090 Rue de Bleury, Montréal, QC H2Z 1N2");

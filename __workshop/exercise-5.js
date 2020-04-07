// Exercise 5 - `getDistanceFromIss`
// ---------------------------------
// Again here you should re-use two previously created functions, plus the `getDistance` function provided to you in `workshop.js`.
//
// One of the functions does address ==> position and the other simply does nothing ==> position.
// The `getDistance` function needs the two positions to compute the final value.

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition

// Euclidian distance between two points
const rp = require("request-promise");
const opencage = require("opencage-api-client");

function getDistance(pos1, pos2, address) {
  //   console.log(pos1, pos2);
  return `The distance between ${address} and ISS is ${Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  )}km`;
}

function getIssPosition() {
  return rp("http://api.open-notify.org/iss-now.json")
    .then(data => JSON.parse(data))
    .then(data => ({
      lat: parseFloat(data.iss_position.latitude),
      lng: parseFloat(data.iss_position.longitude)
    }))
    .catch(e => console.log(e));
}
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
function getDistanceFromIss(address) {
  return getAddressPosition(address)
    .then(data => data.geometry)
    .then(data => {
      const pos1 = data;
      return getIssPosition().then(pos2 => getDistance(pos1, pos2, address));
    });
}
getDistanceFromIss("1090 Rue de Bleury, Montréal, QC H2Z 1N2").then(data =>
  console.log(data)
);

// console.log(getIssPosition().then(data => console.log(data)));

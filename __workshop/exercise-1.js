// Exercise 1 - `getIssPosition`
// -----------------------------
//   1. Install the request-promise module with `yarn`
//      making sure it's added to `package.json`.
//   2. Complete the code of this function so that it returns
//      the position of the ISS as a `Promise`.
//   3. Use the data from http://api.open-notify.org/iss-now.json to do your work
//   4. The ISS API returns the position keys as `latitude` and `longitude`.
//      Return them as `lat` and `lng` instead.

// require the 'request-promise' module.

const rp = require("request-promise");

// Returns the current position of the ISS

function getIssPosition() {
  let lat;
  let lng;
  rp("http://api.open-notify.org/iss-now.json")
    .then(jsonData => {
      parsedData = JSON.parse(jsonData);
      lat = parsedData.iss_position.latitude;
      lng = parsedData.iss_position.longitude;
      console.log({ lat, lng });
    })
    .catch(e => console.log(e));
}

// psst.... don't forget to call the function
getIssPosition();

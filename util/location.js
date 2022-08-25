const axios = require('axios');
const opencage = require('opencage-api-client');

const HttpError = require('../models/http-error');


async function getCoordsForAddress(address) {

  const cords=opencage.geocode({q: address})
  .then(data=>{
    if(data.results.length>0){
      const place = data.results[0];
      console.log(place.formatted);
      console.log(place.geometry);
      console.log(place.annotations.timezone.name);
      return {lat:place.geometry.lat,lng:place.geometry.lng};

    } else {
      console.log('Status', data.status.message);
      console.log('total_results', data.total_results);
    }
  
  }).catch((err)=>{
    console.log('Error', err.message);
  })
  console.log("cords", cords);
  return cords;

}

module.exports = getCoordsForAddress;

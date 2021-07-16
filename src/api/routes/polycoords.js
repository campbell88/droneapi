
const turf = require('turf');
const express = require('express');
const polycoordsRoute = express.Router();
var fs = require('fs'); 
var controlledAirspaceGeoJSON = JSON.parse(fs.readFileSync('././config/faa-controlled-airspace-DTW.json', 'utf8')); /* Inside the get function */

polycoordsRoute.post('/', function (req, res) {
  try{
    var geojson = req.body;
    var controlledAirspace = turf.polygon(controlledAirspaceGeoJSON.features[0].geometry.coordinates);

    if (geojson.features[0].geometry.type === "Polygon"){

      if (geojson.features[0].geometry.coordinates){

        var polygonCoordsFromReq = turf.polygon(geojson.features[0].geometry.coordinates);

      }
    }
    else{
      res.status(200).json({ status: "Error", data: { body: 
        "Invalid GeoJSON" } });
    }

    var intersection = turf.intersect(controlledAirspace, polygonCoordsFromReq);
    if (!intersection)
    {
      intersection = "Free to fly!";
    }

  res.status(200).json({ status: "Success", data: { body: 
    intersection } });
  }
  catch(error){
    return res.status(400).json({error: error.toString() })
  }
})

module.exports = polycoordsRoute;

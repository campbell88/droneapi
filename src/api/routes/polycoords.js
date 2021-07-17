
const turf = require('turf');
const express = require('express');
const polycoordsRoute = express.Router();
var fs = require('fs'); 
var controlledAirspaceGeoJSON = JSON.parse(fs.readFileSync('././config/faa-controlled-airspace-DTW.json', 'utf8')); 

polycoordsRoute.post('/', function (req, res) {
  try{
    var geoJSON = req.body;
    var controlledAirspace = turf.polygon(controlledAirspaceGeoJSON.features[0].geometry.coordinates);

    if (geoJSON.features[0].geometry.type === "Polygon" && geoJSON.features[0].geometry.coordinates){

        var polygonCoordsFromReq = turf.polygon(geoJSON.features[0].geometry.coordinates);

    }
    else{
      res.status(200).json({ status: "Error", data: { body: 
        "Invalid GeoJSON" } });
    }

    var result = turf.intersect(controlledAirspace, polygonCoordsFromReq);

    if (!result)
    {
      result = "Free to fly!";
    }

    res.status(200).json({ status: "Success", data: { "Result": 
      result } });
  }
  catch(error){
    return res.status(400).json({error: error.toString() })
  }
})

module.exports = polycoordsRoute;

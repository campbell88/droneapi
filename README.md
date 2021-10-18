# Drone Coding Challenge

I created an API using NodeJS and Express.The API has a POST endpoint that accepts a GeoJSON object. If the GeoJSON object type is a Polygon, it will use the "intersect" function from TurfJS to see if the polygon intersects the controlled airspace. If they do, the endpoint will return the coordinates showing where they collide. If the polygon does not hit the controlled airspace coordinates, the endpoint will return a message saying "Free to fly!".

## Tools I Used
- Express.Js
- TurfJS
- Postman

## Installation

Make sure you have Node on your machine.

1) Clone My Repo
2) Install dependecies using npm or yarn

```bash
npm install
```
3) Download Postman to test API

## Setup
Run server.js file using node
```bash
cd src/
node server.js
```
## Instructions
1) In Postman, create a new POST request and in the URL, type 127.0.0.1:3000/api/polycoords (or localhost:3000/api/polycoords). 
2) Within your POST request, navigate to the "Body", click "raw" and select "JSON (application/json)".
3) In the Body of the Post request, paste a GeoJSON. You can create sample GeoJSONs here that is close to the controlled airspace:  [GeoJSON.io](https://geojson.io/#map=13/42.2173/-83.3678)
 - I created a polygon that is near DTW and one that is away from DTW to make sure my endpoint works correctly.

## How I Could Have Made It Better
- Use middleware to validate the request
- Plugged in a front end so you don't have to use Postman
- Added a function and removed the logic from the polycoords route file

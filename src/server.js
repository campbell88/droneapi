
const turf = require('turf');
const apiRoutes = require('./api/index');

const express = require('express');


const app = express();
app.use(express.json());

app.use('/api', apiRoutes);

const port = 3000;
app.listen(3000, () => {
    console.log(`App running on ${port}`)
})
app.get("/", (req, res) =>
res.status(200)
.send({ message: "Hello from the server !"}));

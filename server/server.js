const express = require("express"); // Use express as server

const PORT = process.env.PORT || 3001;
const app = express(); // create express app

app.get('/', (req, res) => {
    res.send('Weather App')
  })

app.listen(PORT, (err) => {
    if (err) throw err;

    console.log("Server started!");
})

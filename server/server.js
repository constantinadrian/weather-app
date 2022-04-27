const express = require("express"); // Use express as server
const cookieParser = require("cookie-parser"); // a middleware which parses cookies attached to the client request object
const csrf = require("csurf"); // Use csurf middleware to protect against cross-site request forgery (CSRF)
const cors = require("cors");
const axios = require('axios');

// csrf route
const csrfRoute = require('./api/csrf/csrf.routes')
// weather forecast route
const weatherRoute = require('./api/weather/weather.routes');

// access the env variable
require('dotenv').config()

const PORT = process.env.PORT || 3001;
const app = express(); // create express app

const csrfMiddleware = csrf({ cookie: true }); // create the csrfMiddleware

// The express.json() and express.urlencoded() middleware
// have been added to provide request body parsing (https://expressjs.com/en/api.html)
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // Parse the incoming requests with JSON payloads (for parsing application/json)

// CORS - Cross-Origin Resource Sharing
// middleware that can be used to enable CORS with various options
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    allowedHeaders:
        "Origin, X-Requested-With, Content-Type, Accept, CSRF-Token",
};

app.use(cors(corsOptions));

app.use(cookieParser()); // set app to automaticly work with cookies
app.use(csrfMiddleware); // set and check the csrf related cookie

// Make the token available to all views (http://expressjs.com/en/resources/middleware/csurf.html)
app.use("*", (req, res, next) => {
    res.cookie("XSRF-TOKEN", req.csrfToken(), {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
    });
    next();
});

// error handler (https://www.npmjs.com/package/csurf)
app.use((err, req, res, next) => {
    if (err.code !== "EBADCSRFTOKEN") return next(err);
    err.statusText = "Forbidden"
    err.message = "Invalid csrf token"
    // handle CSRF token errors here
    res.status(err.status).json({ status: err.status, statusText: err.statusText, result: {error: {code: err.code, message: err.message}}});
});

// route for request csrf token
app.use('/api', csrfMiddleware, csrfRoute);

// route for request weather forecast
app.use('/api', csrfMiddleware, weatherRoute);

app.listen(PORT, (err) => {
    if (err) throw err;

    console.log("Server started!");
})

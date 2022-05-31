const axios = require('axios');

const weatherRequest = async (req, res, next) => {
    const getWeatherForcast = () => {
        
        return new Promise ( async (resolve, reject) => {
            try {
                const url = encodeURI(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${req.body['city']}&days=3`);
                const response = await axios(url)
                const data = response;
                resolve(data)
            } catch(err) {
                reject (err)
            }
        })
    }
    
    await getWeatherForcast()
    .then((response) => {
        res.status(response.status).json({status: response.status, statusText: response.statusText, result: response.data});
    })
    .catch(err => {
        // if weather api could not be reach define Custom Error (getaddrinfo ENOTFOUND api.weatherapi.com)
        if (!err.response) {
            err.status = 400;
            err.message = "Weather Api Error";
            res.status(err.status).json({ status: err.status, statusText: err.code, result: {error: {code: err.errno, message: err.message}}});
        // if weather api is reach and the response is an error
        } else {
            res.status(err.response.status).json({status: err.response.status, statusText: err.response.statusText, result: err.response.data});
        }
    });
}

module.exports = weatherRequest;

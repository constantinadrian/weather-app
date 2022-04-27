const axios = require('axios');

const weatherRequest = async (req, res, next) => {
    const getWeatherForcast = () => {
        
        return new Promise ( async (resolve, reject) => {
            try {
                const url = encodeURI(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=oslo&days=3`);
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
        res.status(err.response.status).json({status: err.response.status, statusText: err.response.statusText, result: err.response.data});
    });
}

module.exports = weatherRequest;

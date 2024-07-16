const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + lat + ',' + long + '?unitGroup=metric&key=WBDP2JPD25TTCJZNZHBX5D297&contentType=json';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the weather services', undefined);
        } else if (!body) callback('Unable to locate the address', undefined);
        else {
            const data = body.currentConditions;
            callback(undefined, `${data.conditions}. It is currently ${data.temp} degrees out. There is a ${data.precipprob}% chance of rain.`)
        }
    })
}

module.exports = forecast;
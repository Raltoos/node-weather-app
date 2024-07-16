const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.opencagedata.com/geocode/v1/json?q=' + encodeURI(address) + '&limit=1&no_annotations=1&key=bf5182911dae4ea6873cd47dd2818f17';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the location services', undefined);
        } else if (body.results.length == 0) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                latitude: body.results[0].geometry.lat,
                longitude: body.results[0].geometry.lng,
                location: body.results[0].formatted,
            })
        }
    })
}

module.exports = geocode;
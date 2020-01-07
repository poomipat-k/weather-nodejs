const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/c867f2756b421222a6d87ef10f1d9a01/' + 
    encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si'

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather service", undefined)
        } else if (body.error) {
            callback(body.error, undefined)
        } else {
            const {temperature, precipProbability} = body.currently 
            let message = body.daily.data[0].summary + " It is currently " +
            temperature + " degrees out. There is a " +
            precipProbability + "% chance of rain. Highest temperature " +
            body.daily.data[0].temperatureMax + " degrees and Lowest temperature " +
            body.daily.data[0].temperatureMin + " degrees."
            callback(undefined, message)
        }
    })
}

module.exports = forecast
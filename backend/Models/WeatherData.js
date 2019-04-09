var moment = require("moment");

class WeatherData {

    returnWeatherData(urlQueryObject) { 
        
        return {
            baromin: Number(urlQueryObject.baromin),
            humidity: Number(urlQueryObject.humidity),
            tempf: Number(urlQueryObject.tempf),
            windspeedmph: Number(urlQueryObject.windspeedmph),
            winddir: Number(urlQueryObject.winddir),
            windgustmph: Number(urlQueryObject.windgustmph),
            windgustdir: Number(urlQueryObject.windgustdir),
            dewptf: Number(urlQueryObject.dewptf),
            dailyrainin: Number(urlQueryObject.dailyrainin),
            rainin: Number(urlQueryObject.rainin),
            time: urlQueryObject.time || moment().utc()
        }
    }
}

module.exports = WeatherData;

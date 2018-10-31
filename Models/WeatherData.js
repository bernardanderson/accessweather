class WeatherData {
    constructor(baromin, humidity, tempf, windspeedmph, winddir,
        windgustmph, windgustdir, dewptf, dailyrainin, rainin){
            this.baromin = baromin;
            this.humidity = humidity;
            this.tempf = tempf;
            this.windspeedmph = windspeedmph;
            this.winddir = winddir;
            this.windgustmph = windgustmph;
            this.windgustdir = windgustdir;
            this.dewptf = dewptf;
            this.dailyrainin = dailyrainin;
            this.rainin = rainin;
        }
}

module.exports = WeatherData;
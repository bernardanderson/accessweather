class WeatherData {
    constructor(urlQueryObject){
        this.baromin = Number(urlQueryObject.baromin);
        this.humidity = Number(urlQueryObject.humidity);
        this.tempf = Number(urlQueryObject.tempf);
        this.windspeedmph = Number(urlQueryObject.windspeedmph);
        this.winddir = Number(urlQueryObject.winddir);
        this.windgustmph = Number(urlQueryObject.windgustmph);
        this.windgustdir = Number(urlQueryObject.windgustdir);
        this.dewptf = Number(urlQueryObject.dewptf);
        this.dailyrainin = Number(urlQueryObject.dailyrainin);
        this.rainin = Number(urlQueryObject.rainin);     
    }

    constructor(baromin, humidity, tempf, windspeedmph, winddir,
        windgustmph, windgustdir, dewptf, dailyrainin, rainin){
            this.baromin = Number(baromin);
            this.humidity = Number(humidity);
            this.tempf = Number(tempf);
            this.windspeedmph = Number(windspeedmph);
            this.winddir = Number(winddir);
            this.windgustmph = Number(windgustmph);
            this.windgustdir = Number(windgustdir);
            this.dewptf = Number(dewptf);
            this.dailyrainin = Number(dailyrainin);
            this.rainin = Number(rainin);
        }
}

module.exports = WeatherData;

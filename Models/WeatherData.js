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
        this.time = urlQueryObject.time || Date.now() - (new Date().getTimezoneOffset() * 60 * 1000);
    }
}

module.exports = WeatherData;

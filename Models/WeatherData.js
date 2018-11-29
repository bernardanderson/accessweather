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
        this.time = localTime();
    }
}

// Get the local time
let localTime = function() {
    let currentDate = new Date();
    currentDate.setHours(currentDate.getHours() - (currentDate.getTimezoneOffset() / 60));
    return currentDate;
}

module.exports = WeatherData;

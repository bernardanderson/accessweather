class SqlCommands {

    constructor() {
        this._intializeDataTable = `CREATE TABLE AccuriteAccessData (id INTEGER PRIMARY KEY, baromin NUMERIC NOT NULL, humidity NUMERIC NOT NULL, tempf NUMERIC NOT NULL,
            windspeedmph NUMERIC NOT NULL, winddir NUMERIC NOT NULL, windgustmph NUMERIC NOT NULL, windgustdir NUMERIC NOT NULL, dewptf NUMERIC NOT NULL,
            dailyrainin NUMERIC NOT NULL, rainin NUMERIC NOT NULL, time DATETIME NOT NULL);`;

        this._insertWeatherdata = `INSERT INTO AccuriteAccessData (baromin, humidity, tempf, windspeedmph, winddir, windgustmph, windgustdir, dewptf, dailyrainin, rainin, time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'));`;
        
        this._retrieveLatestWeatherData = `SELECT * FROM AccuriteAccessData ORDER BY time DESC LIMIT 1;`;

        this._retrieveDailyTempHighAndLow = `SELECT max(tempf) as highTemp, min(tempf) as lowTemp, date(time) AS date FROM AccuriteAccessData GROUP BY date;`; 
    }

    get intializeDataTable() {
        return this._intializeDataTable;
    }

    get insertWeatherdata() {
        return this._insertWeatherdata;
    }

    get retrieveLatestWeatherdata() {
        return this._retrieveLatestWeatherData;
    }

    get retrieveDailyTempHighAndLow() {
        return this._retrieveDailyTempHighAndLow;
    }
}

module.exports = SqlCommands;

class SqlCommands {

    constructor() {
        this._intializeDataTable = `CREATE TABLE AccuriteAccessData (id INTEGER PRIMARY KEY, baromin NUMERIC NOT NULL, humidity NUMERIC NOT NULL, tempf NUMERIC NOT NULL,
            windspeedmph NUMERIC NOT NULL, winddir NUMERIC NOT NULL, windgustmph NUMERIC NOT NULL, windgustdir NUMERIC NOT NULL, dewptf NUMERIC NOT NULL,
            dailyrainin NUMERIC NOT NULL, rainin NUMERIC NOT NULL, time DATETIME NOT NULL);`;

        this._insertWeatherdata = `INSERT INTO AccuriteAccessData (baromin, humidity, tempf, windspeedmph, winddir, windgustmph, windgustdir, dewptf, dailyrainin, rainin, time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'));`;
        
        this._retrieveLatestWeatherData = 'SELECT * FROM AccuriteAccessData ORDER BY time DESC LIMIT 1';
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
}

module.exports = SqlCommands;

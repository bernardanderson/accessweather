class SqlCommands {

    constructor() {
        this._intializeDataTable = `CREATE TABLE AccuriteAccessData (id INTEGER PRIMARY KEY, barometer NUMERIC NOT NULL, humidity NUMERIC NOT NULL, tempf NUMERIC NOT NULL,
            windspeed NUMERIC NOT NULL, winddir NUMERIC NOT NULL, windgust NUMERIC NOT NULL, windgustdir NUMERIC NOT NULL, dewpoint NUMERIC NOT NULL,
            dailyrain NUMERIC NOT NULL, totalrain NUMERIC NOT NULL, time DATETIME NOT NULL);`;

        this._insertWeatherdata = `INSERT INTO AccuriteAccessData (barometer, humidity, tempf, windspeed, winddir, windgust, windgustdir, dewpoint, dailyrain, totalrain, time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'));`;
    }

    get intializeDataTable() {
        return this._intializeDataTable;
    }

    get insertWeatherdata() {
        return this._insertWeatherdata;
    }
}

module.exports = SqlCommands;

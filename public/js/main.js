var app = new Vue({
    el: '#app',
    data: {
      clock: '',
      weather: '',
      weatherCompassDir: '',
      weatherMapUrl: '',
      isModalActive: false,
      chartData: {
        columns: ['date', 'sales'],
        rows: [
          { 'date': '1/1', 'sales': 123 },
          { 'date': '1/2', 'sales': 1223 },
          { 'date': '1/3', 'sales': 2123 },
          { 'date': '1/4', 'sales': 4123 },
          { 'date': '1/5', 'sales': 3123 },
          { 'date': '1/6', 'sales': 7123 }
        ]
      }
    },
    methods: {
        timer() {
            this.clock = moment().format('MMM Do YYYY, h:mm:ss a');
        },
        determineWindDirection(compassDirection){
            let self = this;
            let compassArray = [[0,22,'N'],[23,67,'NE'],[68,112,'E'],[113,157,'SE'],
                [158,202,'S'],[203,247,'SW'],[248,292,'W'],[293,337,'NW'],[338,360,'N']];
            compassArray.forEach(element => {
                if (element[0] <= compassDirection && compassDirection <= element[1]) {
                    self.weatherCompassDir = element[2];
                }
            });
        },
        getCurrentWeatherData() {
            var self = this;
            this.httpget = axios({
                method:'get',
                url:'/weatherstation/getcurrentweather/'
              }).then(function (response) {
                self.determineWindDirection(response.data.winddir);
                self.weather = response.data;
            });
        },
        getCurrentWeatherMap() {
            this.weatherMapUrl = `http://radar.weather.gov/ridge/lite/N0R/OHX_loop.gif?${Math.random().toString().slice(2)}`;
        },
        toggleModal(){
            this.isModalActive = !this.isModalActive;
        }
    },
    mounted: function(){
        this.timerInterval = setInterval(this.timer, 1000);
        this.getCurrentWeatherInterval = setInterval(this.getCurrentWeatherData, 20000);
        this.getCurrentWeatherMapInterval = setInterval(this.getCurrentWeatherMap, 600600);
    },
    beforeDestroy() {
        clearInterval(this.timerInterval);
        clearInterval(this.getCurrentWeatherInterval);
        clearInterval(this.getCurrentWeatherMapInterval);
      }
});

// Populates the weather data at the start
app.getCurrentWeatherData();
app.getCurrentWeatherMap();

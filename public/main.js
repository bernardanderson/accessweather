var app = new Vue({
    el: '#app',
    data: {
      clock: '',
      weather: '',
      weatherMapUrl: '',
      isModalActive: false
    },
    methods: {
        timer() {
            this.clock = moment().format('MMM Do YYYY, h:mm:ss a');
        },
        getCurrentWeatherData() {
            var self = this;
            this.httpget = axios({
                method:'get',
                url:'http://192.168.0.159:7025/weatherstation/getcurrentweather/'
              }).then(function (response) {
                  self.weather = response.data;
            });
        },
        getCurrentWeatherMap() {
            this.weatherMapUrl = `http://images.intellicast.com/WxImages/Radar/bwg.gif?` + Math.random().toString().slice(2);
        },
        toggleModal(){
            this.isModalActive = !this.isModalActive;
        }
    },
    mounted: function(){
        this.timerInterval = setInterval(this.timer, 1000);
        this.getCurrentWeatherInterval = setInterval(this.getCurrentWeatherData, 30000);
        this.getCurrentWeatherMapInterval = setInterval(this.getCurrentWeatherMap, 1800000);
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

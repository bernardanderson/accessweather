export const SET_CURRENT_WEATHER_DATA = "SET_CURRENT_WEATHER_DATA";

export function setCurrentWeatherData(sentWeatherData) {
    return({type: SET_CURRENT_WEATHER_DATA, sentWeatherData});
}

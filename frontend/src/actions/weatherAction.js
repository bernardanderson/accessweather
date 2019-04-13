import mapper from '../services/ModelMapperService';

export const SET_CURRENT_WEATHER_DATA = "SET_CURRENT_WEATHER_DATA";

export function setCurrentWeatherData(sentWeatherData) {

    sentWeatherData.windDirComp = mapper.windDirectionValueToDirection(sentWeatherData.winddir);
    return({type: SET_CURRENT_WEATHER_DATA, sentWeatherData});
}

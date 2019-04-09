import initialState from "../initialState";
import { SET_CURRENT_WEATHER_DATA } from "../actions/weatherAction";


export default (state = initialState, action) => {

    switch (action.type) {

        case SET_CURRENT_WEATHER_DATA:
            return {
                    ...state ,
                    currentWeatherData: {
                        ...action.sentWeatherData,
                    }
            };

        default:
            return state;
    }
};

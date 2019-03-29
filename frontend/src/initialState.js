import PropTypes from 'prop-types';

export const initialPropState = {
    currentWeatherData: {
        baromin: 0,
        dailyrainin: 0,
        dewptf: 0,
        humidity: 0,
        rainin: 0,
        tempf: 0,
        time: 0,
        winddir: 0,
        windgustdir: 0,
        windgustmph: 0,
        windspeedmph: 0
    }
};

export const initialPropType = {
    currentWeatherData: PropTypes.objectOf(PropTypes.number)
};

export default initialPropState;

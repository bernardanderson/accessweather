import PropTypes from 'prop-types';

export const initialPropState = {
    currentWeatherData: {
        baromin: 0,
        dailyrainin: 0,
        dewptf: 0,
        humidity: 0,
        rainin: 0,
        tempf: 0,
        time: '',
        winddir: 0,
        windDirComp: '',
        windgustdir: 0,
        windgustmph: 0,
        windspeedmph: 0
    }
};

export const initialPropType = {
    currentWeatherData: 
    PropTypes.shape({
        baromin: PropTypes.number,
        dailyrainin: PropTypes.number,
        dewptf: PropTypes.number,
        humidity: PropTypes.number,
        rainin: PropTypes.number,
        tempf: PropTypes.number,
        time: PropTypes.string,
        winddir: PropTypes.number,
        windDirComp: PropTypes.string,
        windgustdir: PropTypes.number,
        windgustmph: PropTypes.number,
        windspeedmph: PropTypes.number
    })
};

export default initialPropState;

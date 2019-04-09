import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as weatherActions from '../../actions/weatherAction';
import initialPropState, { initialPropType } from '../../initialState';
import PropTypes from 'prop-types';
import './OverviewDisplay.scss';
import io from 'socket.io-client';
export const socket = io('http://192.168.0.159:7024');

class OverviewDisplay extends Component {
    
    static propTypes = {
        ...initialPropType,
        setCurrentWeatherData: PropTypes.func
    };
    
    static defaultProps = {
        ...initialPropState
    };
    
    constructor(props, context) {
        super(props, context);

        socket.on('currentWeatherData', (data) => {
            this.props.setCurrentWeatherData(data);
        });
    }
    
    componentDidMount() {
        socket.emit('getCurrentWeatherData');
    }

    getWeather = () => {
        socket.emit('getWeather');
    }

    render() {
        return (
        <div className = "App">
            <button onClick={this.getWeather}>Test redux action</button>
            <pre>
                {`${this.props.currentWeatherData.baromin}`}
            </pre>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    currentWeatherData: state.weatherReducer.currentWeatherData
})

const mapDispatchToProps = (dispatch) => {

    const {
        setCurrentWeatherData
    } = weatherActions;

    return {
        setCurrentWeatherData: (data) => dispatch(setCurrentWeatherData(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OverviewDisplay);

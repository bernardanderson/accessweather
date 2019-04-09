import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as weatherActions from '../../actions/weatherAction';
import initialPropState, { initialPropType } from '../../initialState';
import httpSvc from '../../services/HttpService';
import PropTypes from 'prop-types';
import './OverviewDisplay.scss';
import io from 'socket.io-client';

const socket = io('http://192.168.0.159:7024');

class OverviewDisplay extends Component {

    static propTypes = {
        ...initialPropType,
        simpleAction: PropTypes.func
    };

    static defaultProps = {
        ...initialPropState
    };
    
    constructor(props, context) {
        super(props, context);

        socket.on("welcome", (data) => {
            console.log(data);
        });

        socket.on('receiveWeather', (data) => {
            console.log(data);
        });

    }

    componentDidMount() {
        httpSvc.get();
    }

    simpleAction = () => {
        this.props.simpleAction();
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
        simpleAction
    } = weatherActions;

    return {
        simpleAction: () => dispatch(simpleAction())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OverviewDisplay);

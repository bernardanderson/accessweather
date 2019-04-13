import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialPropState, initialPropType } from '../../initialState';
import PropTypes from 'prop-types';
import './OverviewDisplay.scss';
import moment from 'moment';
import '../../services/SocketIoService';

class OverviewDisplay extends Component {
    
    static propTypes = {
        ...initialPropType,
        setCurrentWeatherData: PropTypes.func
    };
    
    static defaultProps = {
        ...initialPropState

    };

    constructor(props){
        super(props);
    
        this.state = {
            currentTime: moment().format('MMMM Do YYYY, h:mm:ss a'),
            mapUrl: `http://radar.weather.gov/ridge/lite/N0R/OHX_loop.gif?${Math.random().toString().slice(2)}`
        };
    }

    componentDidMount() {
        this.timerInterval = setInterval(this.displayTime, 1000);
        this.getCurrentWeatherMapInterval = setInterval(this.getCurrentWeatherMap, 600000);
    }

    componentWillUnmount() {
        clearInterval(this.timerInterval);
        clearInterval(this.getCurrentWeatherMapInterval);
    }

    displayTime = () => {
        this.setState({
            ...this.state,
            currentTime: moment().format('MMMM Do YYYY, h:mm:ss a')
        });
    }

    convertUTCToLocal = () => {
        return moment.utc(this.props.currentWeatherData.time).local().format('MMMM Do YYYY, h:mm:ss a');
    }

    getCurrentWeatherMap = () => {
        this.setState({
            ...this.state,
            mapUrl: `http://radar.weather.gov/ridge/lite/N0R/OHX_loop.gif?${Math.random().toString().slice(2)}`
        });
    }

    render() {
        const tempHumidityDewpoint = {
            Temperature: <div>{this.props.currentWeatherData.tempf}<span className="smaller-font">°F</span><div className="ui section divider"/></div>,
            Humidity: <div>{this.props.currentWeatherData.humidity}<span className="smaller-font">%</span><div className="ui section divider"/></div>,
            Dewpoint: <div>{this.props.currentWeatherData.dewptf}<span className="smaller-font">°F</span></div>
        };

        const dailyTotalRainPressure = {
            "Today's Rainfall": <div>{this.props.currentWeatherData.dailyrainin}<span className="smaller-font">{"  in".replace(/ /g, "\u00a0")}</span><div className="ui section divider"/></div>,
            "Total Rainfall": <div>{this.props.currentWeatherData.rainin}<span className="smaller-font">{"  in".replace(/ /g, "\u00a0")}</span><div className="ui section divider"/></div>,
            "Pressure": <div>{this.props.currentWeatherData.baromin}<span className="smaller-font">{"  in".replace(/ /g, "\u00a0")}</span></div>,
        };

        return (
        <div className = "App overview-display">
            <div className="twelve wide column time-top-margin">
                <div className="larger-font">
                    <h1 className="ui small center aligned header">
                        {this.state.currentTime}
                        <div className="sub header sub-font-size">
                            Last Updated: {this.convertUTCToLocal()}
                        </div>
                    </h1>
                </div>
            </div>
            <div className="ui section divider"/>
            <div className="ui equal width grid">
                <div className="column">
                    { 
                        Object.keys(tempHumidityDewpoint).map(key => 
                            <div key={key}>
                                    <h1 className="ui center aligned header">
                                        {key}
                                    </h1>
                                <div className="larger-font">
                                    <div className="ui huge center aligned header">
                                        {tempHumidityDewpoint[key]}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="six wide column">
                    <div>
                        <h1 className="ui center aligned header">
                            Windspeed & Direction
                        </h1>
                        <div className="larger-font">
                            <div className="ui huge center aligned header">
                                {this.props.currentWeatherData.windspeedmph}
                                <span className="smaller-font">{"MPH  ".replace(/ /g, "\u00a0")}</span>
                                <span className="medium-font">{this.props.currentWeatherData.windDirComp}</span>
                            </div>
                        </div>
                        <div className="ui section divider"/>
                    </div>
                    <div className="image-container">
                        <img className="ui centered rounded image img-width" alt="Weather map" src={this.state.mapUrl} />
                    </div>
                </div>
                <div className="column">
                    { 
                        Object.keys(dailyTotalRainPressure).map(key => 
                            <div key={key}>
                                    <h1 className="ui center aligned header">
                                        {key}
                                    </h1>
                                <div className="larger-font">
                                    <div className="ui huge center aligned header">
                                        {dailyTotalRainPressure[key]}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    currentWeatherData: state.weatherReducer.currentWeatherData
});

// const mapDispatchToProps = (dispatch) => {

//     const {
//         setCurrentWeatherData
//     } = weatherActions;

//     return {
//         setCurrentWeatherData: (data) => dispatch(setCurrentWeatherData(data))
//     };
// };

export default connect(mapStateToProps/*, mapDispatchToProps*/)(OverviewDisplay);

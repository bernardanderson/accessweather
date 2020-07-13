import React, {useState, useEffect} from 'react';
import { useRecoilState } from 'recoil';
import { weatherState } from "../../atoms/weatherState";
import moment from 'moment';
import '../../services/SocketIoService';
import './OverviewDisplay.scss';

const OverviewDisplay = () => {
    const getWeatherMapUrl = () => `http://radar.weather.gov/ridge/lite/N0R/HPX_loop.gif?${Math.random().toString().slice(2)}`;

    const [currentWeatherState, setCurrentWeatherState] = useRecoilState(weatherState);
    const [currentTime, setCurrentTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'));
    const [mapUrl, setMapUrl] = useState(getWeatherMapUrl());

    const displayTime = () => {
        setCurrentTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }


    const getCurrentWeatherMap = () => {
        setMapUrl(getWeatherMapUrl());
    }

    const convertUTCToLocal = () => {
        return moment.utc(currentWeatherState.time).local().format('MMMM Do YYYY, h:mm:ss a');
    }

    useEffect(
        ()=> {
            const timerInterval = setInterval(displayTime, 1000);
            const getCurrentWeatherMapInterval = setInterval(getCurrentWeatherMap, 600000);
            
            return function cleanup() {
                clearInterval(timerInterval);
                clearInterval(getCurrentWeatherMapInterval);
            }
        },[]);
    
    // this.state = {
    //     currentTime: moment().format('MMMM Do YYYY, h:mm:ss a'),
    //     mapUrl: `http://radar.weather.gov/ridge/lite/N0R/OHX_loop.gif?${Math.random().toString().slice(2)}`
    // };


    // componentDidMount() {
    //     this.timerInterval = setInterval(this.displayTime, 1000);
    //     this.getCurrentWeatherMapInterval = setInterval(this.getCurrentWeatherMap, 600000);
    // }

    // componentWillUnmount() {
    //     clearInterval(this.timerInterval);
    //     clearInterval(this.getCurrentWeatherMapInterval);
    // }

    const tempHumidityDewpoint = {
        Temperature: <div>{currentWeatherState.tempf}<span className="smaller-font">°F</span><div className="ui section divider"/></div>,
        Humidity: <div>{currentWeatherState.humidity}<span className="smaller-font">%</span><div className="ui section divider"/></div>,
        Dewpoint: <div>{currentWeatherState.dewptf}<span className="smaller-font">°F</span></div>
    };

    const dailyTotalRainPressure = {
        "Today's Rainfall": <div>{currentWeatherState.dailyrainin}<span className="smaller-font">{"  in".replace(/ /g, "\u00a0")}</span><div className="ui section divider"/></div>,
        "Total Rainfall": <div>{currentWeatherState.rainin}<span className="smaller-font">{"  in".replace(/ /g, "\u00a0")}</span><div className="ui section divider"/></div>,
        "Pressure": <div>{currentWeatherState.baromin}<span className="smaller-font">{"  in".replace(/ /g, "\u00a0")}</span></div>,
    };

    return (
        <div className = "App overview-display">
            <div className="twelve wide column time-top-margin">
                <div className="larger-font">
                    <h1 className="ui small center aligned header">
                        {currentTime}
                        <div className="sub header sub-font-size">
                            Last Updated: {convertUTCToLocal()}
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
                                {currentWeatherState.windspeedmph}
                                <span className="smaller-font">{"MPH  ".replace(/ /g, "\u00a0")}</span>
                                <span className="medium-font">{currentWeatherState.windDirComp}</span>
                            </div>
                        </div>
                        <div className="ui section divider"/>
                    </div>
                    <div className="image-container">
                        <img className="ui centered rounded image img-width" alt="Weather map" src={mapUrl} />
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

export default OverviewDisplay;

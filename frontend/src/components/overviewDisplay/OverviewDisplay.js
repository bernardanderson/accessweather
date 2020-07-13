import React, {useState, useEffect} from 'react';
import { useRecoilValue } from 'recoil';
import { weatherStateMapped } from "../../selectors/weatherStateMapped";
import moment from 'moment';
import './OverviewDisplay.scss';

const OverviewDisplay = () => {
    const getWeatherMapUrl = () => `http://radar.weather.gov/ridge/lite/N0R/HPX_loop.gif?${Math.random().toString().slice(2)}`;
    const getCurrentTime = () => moment().format('MMMM Do YYYY, h:mm:ss a');
    const convertUTCToLocal = () => moment.utc(currentWeatherState.time).local().format('MMMM Do YYYY, h:mm:ss a');

    const currentWeatherState = useRecoilValue(weatherStateMapped);
    const [currentTime, setCurrentTime] = useState(getCurrentTime());
    const [mapUrl, setMapUrl] = useState(getWeatherMapUrl());

    const displayTime = () => {
        setCurrentTime(getCurrentTime());
    }

    const getCurrentWeatherMap = () => {
        setMapUrl(getWeatherMapUrl());
    }

    useEffect(
        ()=> {
            const timerInterval = setInterval(displayTime, 1000);
            const getCurrentWeatherMapInterval = setInterval(getCurrentWeatherMap, 600000);
            
            return () => {
                clearInterval(timerInterval);
                clearInterval(getCurrentWeatherMapInterval);
            }
        },[]);

    const tempHumidityDewpoint = {
        Temperature: <div>{currentWeatherState.tempf}<span className="smaller-font">°F</span><div className="ui section divider"/></div>,
        Humidity: <div>{currentWeatherState.humidity}<span className="smaller-font">%</span><div className="ui section divider"/></div>,
        Dewpoint: <div>{currentWeatherState.dewptf}<span className="smaller-font">°F</span></div>
    };

    const dailyTotalRainPressure = {
        "Today's Total Rainfall": <div>{currentWeatherState.dailyrainin}<span className="smaller-font">{"  in".replace(/ /g, "\u00a0")}</span><div className="ui section divider"/></div>,
        "Sustained Rainfall": <div>{currentWeatherState.rainin}<span className="smaller-font">{"  in".replace(/ /g, "\u00a0")}</span><div className="ui section divider"/></div>,
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

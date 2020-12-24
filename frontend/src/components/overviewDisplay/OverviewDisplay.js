import React, {useState, useEffect} from 'react';
import { useRecoilValue } from 'recoil';
import MapDisplay from '../mapDisplay/MapDisplay';
import { weatherStateMapped } from "../../selectors/weatherStateMapped";
import moment from 'moment';
import './OverviewDisplay.scss';

const OverviewDisplay = () => {
    const currentWeatherState = useRecoilValue(weatherStateMapped);
    const getCurrentTime = () => moment().format('MMMM Do YYYY, h:mm:ss a');
    const convertUTCToLocal = () => moment.utc(currentWeatherState.time).local().format('MMMM Do YYYY, h:mm:ss a');

    const [currentTime, setCurrentTime] = useState(getCurrentTime());

    const displayTime = () => {
        setCurrentTime(getCurrentTime());
    }

    useEffect(
        ()=> {
            const timerInterval = setInterval(displayTime, 1000);
            
            return () => {
                clearInterval(timerInterval);
            }
        },[]);

    const generateEdgeColumn = (columnItems) => {
        
        let indexOfLastItem = Object.keys(columnItems).length-1;
        
        return <div className="edge-column">
            { 
                Object.keys(columnItems).map((key, index) => 
                    <div className="full-width" key={key}>
                            <div className="panel-heading">
                                {key}
                            </div>
                            {columnItems[key]}
                        {index === indexOfLastItem ? '' : <hr /> }
                    </div>
                )
            }
        </div>;
    }

    const tempHumidityDewpoint = {
        Temperature: <div className="sub-item">{currentWeatherState.tempf}<span className="smaller-font">°F</span></div>,
        Humidity: <div className="sub-item">{currentWeatherState.humidity}<span className="smaller-font">%</span></div>,
        Dewpoint: <div className="sub-item">{currentWeatherState.dewptf}<span className="smaller-font">°F</span></div>
    };

    const dailyTotalRainPressure = {
        "Today's Total Rainfall": <div className="sub-item">{currentWeatherState.dailyrainin}<span className="smaller-font">{" in".replace(/ /g, "\u00a0")}</span></div>,
        "Sustained Rainfall": <div className="sub-item">{currentWeatherState.rainin}<span className="smaller-font">{" in".replace(/ /g, "\u00a0")}</span></div>,
        "Pressure": <div className="sub-item">{currentWeatherState.baromin}<span className="smaller-font">{" in".replace(/ /g, "\u00a0")}</span></div>,
    };

    return (
        <div className="access-weather--overview-display">
            <div className="current-time--header">
                    {currentTime}
                    <div className="current-time--last-updated">
                        Last Updated: {convertUTCToLocal()}
                    </div>
            </div>
            <hr />
            <div className="main-data--panel">
                {generateEdgeColumn(tempHumidityDewpoint)}
                <div className="windspeed-radar--display">
                    <div>
                        <div className="panel-heading">
                            Windspeed & Direction
                        </div>
                        <div className="full-width">
                            <div className="sub-item">
                                {currentWeatherState.windspeedmph}
                                <span className="smaller-font">{"MPH  ".replace(/ /g, "\u00a0")}</span>
                                <span className="medium-font">{currentWeatherState.windDirComp}</span>
                            </div>
                        </div>
                        <hr />
                    </div>
                    {/* <MapDisplay /> */}
                </div>
                {generateEdgeColumn(dailyTotalRainPressure)}
            </div>
        </div>
    );
}

export default OverviewDisplay;

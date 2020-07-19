import React, {useState, useEffect} from 'react';
import MapSelector from './MapSelector';
import './MapDisplay.scss';

const randomizerValue = () => Math.random().toString().slice(2);

const MapDisplay = () => {
    const [mapRadar, setMapRadar] = useState('OHX');
    const [urlRandomizer, setUrlRandomizer] = useState(randomizerValue);
    const [showMap, setShowMap] = useState(true);

    const handleDropdownChange = (radarValue) => {
        setMapRadar(radarValue.target.value);
        setShowMap(true);
    }

    const updateUrlRandomizer = () => {
        setUrlRandomizer(randomizerValue());
    }

    useEffect(
        ()=> {
            const getCurrentWeatherMapInterval = setInterval(updateUrlRandomizer, 600000);

            return () => {
                clearInterval(getCurrentWeatherMapInterval);
            }
        },[]);

    return (
        <div className="image-container">
            { showMap ? 
                <img className="img-width" 
                        alt="Weather Map" 
                        src={`http://radar.weather.gov/ridge/lite/N0R/${mapRadar}_loop.gif?${urlRandomizer}`} 
                        onClick={() => setShowMap(false)}
                /> :
                <MapSelector currentRadarValue={mapRadar} handleDropdownChange={handleDropdownChange}/>
            }
        </div>
    );
}

export default MapDisplay;

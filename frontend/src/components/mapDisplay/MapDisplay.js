import React, {useState, useEffect} from 'react';
import MapSelector from './MapSelector';
import './MapDisplay.scss';

const MapDisplay = () => {
    const [mapRadar, setMapRadar] = useState('OHX');
    const getWeatherMapUrl = (radarValue) => `http://radar.weather.gov/ridge/lite/N0R/${radarValue}_loop.gif?${Math.random().toString().slice(2)}`;
    const [mapUrl, setMapUrl] = useState(getWeatherMapUrl(mapRadar));
    const [showMap, setShowMap] = useState(true);

    const updateWeatherMapImage = (mapRadar) => {
        setMapUrl(getWeatherMapUrl(mapRadar));
    }

    const handleDropdownChange = (radarValue) => {
        setMapRadar(radarValue.target.value);
        updateWeatherMapImage(radarValue.target.value);
        setShowMap(true);
    }

    useEffect(
        ()=> {
            const getCurrentWeatherMapInterval = setInterval(updateWeatherMapImage, 600000);
            return () => {
                clearInterval(getCurrentWeatherMapInterval);
            }
        },[]);

    return (
        <>
            <div className="image-container">
                { showMap ? 
                    <img className="img-width" alt="Weather map" src={mapUrl} onClick={() => setShowMap(false)}/> :
                    <MapSelector currentRadarValue={mapRadar} handleDropdownChange={handleDropdownChange}/>
                }
            </div>
        </>
    );
}

export default MapDisplay;

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
                        src={`https://radblast.wunderground.com/cgi-bin/radar/WUNIDS_map?num=12&type=N0R&mapx=400&mapy=240&brand=wui&delay=30&frame=0&scale=1&transx=0&transy=0&severe=0&smooth=0&centerx=400&centery=240&station=OHX&rainsnow=0&lightning=0&noclutter=1&showlabels=1&showstorms=0&rand=${urlRandomizer}`} 
                        onClick={() => setShowMap(false)}
                /> :
                <MapSelector currentRadarValue={mapRadar} handleDropdownChange={handleDropdownChange}/>
            }
        </div>
    );
}

export default MapDisplay;

import React from 'react';
import {radarListing} from './radarListing';

const MapDisplay = ({currentRadarValue, handleDropdownChange}) => {

    return (
        <select name="radars" onChange={handleDropdownChange} value={currentRadarValue}>
            { radarListing.map(radar => <option key={radar.value} value={radar.value}>{radar.label}</option>) }
        </select>
    );
}

export default MapDisplay;

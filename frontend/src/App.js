import React, {useEffect} from 'react';
import OverviewDisplay from './components/overviewDisplay/OverviewDisplay';
import io from 'socket.io-client';
import { useSetRecoilState } from 'recoil';
import { weatherState } from "./atoms/weatherState";

const App = () => {
    const setWeatherState = useSetRecoilState(weatherState);

    useEffect(()=> {
        const socket = io('http://192.168.0.153:7024');

        socket.on('currentWeatherData', (data) => {
            setWeatherState(data);
        });

        socket.emit('getCurrentWeatherData');

        return () => socket.disconnect();
    },[]);

    return (
        <OverviewDisplay />
    );
}

export default App;

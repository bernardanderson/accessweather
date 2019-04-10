import { store } from '../index';
import { setCurrentWeatherData } from '../actions/weatherAction';
import io from 'socket.io-client';
export const socket = io('http://192.168.0.159:7024');

class SocketIoService {

    constructor() {
        socket.on('currentWeatherData', (data) => {
            store.dispatch(setCurrentWeatherData(data));
        });

        socket.emit('getCurrentWeatherData');
    }

}

const sioSvc = new SocketIoService(); 
export default sioSvc;

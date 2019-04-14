import { store } from '../index';
import { setCurrentWeatherData } from '../actions/weatherAction';
import io from 'socket.io-client';

class SocketIoService {
    
    socket = io('http://192.168.0.156:7024');
    
    constructor() {

        this.socket.on('currentWeatherData', (data) => {
            store.dispatch(setCurrentWeatherData(data));
        });
        this.socket.emit('getCurrentWeatherData');
        
        if (!!SocketIoService.instance) {
            return SocketIoService.instance;
        }

        return SocketIoService.instance;
    }
}

const ioSvc = new SocketIoService(); 
export default ioSvc;

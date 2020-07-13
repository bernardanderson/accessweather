import io from 'socket.io-client';
import { useRecoilState } from 'recoil';
import { weatherState } from "../atoms/weatherState";
import mapper from './ModelMapperService';

class SocketIoService {
    
    socket = io('http://192.168.0.156:7024');
    
    constructor() {
        // const [weatherState, setWeatherState] = useRecoilState(weatherState);

        this.socket.on('currentWeatherData', (data) => {
            data.windDirComp = mapper.windDirectionValueToDirection(data.winddir);
            console.log(data);
            // setWeatherState({
            //     currentWeatherData: { ...data }
            // });
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

import { selector } from "recoil";
import { weatherState } from "../atoms/weatherState";
import mapper from '../services/ModelMapperService';

export const weatherStateMapped = selector({
    key: 'weatherStateMapped',
    get: ({get}) => {
        let currentWeatherState = {...get(weatherState)}; 

        return {
          ...currentWeatherState,
          windDirComp: mapper.windDirectionValueToDirection(currentWeatherState.winddir),
          dailyrainin: currentWeatherState.dailyrainin.toFixed(2),
          rainin: currentWeatherState.rainin.toFixed(2)
        }
    }
});

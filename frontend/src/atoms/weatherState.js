import { atom } from "recoil";

export const weatherState = atom({
    key: "weatherState",
    default: {
            baromin: 0,
            dailyrainin: 0,
            dewptf: 0,
            humidity: 0,
            rainin: 0,
            tempf: 0,
            time: '',
            winddir: 0,
            windDirComp: '',
            windgustdir: 0,
            windgustmph: 0,
            windspeedmph: 0
        }
});

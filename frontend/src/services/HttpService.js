import axios from "axios";

const baseUrl = "http://192.168.0.159:7025";

class HttpService {

    get = () => {
        axios.get(`${baseUrl}/weatherstation/getcurrentweather`)
            .then((response) => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            });
    }
}

const httpSvc = new HttpService();
export default httpSvc;

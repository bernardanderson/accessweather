class ModelMapperService { 

    windDirectionValueToDirection = (directionValue) => {

        let compassArray = [[0,22,'N'],[23,67,'NE'],[68,112,'E'],[113,157,'SE'],
            [158,202,'S'],[203,247,'SW'],[248,292,'W'],[293,337,'NW'],[338,360,'N']];
        
        let weatherCompassDir = "";
        compassArray.forEach(element => {
            if (element[0] <= directionValue && directionValue <= element[1]) {
                weatherCompassDir = element[2];
            }
        });

        return weatherCompassDir;
    }
}

const mapper = new ModelMapperService();
export default mapper;

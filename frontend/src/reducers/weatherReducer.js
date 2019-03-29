import initialState from "../initialState";

export default (state = {...initialState}, action) => {

    switch (action.type) {

        case 'SIMPLE_ACTION':
            return {
                    ...state ,
                    currentWeatherData: {
                        ...state.currentWeatherData,
                        baromin: action.payload
                    }
            };

        default:
            return state;
    }
};

import initialState from "../initialState";

export default (state = {...initialState.simpleReducer}, action) => {

    switch (action.type) {

        case 'SIMPLE_ACTION':
            return {
                    ...state ,
                    crazyBool: action.payload
            }

        default:
            return state
    }
}

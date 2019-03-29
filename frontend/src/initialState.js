import PropTypes from 'prop-types';

export const initialPropState = {
    simpleReducer: {
        crazyBool: false
    }
};

export const initialPropType = {
    simpleReducer: PropTypes.shape({
        crazyBool: PropTypes.bool
    })
};

export default initialPropState;

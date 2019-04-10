import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as weatherActions from '../../actions/weatherAction';
import initialPropState, { initialPropType } from '../../initialState';
import PropTypes from 'prop-types';
import './OverviewDisplay.scss';

class OverviewDisplay extends Component {
    
    static propTypes = {
        ...initialPropType,
        setCurrentWeatherData: PropTypes.func
    };
    
    static defaultProps = {
        ...initialPropState
    };
    
    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        return (
        <div className = "App">
            {/* <button onClick={this.getWeather}>Test redux action</button> */}
            <pre>
                {`${this.props.currentWeatherData.baromin}`}
            </pre>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    currentWeatherData: state.weatherReducer.currentWeatherData
})

const mapDispatchToProps = (dispatch) => {

    // const {
    //     setCurrentWeatherData
    // } = weatherActions;

    // return {
    //     setCurrentWeatherData: (data) => dispatch(setCurrentWeatherData(data))
    // };
};

export default connect(mapStateToProps, mapDispatchToProps)(OverviewDisplay);

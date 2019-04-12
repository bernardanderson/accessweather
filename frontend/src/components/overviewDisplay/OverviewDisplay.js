import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialPropState, initialPropType } from '../../initialState';
import PropTypes from 'prop-types';
import './OverviewDisplay.scss';
import ioSvc from '../../services/SocketIoService';

class OverviewDisplay extends Component {
    
    static propTypes = {
        ...initialPropType,
        setCurrentWeatherData: PropTypes.func
    };
    
    static defaultProps = {
        ...initialPropState
    };

    render() {

        const tempHumDew = {
            Temperature: <div>{this.props.currentWeatherData.tempf}<span className="smaller-font">°F</span></div>,
            Humidity: <div>{this.props.currentWeatherData.humidity}<span className="smaller-font">%</span></div>,
            Dewpoint: <div>{this.props.currentWeatherData.dewptf}<span className="smaller-font">°F</span></div>
        };

        return (
        <div className = "App">
            <div className="ui equal width grid overview-display">
                <div className="column">
                    { 
                        Object.keys(tempHumDew).map(key => 
                            <div key={key} className="ui segment">
                                    <h1 className="ui center aligned header">
                                        {key}
                                    </h1>
                                <div className="larger-font">
                                    <div className="ui huge center aligned header">
                                        {tempHumDew[key]}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="eight wide column">
                    <div className="ui segment">
                    </div>
                </div>
                <div className="column">
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    currentWeatherData: state.weatherReducer.currentWeatherData
})

// const mapDispatchToProps = (dispatch) => {

//     const {
//         setCurrentWeatherData
//     } = weatherActions;

//     return {
//         setCurrentWeatherData: (data) => dispatch(setCurrentWeatherData(data))
//     };
// };

export default connect(mapStateToProps/*, mapDispatchToProps*/)(OverviewDisplay);

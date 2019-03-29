import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as weatherActions from './actions/weatherAction';
import initialPropState, { initialPropType } from './initialState';
import httpSvc from './services/HttpService';
import PropTypes from 'prop-types';
import './css/App.scss';

class App extends Component {

    static propTypes = {
        ...initialPropType,
        simpleAction: PropTypes.func
    };

    static defaultProps = {
        ...initialPropState
    };

    // constructor(props, context) {
    //     super(props, context);
    // }

    componentDidMount() {
        httpSvc.get();
    }

    simpleAction = () => {
        this.props.simpleAction();
    }

    render() {
        return (
        <div className = "App">
            <button onClick={this.simpleAction}>Test redux action</button>
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

    const {
        simpleAction
    } = weatherActions;

    return {
        simpleAction: () => dispatch(simpleAction())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

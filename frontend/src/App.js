import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as simpleActions from './actions/simpleAction';
import initialPropState, { initialPropType } from './initialState';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.scss';

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

    simpleAction = () => {
        this.props.simpleAction();
    }

    render() {
        return (
        <div className = "App">
            <header className = "App-header">
                <img src = { logo } className = "App-logo" alt = "logo" />
                <p> Edit <code> src / App.js </code> and save to reload. </p>
            </header>
            <button onClick={this.simpleAction}>Test redux action</button>
            <pre>
                {`${this.props.crazyBool}`}
            </pre>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    crazyBool: state.simpleReducer.crazyBool
})

const mapDispatchToProps = (dispatch) => {

    const {
        simpleAction
    } = simpleActions

    return {
        simpleAction: () => dispatch(simpleAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

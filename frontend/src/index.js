import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.scss';
import OverviewDisplay from './components/overviewDisplay/OverviewDisplay';
import * as serviceWorker from './serviceWorker';





render(
    <Provider store={configureStore()}>
        <OverviewDisplay />
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.scss';
import OverviewDisplay from './components/overviewDisplay/OverviewDisplay';
import * as serviceWorker from './serviceWorker';

export const store = configureStore();

render(
    <Provider store={store}>
        <OverviewDisplay />
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();

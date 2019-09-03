import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import WeatherAppContainer from './containers/WeatherAppContainer';
import { fetchWeatherData } from './actions/weatherDataActions';
import weatherApiMiddleware from './middleware/weatherApiMiddleware';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(weatherApiMiddleware)),
);

ReactDOM.render(
  <Provider store={store}>
    <WeatherAppContainer />
  </Provider>,
  document.getElementById('root'),
);

store.dispatch(fetchWeatherData('Stockholm'));

import { types as weatherDataActions, fetchWeatherDataResponse } from '../actions/weatherDataActions';

const weatherApiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case weatherDataActions.FETCH_WEATHER_DATA:
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${action.query}&APPID=aff2b592970a65abe4953650a6a956d7`)
        .then((response) => response.json())
        .then((json) => {
          store.dispatch(fetchWeatherDataResponse(json));
        });

      break;

    default:
    // Do nothing
  }

  next(action);
};

export default weatherApiMiddleware;

import React from 'react';
import PropTypes from 'prop-types';
import '../css/WeatherDisplay.css';
import { kelvinToCelsius } from '../utils/temperature';
import { getWeatherIconUrl } from '../api';

class WeatherDisplay extends React.PureComponent {
  render() {
    const { data, status } = this.props;

    if (status === 'error' && data && data.message) {
      return <p>{data.message}</p>;
    }

    if (status !== 'ok') return null;

    const location = data.name;
    const weatherDescription = data.weather[0].main;
    const temperature = Math.round(kelvinToCelsius(data.main.temp));
    const weatherIconId = data.weather[0].icon;

    return (
      <section className="display-section">
        <div className="weather-info">
          <div className="weather-description">{weatherDescription}</div>
          <img src={getWeatherIconUrl(weatherIconId)} className="weather-icon" alt="" />
        </div>
        <div className="temperature">{`${temperature}°C`}</div>
        <div className="location">{location}</div>
      </section>
    );
  }
}

WeatherDisplay.propTypes = {
  data: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
};

export default WeatherDisplay;

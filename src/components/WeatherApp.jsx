import React from 'react';
import PropTypes from 'prop-types';
import SearchContainer from '../containers/SearchContainer';
import WeatherDisplayContainer from '../containers/WeatherDisplayContainer';
import '../css/WeatherApp.css';

export default class WeatherApp extends React.PureComponent {
  render() {
    const { fetchWeatherData } = this.props;

    return (
      <main className="main">
        <SearchContainer
          fetchWeatherData={fetchWeatherData}
          className="search-section"
        />
        <WeatherDisplayContainer className="weather-display" />
      </main>
    );
  }
}

WeatherApp.propTypes = {
  fetchWeatherData: PropTypes.func.isRequired,
};

// const WeatherApp = ({ data }) => (
//   <main className="main">
//     <SearchContainer className="search-section" />
//     {/* <WeatherDisplay className="weather-display" /> */}
//   </main>
// );

// export default WeatherApp;

import React from 'react';
import '../css/WeatherDisplay.css';

class WeatherDisplay extends React.PureComponent {
  render() {
    return (
      <section className="weather-section">
        <div className="weather-icon">Sun</div>
        <div className="temperature">21°C</div>
        <div className="city">Stockholm</div>
      </section>
    );
  }
}

export default WeatherDisplay;

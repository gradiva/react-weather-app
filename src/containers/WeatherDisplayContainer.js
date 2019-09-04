import { connect } from 'react-redux';
import WeatherDisplay from '../components/WeatherDisplay';
import { fetchWeatherData } from '../actions/weatherDataActions';

const mapStateToProps = (state) => ({
  data: state.weatherData.data,
  status: state.weatherData.status,
});

const mapDispatchToProps = {
  fetchWeatherData,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDisplay);

import { connect } from 'react-redux';
import WeatherApp from '../components/WeatherApp';
import { fetchWeatherData } from '../actions/weatherDataActions';

const mapStateToProps = (state) => ({
  data: state.weatherData.data,
  status: state.weatherData.status,
});

const mapDispatchToProps = {
  fetchWeatherData,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);

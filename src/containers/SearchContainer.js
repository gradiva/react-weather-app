
import { connect } from 'react-redux';
import Search from '../components/Search';
import { fetchWeatherData, fetchWeatherDataResponse } from '../actions/weatherDataActions';

const mapStateToProps = (state) => ({
  data: state.weatherData.data,
  status: state.weatherData.status,
});

const mapDispatchToProps = {
  fetchWeatherData,
  fetchWeatherDataResponse,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);


import { connect } from 'react-redux';
import Search from '../components/Search';
import { fetchWeatherDataResponse } from '../actions/weatherDataActions';

const mapStateToProps = (state) => ({
  data: state.weatherData.data,
  status: state.weatherData.status,
});

const mapDispatchToProps = {
  fetchWeatherDataResponse,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

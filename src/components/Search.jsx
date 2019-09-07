import React from 'react';
import PropTypes from 'prop-types';
import '../css/Search.css';

class Search extends React.PureComponent {
  constructor(props) {
    super(props);
    this.inputFieldRef = React.createRef();
  }

  onSubmit = (event) => {
    event.preventDefault();

    const { fetchWeatherData } = this.props;
    const query = this.inputFieldRef.current.value;

    fetchWeatherData(query);
  }

  render() {
    return (
      <section className="search-section">
        <form onSubmit={this.onSubmit}>
          <label htmlFor="location">
            Location
            <input ref={this.inputFieldRef} type="text" name="location" />
          </label>
          <button className="search-button" type="submit">Search</button>
        </form>
      </section>
    );
  }
}

Search.propTypes = {
  fetchWeatherData: PropTypes.func.isRequired,
};

export default Search;

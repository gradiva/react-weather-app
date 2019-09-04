import React from 'react';
import PropTypes from 'prop-types';
import '../css/Search.css';

class Search extends React.PureComponent {
  constructor(props) {
    super(props);

    this.formRef = React.createRef();
    this.locationRef = React.createRef();
  }

  render() {
    const { onClick } = this.props;
    return (
      <section className="search-section">
        <form ref={this.formRef}>
          <label htmlFor="location">
            Location
            <input ref={this.titleRef} type="text" name="location" />
          </label>
          <button className="search-button" type="button" onClick={onClick}>Search</button>
        </form>
      </section>
    );
  }
}

Search.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Search;

import React from 'react';
import './Search.css';

class Search extends React.PureComponent {
  constructor(props) {
    super(props);

    this.formRef = React.createRef();
    this.locationRef = React.createRef();
  }

  render() {
    return (
      <section className="search-section">
        <form ref={this.formRef}>
          <label htmlFor="location">
            Location
            <input ref={this.titleRef} type="text" name="location" />
          </label>
          <div>
            {/* <Button className="button search" onClick={alert('test')} value="Search" /> */}
          </div>
        </form>
      </section>
    );
  }
}

export default Search;

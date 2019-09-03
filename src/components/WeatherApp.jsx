import React from 'react';
import './WeatherApp.css';
import SearchContainer from '../containers/SearchContainer';

// export default class WeatherApp extends React.PureComponent {
//   render() {
//     return (
//       <main className="main">
//         {/* <Search className="search-section" />
//         <WeatherDisplay className="weather-display" /> */}
//       </main>
//     );
//   }
// }

const WeatherApp = ({ data }) => (
  <main className="main">
    <SearchContainer className="search-section" />
    {/* <WeatherDisplay className="weather-display" /> */}
  </main>
);

export default WeatherApp;

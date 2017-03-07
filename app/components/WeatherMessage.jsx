const React = require('react');

// let WeatherMessage = React.createClass({
//   render: function() {
//     var {location, temp} = this.props;
//     return (
//       <p>It's {temp} in {location}</p>
//     );
//   }
// });

let WeatherMessage = ({temp, location}) => {
  return (
     <p>It's {temp} in {location}</p>
  );
};

module.exports = WeatherMessage;

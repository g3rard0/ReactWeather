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
     <h3 className="text-center">It's {temp} in {location}</h3>
  );
};

module.exports = WeatherMessage;

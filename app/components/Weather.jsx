var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    // return {
    //   location: 'Miami',
    //   temp: 88
    // }
    return {
      isLoading: false
    }
  },

  onSearch: function (location) {
    var _this = this;
    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function  (temp) {
      console.log(temp);
      _this.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (err) {
      console.log(err);
      _this.setState({
        isLoading: false
      });
    });
  },

  render: function() {
    var {location, temp, isLoading} = this.state;

    function renderMessage () {
      if(isLoading) {
         return <h3 className="text-center">Fetching weather...</h3>;
      } else if(location && temp) {
         return <WeatherMessage location={location} temp={temp}/>;
      } else {
        return;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.onSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;

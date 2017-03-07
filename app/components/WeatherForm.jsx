const React = require('react');

let WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    const location = this.location.value;

    if (location.length > 0) {
      console.log(location);
      this.location.value = '';
      this.props.onSearch(location);
    }
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref={input => this.location = input}/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;

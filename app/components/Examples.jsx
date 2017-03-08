const React = require('react');
var {Link} = require('react-router');

// let Examples = React.createClass({
//   render: function () {
//     return (
//       <p>Examples</p>
//     );
//   }
// });

let Examples = () => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out</p>
      <ol>
        <li><Link to="/?q=location=Merced">Merced,Ca</Link></li>
        <li><Link to="/?q=location=Rio">Rio, Brazil</Link></li>
      </ol>
    </div>
  );
};

module.exports = Examples;

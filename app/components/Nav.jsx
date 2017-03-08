const React = require('react');
const {Link, IndexLink} = require('react-router');

let Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    alert('form submitted');
  },

  render: function () {
    return (//<Link to="/about">About</Link>
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Weather</li>
          <li>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
          </li>
          <li>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
          </li>
          <li>
            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <form onSubmit={this.onSearch}>
          <ul className="menu">
            <li>
              <input type="search" placeholder="Search" />
            </li>
            <li>
              <button type="button" className="button">Search</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
    );
  }
});


// let Nav = () => {
//   return (
//     <div className="top-bar">
//       <div className="top-bar-left">
//         <ul className="menu">
//           <li className="menu-text">React Weather</li>
//           <li>
//             <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//           </li>
//           <li>
//             <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//           </li>
//           <li>
//             <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//           </li>
//         </ul>
//       </div>
//       <div className="top-bar-right">
//         <ul className="menu">
//           <li>
//             <input type="search" placeholder="Search" />
//           </li>
//           <li>
//             <button type="button" className="button">Search</button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

module.exports = Nav;

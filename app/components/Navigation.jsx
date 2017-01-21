var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    var location = this.refs.search.value;
    if (location.length > 0) {
      var encodedLocation = encodeURIComponent(location);
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  
  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Dush's Weather</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
            <li><Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
            <li><Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" placeholder="Search Weather" ref="search"/></li>
              <li><button className="button" value="">Get Weather</button></li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = Navigation;
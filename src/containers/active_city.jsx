import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {
    const style = {
      maxWidth: "100%"
    };

    if (!this.props.activeCity) {
      return <p>Select a City</p>;
    }
    return (
      <div className="active-city">
        <h3>{this.props.activeCity.name}</h3>
        {this.props.activeCity.address}
        <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`} alt="" style={style} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps, null)(ActiveCity);

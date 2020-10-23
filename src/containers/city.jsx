import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setActiveCity } from '../actions';

class City extends Component {
  render() {
    return (
      <div className="list-group-item" onClick={() => this.props.setActiveCity(this.props.city)}>
        {this.props.name}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(City);

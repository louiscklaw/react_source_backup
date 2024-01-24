import React, { Component } from "react";
import { connect } from "react-redux";
class Loading extends Component {
  render() {
    return (
      <div className="noData">
        {this.props.isNoData && (
          <div>{this.props.staticKeyWords.temporarilyNoData}</div>
        )}
        {this.props.isLoader && <div className="loader"></div>}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    staticKeyWords: state.app.staticKeyWords,
  };
}
export default connect(mapStateToProps)(Loading);

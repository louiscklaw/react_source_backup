import React, { Component } from "react";
// import Highcharts from '../../sharedfiles/customhighcharts';
import { connect } from "react-redux";

class HiLoGraphsDual extends Component {
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <>
        <div className="dualHilo-graph">
          <div className="hiLoGraph">
            <div className="hiLoGraph-header">
              <div className="mainTitle medium">{this.props.title}</div>
              <div className="mainTitle home-text">
                {!this.props.hideTeamNames ? this.props.homeTeamName : ""}{" "}
                {this.props.showSubTitle ? (
                  <small>({this.props.staticKeyWords.last8HomeResults})</small>
                ) : (
                  ""
                )}
              </div>
              <div></div>
            </div>
            <div className="barGraph">
              <div className="barsContent">
                {this.props.data &&
                  this.props.data.map((item, idx) => {
                    //style={{ "--red": item.homeTeamHigh, "--blue": item.homeTeamLow }}
                    return (
                      <>
                        {item.homeTeamHigh && item.homeTeamLow && (
                          <div className="hiLoBar" key={"bar" + idx}>
                            <span
                              className="awayBar"
                              style={{ flex: item.homeTeamHigh }}
                            >
                              {item.homeTeamHigh > 0 ? item.homeTeamHigh : ""}
                            </span>
                            <span
                              className="homeBar"
                              style={{ flex: item.homeTeamLow }}
                            >
                              {item.homeTeamLow > 0 ? item.homeTeamLow : ""}
                            </span>
                          </div>
                        )}
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
          <div>
            <div className="line-title middleLine">
              {!this.props.hideLine ? this.props.staticKeyWords.line : ""}
            </div>
            <div className="hiLoGraph-body">
              <div className="lineContent">
                {this.props.data.map((item, idx) => {
                  return (
                    <>
                      {item.homeTeamHigh && item.homeTeamLow && (
                        <span key={"body" + idx}>{item.line}</span>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="hiLoGraph">
            <div className="hiLoGraph-header">
              <div></div>
              <div className="mainTitle away-text">
                {!this.props.hideTeamNames ? this.props.awayTeamName : ""}{" "}
                {this.props.showSubTitle ? (
                  <small>({this.props.staticKeyWords.last8AwayResults})</small>
                ) : (
                  ""
                )}
              </div>
              <div className="legend-info">
                {!this.props.hideLegend ? (
                  <>
                    <div className="homeLegend">
                      {this.props.staticKeyWords.highIcon}
                    </div>{" "}
                    <div className="awayLegend">
                      {this.props.staticKeyWords.lowIcon}
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="barGraph">
              <div className="barsContent">
                {this.props.data.map((item, idx) => {
                  console.log(item);
                  return (
                    <>
                      {item.homeTeamHigh && item.homeTeamLow && (
                        <div key={"hilo" + idx} className="hiLoBar">
                          <span
                            className="awayBar"
                            style={{ flex: item.awayTeamHigh }}
                          >
                            {item.awayTeamHigh > 0 ? item.awayTeamHigh : ""}
                          </span>
                          <span
                            className="homeBar"
                            style={{ flex: item.awayTeamLow }}
                          >
                            {item.awayTeamLow > 0 ? item.awayTeamLow : ""}
                          </span>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    staticKeyWords: state.app.staticKeyWords,
  };
}
export default connect(mapStateToProps)(HiLoGraphsDual);
//export default HiLoGraphsDual;

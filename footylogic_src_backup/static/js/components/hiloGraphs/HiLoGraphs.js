import React, { Component } from "react";
import Highcharts from "../../sharedfiles/customhighcharts";
import { connect } from "react-redux";

class HiLoGraph extends Component {
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}

  render() {
    let categories = [];
    let hiData = [];
    let loData = [];
    for (var item of this.props.data) {
      categories.push(item.line);
      hiData.push(item.high);
      loData.push(item.low);
    }
    return (
      <div class="graphContainer">
        <div class="">
          <div class="hiLoGraph">
            <div class="hiLoGraph-header">
              <div class="line-title">{this.props.staticKeyWords.line}</div>
              <div class="mainTitle">{this.props.title}</div>
              <div class="legend-info">
                <div class="homeLegend">
                  {this.props.staticKeyWords.highIcon}
                </div>{" "}
                <div class="awayLegend">
                  {this.props.staticKeyWords.lowIcon}
                </div>
              </div>
            </div>
            <div class="barGraph">
              <div class="hiLoGraph-body">
                <div class="lineContent">
                  {this.props.data.map((item) => {
                    return <span>{item.high ? item.line : ""}</span>;
                  })}
                </div>
              </div>
              <div class="barsContent">
                {this.props.data.map((item) => {
                  return (
                    <>
                      {item.high && item.low && (
                        <div class="hiLoBar">
                          <span class="awayBar" style={{ flex: item.high }}>
                            {item.high > 0 ? item.high : ""}
                          </span>
                          <span class="homeBar" style={{ flex: item.low }}>
                            {item.low > 0 ? item.low : ""}
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
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    staticKeyWords: state.app.staticKeyWords,
  };
}
export default connect(mapStateToProps)(HiLoGraph);
//export default HiLoGraph;

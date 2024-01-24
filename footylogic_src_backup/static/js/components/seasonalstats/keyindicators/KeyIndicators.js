import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loading from "../../loading/Loading";

class KeyIndicators extends Component {
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <section className="layout-content">
        <div className="mainContent container">
          <div className="mainLanding-page">
            <div className="pageContent">
              <div className="seasonalStats">
                <div className="seasonalStats-container">
                  <div className="sectionHeading">
                    <div className="sectionTitle">
                      {this.props.selectedTable.tableName}{" "}
                      {/*<small>(League Rank)</small>*/}
                    </div>
                  </div>
                  <div className="seasonalStats-content">
                    <table className="tableDefault keyIndicator">
                      <thead>
                        <tr>
                          <th className="th-spaceSeparator" colSpan="2">
                            {this.props.keyIndicatorsData.homeTeamName}
                          </th>
                          <th className="th-spaceSeparator w-500" rowSpan="2">
                            {this.props.keyIndicatorsData.season}
                          </th>
                          <th className="" colSpan="2">
                            {this.props.keyIndicatorsData.awayTeamName}
                          </th>
                        </tr>
                        <tr>
                          <th className="th-separator">
                            {this.props.staticKeyWords.stats}
                          </th>
                          <th>{this.props.staticKeyWords.rank}</th>
                          <th className="th-separator">
                            {this.props.staticKeyWords.rank}
                          </th>
                          <th>{this.props.staticKeyWords.stats}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.keyIndicatorsData.hasOwnProperty(
                          "indicators",
                        ) && this.props.keyIndicatorsData.indicators.length ? (
                          this.props.keyIndicatorsData.indicators.map(
                            (item, index) => {
                              return (
                                <tr key={index}>
                                  <td colSpan="2">
                                    {item.indicatorHomeRank ? (
                                      <div
                                        className={
                                          "keyIndicators " +
                                          (parseInt(item.indicatorHomeRank) <
                                          parseInt(item.indicatorAwayRank)
                                            ? "home-bg"
                                            : "")
                                        }
                                      >
                                        <div className="text">
                                          {item.indicatorHome}
                                        </div>
                                        <div className="rank">
                                          {item.indicatorHomeRank}
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="home-text pr-10">
                                        {item.indicatorHome}
                                      </div>
                                    )}
                                  </td>
                                  <td>
                                    <div>{item.indicatorName}</div>
                                  </td>
                                  <td colSpan="2">
                                    {item.indicatorAwayRank ? (
                                      <div
                                        className={
                                          "keyIndicators " +
                                          (parseInt(item.indicatorAwayRank) <
                                          parseInt(item.indicatorHomeRank)
                                            ? "away-bg"
                                            : "")
                                        }
                                      >
                                        <div className="rank">
                                          {item.indicatorAwayRank}
                                        </div>
                                        <div className="text">
                                          {item.indicatorAway}
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="away-text pl-15">
                                        {item.indicatorAway}
                                      </div>
                                    )}
                                  </td>
                                </tr>
                              );
                            },
                          )
                        ) : (
                          <tr>
                            <td colSpan="5">
                              <Loading
                                isLoader={this.props.loader}
                                isNoData={
                                  !this.props.loader &&
                                  ((this.props.keyIndicatorsData.hasOwnProperty(
                                    "indicators",
                                  ) &&
                                    !this.props.keyIndicatorsData.indicators
                                      .length) ||
                                    this.props.KeyIndicators === undefined)
                                }
                                temporarilyNoData={
                                  this.props.staticKeyWords.temporarilyNoData
                                }
                              />
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
function mapStateToProps(state) {
  return {
    selectedTable: state.seasonalstats.selectedTable,
    keyIndicatorsData: state.seasonalstats.keyIndicatorsData,
    selectedTableId: state.seasonalstats.selectedTableId,
    loader: state.app.loader,
    staticKeyWords: state.app.staticKeyWords,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(KeyIndicators);

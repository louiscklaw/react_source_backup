import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import BMSummaryTable from "../bmsummarytable/BMSummaryTable";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HiLoGraphDual from "../hiloGraphs/HiLoGraphsDual";
// import SummaryMarketInfoTable from '../summarymarketinfotable/SummaryMarketInfoTable'

class SummaryMarketInfo extends Component {
  render() {
    return (
      <div className="graphSection">
        <div className="sectionHeading">
          <div
            className="sectionTitle"
            dangerouslySetInnerHTML={{ __html: this.props.heading }}
          ></div>
        </div>
        <div className="graphContainer">
          <div className="graphContent">
            <div className="hiloGraphtables">
              <HiLoGraphDual
                data={this.props.graphData}
                homeTeamName={this.props.homeTeamName}
                awayTeamName={this.props.awayTeamName}
                title={
                  this.props.secondGraphData &&
                  this.props.secondGraphData.length > 0
                    ? this.props.staticKeyWords.fullTime
                    : ""
                }
                showSubTitle={true}
              />
              {this.props.secondGraphData &&
              this.props.secondGraphData.length > 0 ? (
                <HiLoGraphDual
                  data={this.props.secondGraphData}
                  homeTeamName={this.props.homeTeamName}
                  awayTeamName={this.props.awayTeamName}
                  title={this.props.staticKeyWords.halfTime}
                  hideTeamNames={true}
                  hideLine={true}
                  hideLegend={true}
                  showSubTitle={false}
                />
              ) : (
                ""
              )}
              <div className="dualHilo-table">
                <hr />
                <div className="heading medium">
                  {this.props.staticKeyWords.seasonSummary}
                </div>
                {this.props.isHilo ? (
                  <div className="tableTwo-column statisticsTables p-0">
                    <div className="tableHome">
                      <div className="tableFull-width">
                        {this.props.tableData &&
                        this.props.tableData.homeTeam ? (
                          <BMSummaryTable
                            isStatistics={true}
                            isHilo={this.props.isHilo}
                            isHome={true}
                            columns={this.props.hiloCornersColumns.subColumns}
                            mainColumns={
                              this.props.hiloCornersColumns.mainColumns
                            }
                            data={this.props.tableData.homeTeam}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="tableAway">
                      <div className="tableFull-width">
                        {this.props.tableData &&
                        this.props.tableData.awayTeam ? (
                          <BMSummaryTable
                            isStatistics={true}
                            isHilo={this.props.isHilo}
                            isHome={false}
                            columns={this.props.hiloCornersColumns.subColumns}
                            mainColumns={
                              this.props.hiloCornersColumns.mainColumns
                            }
                            data={this.props.tableData.awayTeam}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                ) : this.props.isCornersHilo ? (
                  <div className="tableTwo-column statisticsTables p-0">
                    <div className="tableHome">
                      <div className="tableFull-width">
                        {this.props.tableData &&
                        this.props.tableData.homeTeam ? (
                          <BMSummaryTable
                            isStatistics={true}
                            isCornersHilo={this.props.isCornersHilo}
                            isHome={true}
                            columns={this.props.cornersHiloColumns}
                            data={this.props.tableData.homeTeam}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="tableAway">
                      <div className="tableFull-width">
                        {this.props.tableData &&
                        this.props.tableData.awayTeam ? (
                          <BMSummaryTable
                            isStatistics={true}
                            isCornersHilo={this.props.isCornersHilo}
                            isHome={false}
                            columns={this.props.cornersHiloColumns}
                            data={this.props.tableData.awayTeam}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    homeTeamName: state.match.homeTeamName,
    awayTeamName: state.match.awayTeamName,

    staticKeyWords: state.app.staticKeyWords,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SummaryMarketInfo);

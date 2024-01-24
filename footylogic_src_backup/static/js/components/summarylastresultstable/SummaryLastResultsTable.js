import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { formatDate } from "../../sharedfiles/helper";
import PopoverComponent from "../summary/popover/popover";

class SummaryMarketInfoTable extends Component {
  componentWillMount() {}
  render() {
    var self = this;
    return (
      <div className={this.props.isHome ? "tableHome" : "tableAway"}>
        <div className="tableFull-width">
          <div
            className={
              this.props.isHome ? "tableHeader-home" : "tableHeader-away"
            }
          >
            <div className="tableHeading">
              {this.props.title} - <span>{this.props.subTitle}</span>
            </div>
          </div>
          <table className="tableDefault tableHkjc-mode">
            <thead>
              <tr>
                <th>{this.props.staticKeyWords.played}</th>
                <th>{this.props.staticKeyWords.wTable}</th>
                <th>{this.props.staticKeyWords.d}</th>
                <th>{this.props.staticKeyWords.l}</th>
                <th>{this.props.staticKeyWords.gf}</th>
                <th>{this.props.staticKeyWords.ga}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div>{this.props.data.teamPlayed}</div>
                </td>
                <td>
                  <div>{this.props.data.teamWin}</div>
                </td>
                <td>
                  <div>{this.props.data.teamDraw}</div>
                </td>
                <td>
                  <div>{this.props.data.teamLoss}</div>
                </td>
                <td>
                  <div>{this.props.data.teamGoalsFor}</div>
                </td>

                <td>
                  <div>{this.props.data.teamGoalsAway}</div>
                </td>
              </tr>
              <tr>
                <td colSpan="6">
                  <div className="recentForm-info">
                    <div className="team-lastForm resultsData">
                      {this.props.data.teamForm &&
                        this.props.data.teamForm
                          .split(",")
                          .map((item, index) => {
                            // return <span class={"status "+(item.toLowerCase() === 'w'?'win':
                            // item.toLowerCase() === 'l'?"loss":
                            // item.toLowerCase() === 'd'?"draw":"")}>
                            //     {item}
                            //     </span>
                            var objMatch =
                              this.props.data.recentMatch &&
                              this.props.data.recentMatch[index]
                                ? this.props.data.recentMatch[index]
                                : {};
                            return (
                              Object.keys(objMatch).length > 0 && (
                                <PopoverComponent
                                  match={objMatch}
                                  label={item}
                                  keyValue={
                                    index +
                                    "_" +
                                    (self.props.isHome ? "home" : "away")
                                  }
                                  idx={index}
                                  isHome={self.props.isHome}
                                  key={index}
                                />
                              )
                            );
                          })}
                    </div>
                    {/* {this.props.data.recentMatch && Object.keys(this.props.data.recentMatch)?<div class="selectedData">
                                        <div class="fixture">{this.props.data.recentMatch.homeTeamName} <span class="score">{this.props.data.recentMatch.score}</span> {this.props.data.recentMatch.awayTeamName}</div>
                                        <div>{formatDate(this.props.data.recentMatch.kickOff,'banner').date} {this.props.data.recentMatch.competitionName}</div>

                                    </div>:""} */}
                    {this.props.data.nextMatch &&
                    Object.keys(this.props.data.nextMatch) ? (
                      <div>
                        <span className="home-text">
                          {this.props.staticKeyWords.nextMatch}:{" "}
                        </span>
                        <span>
                          {
                            formatDate(
                              this.props.data.nextMatch.kickOff,
                              "banner",
                            ).date
                          }{" "}
                          - {this.props.data.nextMatch.competitionName} -{" "}
                          {this.props.data.nextMatch.homeTeamName} vs{" "}
                          {this.props.data.nextMatch.awayTeamName}
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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
    isLastResIconTrig: state.summary.isLastResIconTrig,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SummaryMarketInfoTable);

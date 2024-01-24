import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectTab, getGraphData } from "./RecentFormHADSlice";
import RecentformTable from "../recentformtable/RecentformTable";
import HaFuGraph from "../hafugraph/HaFuGraph";
import CorrectScoreGraph from "../correctscoregraph/CorrectScoreGraph";
import RFCorrectScoreGraph from "../rfcorrectscoregraph/RFCorrectScoreGraph";
import PerGameGraph from "../pergamegraph/PerGameGraph";
import { engLangId } from "../../sharedfiles/constants";

class RecentFormTab extends Component {
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  render() {
    let hadData = [];
    if (
      this.props.rfHadData &&
      Object.keys(this.props.rfHadData).length > 0 &&
      Object.keys(this.props.rfHadData)
    ) {
      hadData = [
        {
          outcomeName: this.props.staticKeyWords.win,
          homeGoals: this.props.rfHadData.homeWin,
          awayGoals: this.props.rfHadData.awayWin,
        },
        {
          outcomeName: this.props.staticKeyWords.draw,
          homeGoals: this.props.rfHadData.homeDraw,
          awayGoals: this.props.rfHadData.awayDraw,
        },
        {
          outcomeName: this.props.staticKeyWords.loss,
          homeGoals: this.props.rfHadData.homeLoss,
          awayGoals: this.props.rfHadData.awayLoss,
        },
      ];
    }
    let firstHalfHadData = [];
    if (
      this.props.firstHalfHad &&
      Object.keys(this.props.firstHalfHad).length > 0 &&
      Object.keys(this.props.firstHalfHad)
    ) {
      firstHalfHadData = [
        {
          outcomeName: this.props.staticKeyWords.win,
          homeGoals: this.props.firstHalfHad.homeWin,
          awayGoals: this.props.firstHalfHad.awayWin,
        },
        {
          outcomeName: this.props.staticKeyWords.draw,
          homeGoals: this.props.firstHalfHad.homeDraw,
          awayGoals: this.props.firstHalfHad.awayDraw,
        },
        {
          outcomeName: this.props.staticKeyWords.loss,
          homeGoals: this.props.firstHalfHad.homeLoss,
          awayGoals: this.props.firstHalfHad.awayLoss,
        },
      ];
    }

    return (
      <div style={{ display: "block" }} id="Standings" className="tabContent">
        <RecentformTable />
        {!this.props.isEdisplay &&
          this.props.isAdvancedMode &&
          !this.props.loader && (
            <React.Fragment>
              {((hadData && hadData.length > 0) ||
                (firstHalfHadData && firstHalfHadData.length > 0) ||
                (this.props.goalsPerGame &&
                  Object.keys(this.props.goalsPerGame).length > 0)) && (
                <div className="graphSection">
                  <div className="sectionHeading">
                    <div className="sectionTitle">
                      {this.props.staticKeyWords.homeAwayDraw}
                    </div>
                  </div>
                  <div className="graphContainer">
                    <div className="graphContent TwoInRow">
                      <div className="leftColumn">
                        <HaFuGraph
                          data={hadData}
                          maxValue={8}
                          loadin="rfhad"
                          title={this.props.staticKeyWords.fullTime}
                          graphHeight="250px"
                          graphWidth="100%"
                        />
                        <HaFuGraph
                          data={firstHalfHadData}
                          maxValue={4}
                          loadin="rffhhad"
                          title={this.props.staticKeyWords.halfTime}
                          graphHeight="250px"
                          graphWidth="100%"
                        />
                      </div>
                      <div className="rightColumn">
                        <div>
                          <PerGameGraph
                            homeTeamName={this.props.homeTeamName}
                            awayTeamName={this.props.awayTeamName}
                            home={this.props.goalsPerGame.homeTeam}
                            away={this.props.goalsPerGame.awayTeam}
                            title={
                              this.props.languageId === engLangId
                                ? `${this.props.staticKeyWords.goalsFor} <br/><span>${this.props.staticKeyWords.per}</span> ${this.props.staticKeyWords.game}`
                                : `${this.props.staticKeyWords.goalsPerGame}`
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {this.props.fullTime?.length && this.props.halfTime?.length && (
                <div className="graphSection">
                  <div className="sectionHeading">
                    <div className="sectionTitle">
                      <span>{this.props.staticKeyWords.csHafu}</span>
                    </div>
                  </div>
                  <div className="graphContainer">
                    <div className="graphContent TwoInRow">
                      <div className="correctScore-graph leftColumn leftColumn-fullwidth singleColumn">
                        <RFCorrectScoreGraph
                          data={this.props.fullTime}
                          loadin="rfcsfilltime"
                          graphWidth="85%"
                          graphHeight="300px"
                          maxValue={8}
                          title={this.props.staticKeyWords.fullTime}
                        />
                        <RFCorrectScoreGraph
                          data={this.props.halfTime}
                          loadin="rfcshalftime"
                          graphWidth="85%"
                          graphHeight="300px"
                          maxValue={8}
                          title={this.props.staticKeyWords.halfTime}
                        />
                      </div>
                      <div className="haFu rightColumn rightColumn-fullwidth">
                        <HaFuGraph
                          data={this.props.haFu}
                          maxValue={8}
                          loadin="hafu"
                          title={this.props.staticKeyWords.haFu}
                          graphHeight="600px"
                          graphWidth="85%"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    selectedTab: state.recentfromtab.selectedTab,
    rfHadData: state.recentfromtab.rfHadData,
    firstHalfHad: state.recentfromtab.firstHalfHad,
    fullTime: state.recentfromtab.fullTime,
    halfTime: state.recentfromtab.halfTime,
    haFu: state.recentfromtab.haFu,
    goalsPerGame: state.recentfromtab.goalsPerGame,
    staticKeyWords: state.app.staticKeyWords,
    homeTeamName: state.match.homeTeamName,
    awayTeamName: state.match.awayTeamName,
    loader: state.app.loader,
    languageId: state.app.languageId,
    isEdisplay: state.app.isEdisplay,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(RecentFormTab);

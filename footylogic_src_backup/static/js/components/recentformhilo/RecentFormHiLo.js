import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setOption } from "./RecentFormHiLoSlice";
import RecentformTable from "../recentformtable/RecentformTable";
// import HiLoGraph from '../hiloGraph/HiLoGraph'
// import { setTeams } from '../match/homeSlice';
// import FirstTOScoreGraph from '../firsttoscoregraph/FirstToScoreGraph';
import GoalTimesGraph from "../goaltimesgraph/GoalTimesGraph";
import HiLoGraphDual from "../hiloGraphs/HiLoGraphsDual";
import HaFuGraph from "../hafugraph/HaFuGraph";

class RecentFormHilo extends Component {
  // componentDidMount(){

  // }
  // componentDidUpdate(prevProps, prevState){

  // }
  optionChanged(type, id) {
    this.props.dispatch(setOption({ type, id }));
  }
  render() {
    const totalGoalsAnalysisData = [];
    for (var item of this.props.totalGoalsAnalysis) {
      totalGoalsAnalysisData.push({
        goalMinutes: item.goals,
        homeTeamGoals: item.timesScoredHome,
        awayTeamGoals: item.timesScoredAway,
      });
    }
    return (
      <div style={{ display: "block" }} id="hilo" className="tabContent">
        <RecentformTable
          homeSelectedOptionId={this.props.homeSelectedOptionId}
          awaySelectedOptionId={this.props.awaySelectedOptionId}
          onOptionChange={this.optionChanged.bind(this)}
        />
        {!this.props.isEdisplay && this.props.isAdvancedMode && (
          <React.Fragment>
            <div className="graphSection">
              <div className="sectionHeading">
                <div className="sectionTitle">
                  <span>{this.props.staticKeyWords.hiLo}</span>
                </div>
              </div>
              <div className="graphContainer">
                <div className="graphContent">
                  {/*<HiLoGraph data={this.props.homeData} loadIn="fthilohome" title="FT HiLo"/>*/}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                      <HiLoGraphDual
                        data={this.props.fullTimeHiLo}
                        homeTeamName={this.props.homeTeamName}
                        awayTeamName={this.props.awayTeamName}
                        line={this.props.staticKeyWords.line}
                        hideLine={false}
                        hideTeamNames={false}
                        hideLegend={false}
                        hideSubtitle={false}
                        homeSubTitle={
                          "Last 8" +
                          (this.props.homeSelectedOptionId === 1
                            ? ""
                            : this.props.homeSelectedOptionId === 2
                              ? " Home"
                              : " Away") +
                          " Results"
                        }
                        awaySubTitle={
                          "Last 8" +
                          (this.props.awaySelectedOptionId === 1
                            ? ""
                            : this.props.awaySelectedOptionId === 2
                              ? " Home"
                              : " Away") +
                          " Results"
                        }
                        title={this.props.staticKeyWords.fullTime}
                      />
                    </div>
                    <div>
                      <HiLoGraphDual
                        data={this.props.halfTimeHiLo}
                        homeTeamName={this.props.homeTeamName}
                        awayTeamName={this.props.awayTeamName}
                        hideLine={true}
                        hideTeamNames={true}
                        hideLegend={true}
                        hideSubtitle={true}
                        homeSubTitle={
                          "Last 8" +
                          (this.props.homeSelectedOptionId === 1
                            ? ""
                            : this.props.homeSelectedOptionId === 2
                              ? " Home"
                              : " Away") +
                          " Results"
                        }
                        awaySubTitle={
                          "Last 8" +
                          (this.props.awaySelectedOptionId === 1
                            ? ""
                            : this.props.awaySelectedOptionId === 2
                              ? " Home"
                              : " Away") +
                          " Results"
                        }
                        title={this.props.staticKeyWords.halfTime}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graphSection">
              <div className="sectionHeading">
                <div className="sectionTitle">
                  {this.props.staticKeyWords.goals}
                </div>
              </div>
              <div className="graphContainer">
                <div className="graphContent TwoInRow">
                  <div className="leftColumn leftColumn-fullwidth">
                    <HaFuGraph
                      homeTeamName={this.props.homeTeamName}
                      awayTeamName={this.props.awayTeamName}
                      mainData={this.props.firstToScore}
                      isDirect={true}
                      data={{
                        labels: [
                          this.props.staticKeyWords.scored1st,
                          this.props.staticKeyWords.conceded1st,
                          this.props.staticKeyWords.nogoals,
                        ],
                        homeTeam: this.props.firstToScore.homeTeam,
                        awayTeam: this.props.firstToScore.awayTeam,
                      }}
                      title={this.props.staticKeyWords.firstTeamToScore}
                      colors={["#29d6d4", "#e57374", "#FFFFFF"]}
                      graphHeight={"250px"}
                      graphWidth={"85%"}
                      loadin="rfftshilo"
                    />
                    <GoalTimesGraph
                      data={totalGoalsAnalysisData}
                      showLine={false}
                      title={this.props.staticKeyWords.totalGoals}
                      loadin="goalsanalysis"
                      width="85%"
                      height="300px"
                      showLabels={true}
                    />
                  </div>
                  <div className="rightColumn rightColumn-fullwidth">
                    {/*<HaFuGraph data={this.props.teamsToScore} 
                           loadin="tts" 
                           addClass="teamTo-score"
                           title={this.props.staticKeyWords.tts} 
                    graphHeight="300px" graphWidth="300px" />*/}
                    <GoalTimesGraph
                      data={this.props.goalTimes}
                      title={this.props.staticKeyWords.goalTimes}
                      homeTeamName={this.props.homeTeamName}
                      awayTeamName={this.props.awayTeamName}
                      showLine={false}
                      loadin="goaltime"
                      showLabels={true}
                      showTable={true}
                      width="94%"
                      height="500px"
                    />
                  </div>
                </div>
                <div className="noDatagraph">
                  {this.props.staticKeyWords.goalMinutesPastGame}
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    fullTimeHiLo: state.recentfromtab.fullTimeHiLo,
    halfTimeHiLo: state.recentfromtab.halfTimeHiLo,
    firstToScore: state.recentfromtab.firstToScore,
    homeTeamName: state.match.bannerData.homeTeamName,
    awayTeamName: state.match.bannerData.awayTeamName,
    homeTeamId: state.match.bannerData.homeTeamId,
    awayTeamId: state.match.bannerData.awayTeamId,
    goalTimes: state.recentfromtab.goalTimes,
    totalGoalsAnalysis: state.recentfromtab.totalGoalsAnalysis,
    staticKeyWords: state.app.staticKeyWords,
    teamsToScore: state.recentfromtab.teamsToScore,
    homeSelectedOptionId: state.recentformhilo.homeSelectedOptionId,
    awaySelectedOptionId: state.recentformhilo.awaySelectedOptionId,
    isEdisplay: state.app.isEdisplay,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(RecentFormHilo);

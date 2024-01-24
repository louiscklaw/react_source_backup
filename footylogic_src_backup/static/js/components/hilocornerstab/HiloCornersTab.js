import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchhilolastencouters,
  setOptions,
  setSelectedOption,
} from "./HiloCornersTabSlice";
import HiLoExpandableTable from "../../sharedcomponents/HiLoExpandableTable/HiLoExpandableTable";
// import HiLoGraph from '../hiloGraph/HiLoGraph'
import FirstTOScoreGraph from "../firsttoscoregraph/FirstToScoreGraph";
import GoalTimesGraph from "../goaltimesgraph/GoalTimesGraph";
import PerGameGraph from "../pergamegraph/PerGameGraph";
import HiLoGraphs from "../hiloGraphs/HiLoGraphs";
// import ToatalGoalsGraph from '../totalgoalsgraph/TotalGoalsGraph';
import TotalGoalsGraph from "../totalgoalsgraph/TotalGoalsGraph";
import TeamsToScoreGraph from "../teamstoscoregraph/TeamsToScoreGraph";
import { defaultH2HFilterId, engLangId } from "../../sharedfiles/constants";

class HiloCornersTab extends Component {
  componentDidMount() {
    this.props.dispatch(setSelectedOption(defaultH2HFilterId));
    if (
      this.props.lastEncountersOptions &&
      this.props.lastEncountersOptions.length > 0 &&
      this.props.eventInfo &&
      this.props.eventInfo.eventId &&
      this.props.eventInfo.eventId.length > 0
    ) {
      this.props.dispatch(setOptions(this.props.lastEncountersOptions));
      this.props.dispatch(
        fetchhilolastencouters({
          optionId: this.props.selectedOptionId,
          marketGroupId: 2,
          eventId: this.props.eventInfo.eventId,
          languageId: this.props.languageId,
          isBasic: this.props.isBasic,
        }),
      );
    }
  }
  componentWillReceiveProps(nextProps) {
    if (
      JSON.stringify(nextProps.lastEncountersOptions) !==
        JSON.stringify(this.props.lastEncountersOptions) &&
      nextProps.lastEncountersOptions.length > 0
    ) {
      this.props.dispatch(setOptions(nextProps.lastEncountersOptions));
      this.props.dispatch(
        fetchhilolastencouters({
          optionId: nextProps.selectedOptionId,
          marketGroupId: 2,
          eventId: nextProps.eventInfo.eventId,
          languageId: nextProps.languageId,
          isBasic: nextProps.isBasic,
        }),
      );
    }
    if (
      this.props.lastEncountersOptions.length > 0 &&
      this.props.eventInfo &&
      this.props.eventInfo.eventId &&
      this.props.eventInfo.eventId.length > 0 &&
      this.props.eventInfo.eventId !== nextProps.eventInfo.eventId
    ) {
      this.props.dispatch(setOptions(nextProps.lastEncountersOptions));
      this.props.dispatch(
        fetchhilolastencouters({
          optionId: nextProps.selectedOptionId,
          marketGroupId: 2,
          eventId: nextProps.eventInfo.eventId,
          languageId: nextProps.languageId,
          isBasic: nextProps.isBasic,
        }),
      );
    }
  }
  componentWillUnmount() {
    this.props.dispatch(setSelectedOption(defaultH2HFilterId));
  }
  optionChanged(event) {
    this.props.dispatch(setSelectedOption(event.target.value));
    this.props.dispatch(
      fetchhilolastencouters({
        optionId: event.target.value,
        marketGroupId: 2,
        eventId: this.props.eventInfo.eventId,
        languageId: this.props.languageId,
        isBasic: this.props.isBasic,
      }),
    );
  }
  render() {
    const totalGoalsAnalysisData = [];
    const totalGoalsCategories = [];
    for (var item of this.props.totalGoals) {
      totalGoalsCategories.push(item.goals);
      totalGoalsAnalysisData.push(item.timesScored);
    }
    return (
      <div style={{ display: "block" }} id="Results" className="tabContent">
        <div className="tabTable-content">
          <div className="tableHeader-home">
            <div className="tableHeading">
              {this.props.staticKeyWords.last8Encounters}
            </div>
            <div className="tableHeading-rightSection">
              <div className="form-group">
                <div className="form-control">
                  <select
                    className="select-margin"
                    value={this.props.selectedOptionId}
                    onChange={this.optionChanged.bind(this)}
                  >
                    {this.props.lastEncountersOptions.map((item, index) => {
                      if (item.id != 3) {
                        return (
                          <option key={"hilo_option_" + index} value={item.id}>
                            {item.name}
                          </option>
                        );
                      }
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>
          {this.props.isBasic &&
          this.props.tableRecentResults &&
          Object.keys(this.props.tableRecentResults) ? (
            <div class="pastSeasons pastSeasons-grid">
              <div class="pastSeasons-block homeWins small">
                {this.props.homeTeamName} {this.props.staticKeyWords.wins}
                <div>{this.props.tableRecentResults.homeTeam}</div>
              </div>
              <div class="pastSeasons-block draws small">
                {this.props.staticKeyWords.draws}
                <div>{this.props.tableRecentResults.draw}</div>
              </div>
              <div class="pastSeasons-block awayWins small">
                {this.props.awayTeamName} {this.props.staticKeyWords.wins}
                <div>{this.props.tableRecentResults.awayTeam}</div>
              </div>
            </div>
          ) : (
            ""
          )}
          <HiLoExpandableTable
            hiLoData={this.props.hiLoLastEncounters}
            loader={this.props.loader}
            eventId={this.props.match.params.eventId}
            languageId={this.props.languageId}
            temporarilyNoData={
              this.props.isData
                ? this.props.staticKeyWords.noPastMeetingsVenue
                : this.props.staticKeyWords.noPastMeetings
            }
            headings={{
              season: this.props.staticKeyWords.season,
              date: this.props.staticKeyWords.mcDate,
              comp: this.props.staticKeyWords.competition,
              homeTeam: this.props.staticKeyWords.homeTeam,
              scoreHT: this.props.staticKeyWords.scoreHt,
              awayTeam: this.props.staticKeyWords.awayTeam,
              ttg: this.props.staticKeyWords.ttg,
              fhHiLo: this.props.staticKeyWords.fhHiLo,
              hiLo: this.props.staticKeyWords.hiLo,
              btts: this.props.staticKeyWords.btts,
              tts: this.props.staticKeyWords.tts,
              cornersHiLo: this.props.staticKeyWords.cornersHiLo,
              more: this.props.staticKeyWords.more,
            }}
          />
        </div>
        {!this.props.isEdisplay &&
        !this.props.isBasic &&
        !this.props.loader &&
        ((this.props.ftHiLo && this.props.ftHiLo.length > 0) ||
          (this.props.htHiLo && this.props.htHiLo.length > 0)) ? (
          <>
            <div className="graphSection">
              <div className="sectionHeading">
                <div className="sectionTitle">
                  <span>{this.props.staticKeyWords.hiLo}</span>
                </div>
              </div>
              <div className="graphContainer">
                <div className="graphContent paddingRight TwoInRow">
                  <div className="leftColumn">
                    {/*<HiLoGraph data={this.props.ftHiLo} loadIn="fthilo" title="FT HiLo"/>*/}

                    <HiLoGraphs
                      data={this.props.ftHiLo}
                      line={this.props.staticKeyWords.line}
                      title={this.props.staticKeyWords.fullTime}
                    />
                  </div>
                  <div className="rightColumn">
                    <HiLoGraphs
                      data={this.props.htHiLo}
                      line={this.props.staticKeyWords.line}
                      title={this.props.staticKeyWords.halfTime}
                    />

                    {/*<HiLoGraph data={this.props.htHiLo} loadIn="hthilo" title="HT HiLo"/>*/}
                  </div>
                </div>
              </div>
            </div>
            <div className="graphSection">
              <div className="sectionHeading">
                <div className="sectionTitle">
                  {this.props.languageId === engLangId ? (
                    <>
                      {this.props.staticKeyWords.cornersTaken}{" "}
                      <span>{this.props.staticKeyWords.hiLo}</span>
                    </>
                  ) : (
                    this.props.staticKeyWords.cornersHiLo
                  )}
                </div>
              </div>

              <div className="graphContainer">
                <div className="graphContent TwoInRow">
                  <div className="leftColumn">
                    {/*<HiLoGraph data={this.props.cornersHiLo} loadIn="corhilo" title="Corners HiLo"/>*/}
                    <HiLoGraphs
                      data={this.props.cornersHiLo}
                      line={this.props.staticKeyWords.line}
                      title={this.props.staticKeyWords.cornersHiLo}
                    />
                  </div>
                  {/* <div className="cornersFor-pergame-margin rightColumn">
                        <PerGameGraph homeTeamName={this.props.homeTeamName} 
                                awayTeamName={this.props.awayTeamName} 
                                home={this.props.cornersPerGame.homeTeamCorners} 
                                away={this.props.cornersPerGame.awayTeamCorners} 
                                title={this.props.languageId===engLangId?`${this.props.staticKeyWords.cornersFor} <br/><span>${this.props.staticKeyWords.per}</span> ${this.props.staticKeyWords.game}`:`${this.props.staticKeyWords.cornersPerGame}`}/>
                    </div> */}
                </div>
                <div className="noDatagraph">
                  {this.props.staticKeyWords.cornersDataPastGame}
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
                  <div className="leftColumn leftColumn-fullwidth doubleColumn">
                    <FirstTOScoreGraph
                      homeTeamName={this.props.homeTeamName}
                      awayTeamName={this.props.awayTeamName}
                      mainData={this.props.firstToScore}
                      data={[
                        this.props.firstToScore.homeScoredFirst,
                        this.props.firstToScore.awayScoredFirst,
                        this.props.firstToScore.noGoal,
                      ]}
                      title={this.props.staticKeyWords.firstTeamToScore}
                      colors={["#29d6d4", "#e57374", "#FFFFFF"]}
                      loadin="ftshilo"
                    />
                    <TotalGoalsGraph
                      categories={totalGoalsCategories}
                      data={totalGoalsAnalysisData}
                      type="column"
                      loadin="totalGoals"
                      colors={["#CD853F"]}
                      height="300px"
                      maxValue={8}
                      title={this.props.staticKeyWords.totalGoals}
                    />
                  </div>
                  <div className="rightColumn rightColumn-fullwidth">
                    <TeamsToScoreGraph
                      data={this.props.teamsToScore}
                      title={this.props.staticKeyWords.tts}
                    />
                    <GoalTimesGraph
                      data={this.props.goalTimes}
                      title={this.props.staticKeyWords.goalTimes}
                      showLine={true}
                      homeTeamName={this.props.homeTeamName}
                      awayTeamName={this.props.awayTeamName}
                      loadin="goalstime"
                      showTable={true}
                      width="95%"
                    />
                  </div>
                </div>
                <div className="noDatagraph">
                  {this.props.staticKeyWords.goalMinutesPastGame}
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hiLoLastEncounters: state.hilocorners.hiLoLastEncounters,
    options: state.hilocorners.options,
    ftHiLo: state.hilocorners.ftHiLo,
    htHiLo: state.hilocorners.htHiLo,
    cornersHiLo: state.hilocorners.cornersHiLo,
    homeTeamName: state.match.bannerData.homeTeamName,
    awayTeamName: state.match.bannerData.awayTeamName,
    homeTeamId: state.match.bannerData.homeTeamId,
    awayTeamId: state.match.bannerData.awayTeamId,
    firstToScore: state.hilocorners.firstToScore,
    goalTimes: state.hilocorners.goalTimes,
    cornersPerGame: state.hilocorners.cornersPerGame,
    staticKeyWords: state.app.staticKeyWords,
    selectedOptionId: state.hilocorners.selectedOptionId,
    teamsToScore: state.hilocorners.teamsToScore,
    totalGoals: state.hilocorners.totalGoals,
    languageId: state.app.languageId,
    lastEncountersOptions: state.matchcenter.lastEncountersOptions,
    tableRecentResults: state.hilocorners.tableRecentResults,
    loader: state.hilocorners.loader,
    eventInfo: state.app.eventInfo,
    isData: state.hilocorners.isData,
    isEdisplay: state.app.isEdisplay,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({ setOptions }, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HiloCornersTab);

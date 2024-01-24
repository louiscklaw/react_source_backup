import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { H2HLastEncounters } from "../h2hlastencounters/H2HLastEncounters";
import HomeAwayDrawGraph from "../homeawaydrawgraph/HomeAwayDrawGraph";
import {
  fetchh2hlastencouters,
  setOptions,
  setSelectedOption,
} from "./HADHandicapTabSlice";
import CorrectScoreGraph from "../correctscoregraph/CorrectScoreGraph";
import HaFuGraph from "../hafugraph/HaFuGraph";
import PerGameGraph from "../pergamegraph/PerGameGraph";
// import TableGraph from '../tablegraph/TableGraph';
import { defaultH2HFilterId, engLangId } from "../../sharedfiles/constants";

class HADHandicapTab extends Component {
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
        fetchh2hlastencouters({
          optionId: !this.props.hideOptions ? this.props.selectedOptionId : 1,
          marketGroupId: 1,
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
      nextProps.lastEncountersOptions.length > 0 &&
      this.props.eventInfo &&
      this.props.eventInfo.eventId &&
      this.props.eventInfo.eventId.length > 0
    ) {
      this.props.dispatch(setOptions(nextProps.lastEncountersOptions));
      this.props.dispatch(
        fetchh2hlastencouters({
          optionId: !nextProps.hideOptions ? nextProps.selectedOptionId : 1,
          marketGroupId: 1,
          eventId: this.props.eventInfo.eventId,
          languageId: this.props.languageId,
          isBasic: this.props.isBasic,
        }),
      );
    }
    if (
      nextProps.lastEncountersOptions.length > 0 &&
      this.props.eventInfo &&
      this.props.eventInfo.eventId &&
      this.props.eventInfo.eventId.length > 0 &&
      this.props.eventInfo.eventId !== nextProps.eventInfo.eventId
    ) {
      this.props.dispatch(setOptions(nextProps.lastEncountersOptions));
      this.props.dispatch(
        fetchh2hlastencouters({
          optionId: !nextProps.hideOptions ? nextProps.selectedOptionId : 1,
          marketGroupId: 1,
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
      fetchh2hlastencouters({
        optionId: event.target.value,
        marketGroupId: 1,
        eventId: this.props.eventInfo.eventId,
        languageId: this.props.languageId,
        isBasic: this.props.isBasic,
      }),
    );
  }
  render() {
    return (
      <div style={{ display: "block" }} id="Standings" className="tabContent">
        <div className="tabTable-content">
          <div className="tableHeader-home">
            {this.props.isBasic && this.props.hideOptions ? (
              <div className="tableHeading">
                {" "}
                {this.props.staticKeyWords.headToHead}{" "}
                <span>({this.props.staticKeyWords.last8Encounters})</span>
              </div>
            ) : (
              <div className="tableHeading">
                {" "}
                {this.props.staticKeyWords.last8Encounters}
              </div>
            )}
            <div className="tableHeading-rightSection">
              <div className="form-group">
                {!this.props.hideOptions ? (
                  <div className="form-control">
                    <select
                      className="select-margin"
                      value={this.props.selectedOptionId}
                      onChange={this.optionChanged.bind(this)}
                    >
                      {this.props.options.map((item, index) => {
                        if (item.id != 3) {
                          return (
                            <option key={index} value={item.id}>
                              {item.name}
                            </option>
                          );
                        } else return "";
                      })}
                    </select>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          {this.props.isBasic &&
          this.props.tableRecentResults &&
          Object.keys(this.props.tableRecentResults) ? (
            <div className="pastSeasons pastSeasons-grid">
              <div className="pastSeasons-block homeWins small">
                {this.props.homeTeamName} {this.props.staticKeyWords.wins}
                <div>{this.props.tableRecentResults.homeTeam}</div>
              </div>
              <div className="pastSeasons-block draws small">
                {this.props.staticKeyWords.draws}
                <div>{this.props.tableRecentResults.draw}</div>
              </div>
              <div className="pastSeasons-block awayWins small">
                {this.props.awayTeamName} {this.props.staticKeyWords.wins}
                <div>{this.props.tableRecentResults.awayTeam}</div>
              </div>
            </div>
          ) : (
            ""
          )}
          <H2HLastEncounters
            data={this.props.h2hLastEncounters}
            eventId={this.props.match.params.eventId}
            languageId={this.props.languageId}
            loader={this.props.loader}
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
              had: this.props.staticKeyWords.had,
              fHAD: this.props.staticKeyWords.fHAD,
              hdc: this.props.staticKeyWords.hdc,
              hHAD: this.props.staticKeyWords.hHAD,
              more: this.props.staticKeyWords.more,
            }}
          />
        </div>
        {!this.props.isEdisplay &&
        !this.props.isBasic &&
        !this.props.loader &&
        ((this.props.had && Object.keys(this.props.had).length > 0) ||
          (this.props.firstHalfHad &&
            Object.keys(this.props.firstHalfHad).length > 0) ||
          (this.props.goalsPerGame &&
            Object.keys(this.props.goalsPerGame).length > 0)) ? (
          <>
            <div className="graphSection">
              <div className="sectionHeading">
                <div className="sectionTitle">
                  {this.props.staticKeyWords.homeAwayDraw}
                </div>
              </div>
              <div className="graphContainer">
                <div className="graphContent TwoInRow">
                  <div className="leftColumn">
                    <HomeAwayDrawGraph
                      homeTeamName={this.props.homeTeamName}
                      awayTeamName={this.props.awayTeamName}
                      had={this.props.had}
                      draw={this.props.staticKeyWords.draw}
                      loadin="had"
                      title={this.props.staticKeyWords.fullTime}
                    />
                    <HomeAwayDrawGraph
                      homeTeamName={this.props.homeTeamName}
                      awayTeamName={this.props.awayTeamName}
                      had={this.props.firstHalfHad}
                      draw={this.props.staticKeyWords.draw}
                      loadin="fhad"
                      title={this.props.staticKeyWords.halfTime}
                    />
                  </div>
                  <div className="rightColumn">
                    {Object.keys(this.props.goalsPerGame).length > 0 && (
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
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="graphSection">
              <div className="sectionHeading">
                <div className="sectionTitle">
                  {this.props.staticKeyWords.handicap}
                </div>
              </div>
              <div className="graphContainer">
                <div className="graphContent TwoInRow">
                  {/*<TableGraph data={this.props.hdc}
                                        homeTeamName={this.props.homeTeamName}
                                        awayTeamName={this.props.awayTeamName}/>*/}
                  <div className="leftColumn">
                    <HaFuGraph
                      data={this.props.hdc}
                      loadin="hdc"
                      title={this.props.staticKeyWords.handicap}
                      maxValue={8}
                      graphHeight="300px"
                      graphWidth="85%"
                    />
                  </div>
                  <div className="rightColumn">
                    <HomeAwayDrawGraph
                      homeTeamName={this.props.homeTeamName}
                      awayTeamName={this.props.awayTeamName}
                      had={this.props.hdcHad}
                      loadin="hachad"
                      draw={this.props.staticKeyWords.draw}
                      title={this.props.staticKeyWords.handicapHAD}
                      graphHeight="200px"
                      graphWidth="85%"
                    />
                  </div>
                </div>
                <div className="noDatagraph">
                  {this.props.staticKeyWords.handicapLinePastGame}
                </div>
              </div>
            </div>
            <div className="graphSection">
              <div className="sectionHeading">
                <div className="sectionTitle">
                  <span>{this.props.staticKeyWords.csHafu}</span>
                </div>
              </div>

              <div className="graphContainer">
                <div className="graphContent TwoInRow">
                  <div className="correctScore-graph leftColumn leftColumn-fullwidth singleColumn">
                    <CorrectScoreGraph
                      data={this.props.fullTime}
                      maxValue={8}
                      loadin="csfilltime"
                      graphWidth="85%"
                      graphHeight="300px"
                      title={this.props.staticKeyWords.fullTime}
                    />
                    <CorrectScoreGraph
                      data={this.props.halfTime}
                      maxValue={8}
                      loadin="cshalftime"
                      graphWidth="85%"
                      graphHeight="300px"
                      title={this.props.staticKeyWords.halfTime}
                    />
                  </div>
                  <div className="haFu rightColumn rightColumn-fullwidth ">
                    <HaFuGraph
                      data={this.props.haFu}
                      loadin="hafu"
                      maxValue={8}
                      title={this.props.staticKeyWords.haFu}
                      graphHeight="600px"
                      graphWidth="85%"
                    />
                  </div>
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
    h2hLastEncounters: state.hadhandicap.h2hLastEncounters,
    // homeTeamName:state.hadhandicap.homeTeamName,
    // awayTeamName:state.hadhandicap.awayTeamName,
    homeTeamName: state.match.bannerData.homeTeamName,
    awayTeamName: state.match.bannerData.awayTeamName,
    homeTeamId: state.match.bannerData.homeTeamId,
    awayTeamId: state.match.bannerData.awayTeamId,
    had: state.hadhandicap.had,
    firstHalfHad: state.hadhandicap.firstHalfHad,
    hdcHad: state.hadhandicap.hdcHad,
    options: state.hadhandicap.options,
    fullTime: state.hadhandicap.fullTime,
    halfTime: state.hadhandicap.halfTime,
    haFu: state.hadhandicap.haFu,
    goalsPerGame: state.hadhandicap.goalsPerGame,
    hdc: state.hadhandicap.hdc,
    staticKeyWords: state.app.staticKeyWords,
    selectedOptionId: state.hadhandicap.selectedOptionId,
    languageId: state.app.languageId,
    lastEncountersOptions: state.matchcenter.lastEncountersOptions,
    tableRecentResults: state.hadhandicap.tableRecentResults,
    loader: state.hadhandicap.loader,
    eventInfo: state.app.eventInfo,
    isData: state.hadhandicap.isData,
    isEdisplay: state.app.isEdisplay,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(
      {
        setOptions,
      },
      dispatch,
    ),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HADHandicapTab);

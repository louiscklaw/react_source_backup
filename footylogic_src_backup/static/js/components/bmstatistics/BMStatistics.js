import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import BMRecentformsTable from "../bmrecentformstable/BMRecentformsTable";
import { getMarketsInfo, setTableHeaders } from "./BMStatisticsSlice";
import { toggleMode } from "../../layouts/matchSlice";
import Loading from "../loading/Loading";
import { getSeasonslist } from "../../layouts/matchSlice";
import { setDisableLeagues } from "../../AppSlice";

class BMStatistics extends Component {
  componentWillMount() {
    this.props.dispatch(toggleMode(false));
    if (
      this.props.homeTeamId &&
      this.props.homeTeamId > 0 &&
      this.props.homeTeamId !== undefined &&
      this.props.awayTeamId &&
      this.props.awayTeamId > 0 &&
      this.props.awayTeamId !== undefined &&
      this.props.eventInfo &&
      this.props.eventInfo.eventId &&
      ("" + this.props.eventInfo.eventId).length > 0
    ) {
      this.props.dispatch(
        getMarketsInfo(
          this.props.eventInfo.eventId,
          this.props.allSeasons && this.props.allSeasons.length
            ? this.props.allSeasons[0].id
            : "1",
          this.props.homeTeamId,
          this.props.awayTeamId,
          this.props.eventInfo.competitionId,
        ),
      );
    }

    if (this.props.staticKeyWords && Object.keys(this.props.staticKeyWords)) {
      this.props.dispatch(setTableHeaders(this.props.staticKeyWords));
    }
  }
  componentDidMount() {
    if (this.props.eventInfo) {
      this.props.dispatch(
        getSeasonslist(
          this.props.languageId,
          2,
          this.props.eventInfo.competitionId,
        ),
      );
    }
    this.props.dispatch(
      setDisableLeagues({ disable: true, tab: "STATISTICS" }),
    );
  }
  componentWillUnmount() {
    this.props.dispatch(
      setDisableLeagues({ disable: false, tab: "STATISTICS" }),
    );
  }
  componentWillReceiveProps(nextProps) {
    if (
      JSON.stringify(this.props.staticKeyWords) !==
      JSON.stringify(nextProps.staticKeyWords)
    ) {
      this.props.dispatch(setTableHeaders(nextProps.staticKeyWords));
    }
    if (
      (nextProps.homeTeamId !== undefined &&
        nextProps.awayTeamId !== undefined &&
        this.props.eventInfo.eventId !== nextProps.eventInfo.eventId &&
        ("" + nextProps.eventInfo.eventId).length > 0) ||
      (nextProps.homeTeamId &&
        nextProps.homeTeamId > 0 &&
        nextProps.awayTeamId &&
        nextProps.awayTeamId > 0 &&
        (this.props.homeTeamId !== nextProps.homeTeamId ||
          this.props.awayTeamId !== nextProps.awayTeamId))
    ) {
      this.props.dispatch(
        getMarketsInfo(
          nextProps.eventInfo.eventId,
          nextProps.allSeasons && nextProps.allSeasons.length
            ? nextProps.allSeasons[0].id
            : "1",
          nextProps.homeTeamId,
          nextProps.awayTeamId,
          nextProps.eventInfo.competitionId,
        ),
      );
    }
  }
  render() {
    return (
      <React.Fragment>
        {Object.keys(this.props.marketsInfo).length > 0 ? (
          <div className="pageContent headTo-headHKJC-statistics p-0">
            <div className="graphSection">
              <div className="sectionHeading">
                <div className="sectionTitle">
                  {this.props.staticKeyWords.leagueTable}
                </div>
                <div className="sectionFilter">
                  <div className="form-group form-inline">
                    <div className="form-control">
                      <select
                        value={this.props.selectedSeasonId}
                        onChange={(event) =>
                          this.props.dispatch(
                            getMarketsInfo(
                              this.props.match.params.eventId,
                              event.target.value,
                              this.props.homeTeamId,
                              this.props.awayTeamId,
                              this.props.eventInfo.competitionId,
                            ),
                          )
                        }
                      >
                        {this.props.allSeasons.map((item, index) => {
                          return <option value={item.id}>{item.name}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graphContainer">
                <div className="tableTwo-column statisticsTables tableTwo-columntabview">
                  <div className="tableHome">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty("leagueTable") && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHome={true}
                          columns={this.props.leagueColumns}
                          data={this.props.marketsInfo.leagueTable.homeTeam}
                        />
                      )}
                    </div>
                  </div>
                  <div className="tableAway">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty("leagueTable") && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHome={false}
                          columns={this.props.leagueColumns}
                          data={this.props.marketsInfo.leagueTable.awayTeam}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graphSection">
              <div className="sectionHeading">
                <div className="sectionTitle">
                  {this.props.staticKeyWords.firstHalfHAD}
                </div>
              </div>
              <div className="graphContainer">
                <div className="tableTwo-column statisticsTables tableTwo-columntabview">
                  <div className="tableHome">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty("fhHadTable") && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHome={true}
                          columns={this.props.fhHadColumns}
                          data={this.props.marketsInfo.fhHadTable.homeTeam}
                        />
                      )}
                    </div>
                  </div>
                  <div className="tableAway">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty("fhHadTable") && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHome={false}
                          columns={this.props.fhHadColumns}
                          data={this.props.marketsInfo.fhHadTable.awayTeam}
                        />
                      )}
                    </div>
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
                <div className="tableTwo-column statisticsTables tableTwo-columntabview">
                  <div className="tableHome">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty(
                        "handicapTable",
                      ) && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHome={true}
                          columns={this.props.handicapColumns}
                          data={this.props.marketsInfo.handicapTable.homeTeam}
                        />
                      )}
                    </div>
                  </div>
                  <div className="tableAway">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty(
                        "handicapTable",
                      ) && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHome={false}
                          columns={this.props.handicapColumns}
                          data={this.props.marketsInfo.handicapTable.awayTeam}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="graphSection">
              <div className="sectionHeading">
                <div className="sectionTitle">
                  {this.props.staticKeyWords.handicapHAD}
                </div>
              </div>
              <div className="graphContainer">
                <div className="tableTwo-column statisticsTables tableTwo-columntabview">
                  <div className="tableHome">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty(
                        "handicapHadTable",
                      ) && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHome={true}
                          columns={this.props.fhHadColumns}
                          data={
                            this.props.marketsInfo.handicapHadTable.homeTeam
                          }
                        />
                      )}
                    </div>
                  </div>
                  <div className="tableAway">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty(
                        "handicapHadTable",
                      ) && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHome={false}
                          columns={this.props.fhHadColumns}
                          data={
                            this.props.marketsInfo.handicapHadTable.awayTeam
                          }
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graphSection">
              <div className="sectionHeading">
                <div className="sectionTitle">
                  <span>{this.props.staticKeyWords.hiLo}</span>
                </div>
              </div>
              <div className="graphContainer">
                <div className="tableTwo-column statisticsTables tableTwo-columntabview">
                  <div className="tableHome">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty("hiLoTable") && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHilo={true}
                          isHome={true}
                          columns={this.props.hilpCornersColumns.subColumns}
                          mainColumns={
                            this.props.hilpCornersColumns.mainColumns
                          }
                          data={this.props.marketsInfo.hiLoTable.homeTeam}
                        />
                      )}
                    </div>
                  </div>
                  <div className="tableAway">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty("hiLoTable") && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHilo={true}
                          isHome={false}
                          columns={this.props.hilpCornersColumns.subColumns}
                          mainColumns={
                            this.props.hilpCornersColumns.mainColumns
                          }
                          data={this.props.marketsInfo.hiLoTable.awayTeam}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graphSection">
              <div className="sectionHeading">
                <div className="sectionTitle">
                  {this.props.staticKeyWords.cornersHiLo}
                </div>
              </div>
              <div className="graphContainer">
                <div className="tableTwo-column statisticsTables tableTwo-columntabview">
                  <div className="tableHome">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty(
                        "cornerHiLoTable",
                      ) && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isCornersHilo={true}
                          isHome={true}
                          columns={this.props.cornersHiloColumns}
                          data={this.props.marketsInfo.cornerHiLoTable.homeTeam}
                        />
                      )}
                    </div>
                  </div>
                  <div className="tableAway">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty(
                        "cornerHiLoTable",
                      ) && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isCornersHilo={true}
                          isHome={false}
                          columns={this.props.cornersHiloColumns}
                          data={this.props.marketsInfo.cornerHiLoTable.awayTeam}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graphSection">
              <div className="sectionHeading">
                <div className="sectionTitle">
                  {this.props.staticKeyWords.odd} /{" "}
                  {this.props.staticKeyWords.even}
                </div>
              </div>
              <div className="graphContainer">
                <div className="tableTwo-column statisticsTables tableTwo-columntabview">
                  <div className="tableHome">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty(
                        "oddEvenTable",
                      ) && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHome={true}
                          columns={this.props.oddEvenColumns}
                          data={this.props.marketsInfo.oddEvenTable.homeTeam}
                        />
                      )}
                    </div>
                  </div>
                  <div className="tableAway">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty(
                        "oddEvenTable",
                      ) && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHome={false}
                          columns={this.props.oddEvenColumns}
                          data={this.props.marketsInfo.oddEvenTable.awayTeam}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graphSection">
              <div className="sectionHeading">
                <div className="sectionTitle">
                  {this.props.staticKeyWords.firstHalfCorrectScore}
                </div>
              </div>
              <div className="graphContainer">
                <div className="tableTwo-column statisticsTables tableTwo-columntabview">
                  <div className="tableHome">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty(
                        "firstHalfCorrectScoreTable",
                      ) && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHome={true}
                          columns={this.props.fhCorrectScoreColumns}
                          data={
                            this.props.marketsInfo.firstHalfCorrectScoreTable
                              .homeTeam
                          }
                        />
                      )}
                    </div>
                  </div>
                  <div className="tableAway">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty(
                        "firstHalfCorrectScoreTable",
                      ) && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHome={false}
                          columns={this.props.fhCorrectScoreColumns}
                          data={
                            this.props.marketsInfo.firstHalfCorrectScoreTable
                              .awayTeam
                          }
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graphSection">
              <div className="sectionHeading">
                <div className="sectionTitle">
                  {this.props.staticKeyWords.correctScore}
                </div>
              </div>
              <div className="graphContainer">
                <div className="tableTwo-column statisticsTables tableTwo-columntabview">
                  <div className="tableHome">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty(
                        "correctScoreTable",
                      ) && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHome={true}
                          columns={this.props.fhCorrectScoreColumns}
                          data={
                            this.props.marketsInfo.correctScoreTable.homeTeam
                          }
                        />
                      )}
                    </div>
                  </div>
                  <div className="tableAway">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty(
                        "correctScoreTable",
                      ) && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHome={false}
                          columns={this.props.fhCorrectScoreColumns}
                          data={
                            this.props.marketsInfo.correctScoreTable.awayTeam
                          }
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graphSection">
              <div className="sectionHeading">
                <div className="sectionTitle">
                  {this.props.staticKeyWords.firstTeamToScore}
                </div>
              </div>
              <div className="graphContainer">
                <div className="tableTwo-column statisticsTables tableTwo-columntabview">
                  <div className="tableHome">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty(
                        "firstTeamToScoreTable",
                      ) && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHome={true}
                          columns={this.props.teamToScoreColumns}
                          data={
                            Object.keys(
                              this.props.marketsInfo.firstTeamToScoreTable,
                            ).length
                              ? this.props.marketsInfo.firstTeamToScoreTable
                                  .teamToScore.homeTeam
                              : ""
                          }
                        />
                      )}
                    </div>
                  </div>
                  <div className="tableAway">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty(
                        "firstTeamToScoreTable",
                      ) && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHome={false}
                          columns={this.props.teamToScoreColumns}
                          data={
                            Object.keys(
                              this.props.marketsInfo.firstTeamToScoreTable,
                            ).length
                              ? this.props.marketsInfo.firstTeamToScoreTable
                                  .teamToScore.awayTeam
                              : ""
                          }
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="tableTwo-column statisticsTables pt-0 tableTwo-columntabview">
                  <div className="tableHome">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty(
                        "firstTeamToScoreTable",
                      ) && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHome={true}
                          columns={this.props.teamToWinColumns}
                          data={
                            Object.keys(
                              this.props.marketsInfo.firstTeamToScoreTable,
                            ).length
                              ? this.props.marketsInfo.firstTeamToScoreTable
                                  .scoreFirst.homeTeam
                              : ""
                          }
                        />
                      )}
                    </div>
                  </div>
                  <div className="tableAway">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty(
                        "firstTeamToScoreTable",
                      ) && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHome={false}
                          columns={this.props.teamToWinColumns}
                          data={
                            Object.keys(
                              this.props.marketsInfo.firstTeamToScoreTable,
                            ).length
                              ? this.props.marketsInfo.firstTeamToScoreTable
                                  .scoreFirst.awayTeam
                              : ""
                          }
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graphSection">
              <div className="sectionHeading">
                <div className="sectionTitle">
                  {this.props.staticKeyWords.htft}
                </div>
              </div>
              <div className="graphContainer">
                <div className="tableTwo-column statisticsTables tableTwo-columntabview">
                  <div className="tableHome">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty("htFtTable") && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHome={true}
                          columns={this.props.htftColumns}
                          data={this.props.marketsInfo.htFtTable.homeTeam}
                        />
                      )}
                    </div>
                  </div>
                  <div className="tableAway">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty("htFtTable") && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHome={false}
                          columns={this.props.htftColumns}
                          data={this.props.marketsInfo.htFtTable.awayTeam}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graphSection">
              <div className="sectionHeading">
                <div className="sectionTitle">
                  {this.props.staticKeyWords.totalGoals}
                </div>
              </div>
              <div className="graphContainer">
                <div className="tableTwo-column statisticsTables tableTwo-columntabview">
                  <div className="tableHome">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty("goalsTable") && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHome={true}
                          columns={this.props.goalsColumns}
                          data={this.props.marketsInfo.goalsTable.homeTeam}
                        />
                      )}
                    </div>
                  </div>
                  <div className="tableAway">
                    <div className="tableFull-width">
                      {this.props.marketsInfo.hasOwnProperty("goalsTable") && (
                        <BMRecentformsTable
                          isStatistics={true}
                          isHome={false}
                          columns={this.props.goalsColumns}
                          data={this.props.marketsInfo.goalsTable.awayTeam}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<div className="graphSection">

                    <div className="sectionHeading">
                        <div className="sectionTitle">{this.props.staticKeyWords.tts}</div>
                    </div>
                    <div className="graphContainer">
                        <div className="tableTwo-column statisticsTables">
                            <div className="tableHome">
                                <div className="tableFull-width">
                                    {this.props.marketsInfo.hasOwnProperty('teamsToScoreTable') && 
                                    <BMRecentformsTable isStatistics={true} isHome={true} columns={this.props.teamsToScoreColumns} data={this.props.marketsInfo.teamsToScoreTable.homeTeam}/>}
                                </div>

                            </div>
                            <div className="tableAway">
                                <div className="tableFull-width">
                                    {this.props.marketsInfo.hasOwnProperty('teamsToScoreTable') && 
                                    <BMRecentformsTable isStatistics={true} isHome={false} columns={this.props.teamsToScoreColumns} data={this.props.marketsInfo.teamsToScoreTable.awayTeam}/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>*/}
          </div>
        ) : (
          <Loading
            isLoader={this.props.loader}
            isNoData={
              !this.props.loader && !Object.keys(this.props.marketsInfo).length
            }
          />
        )}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    leagueColumns: state.bmstatistics.leagueColumns,
    fhHadColumns: state.bmstatistics.fhHadColumns,
    handicapColumns: state.bmstatistics.handicapColumns,
    oddEvenColumns: state.bmstatistics.oddEvenColumns,
    teamsToScoreColumns: state.bmstatistics.teamsToScoreColumns,
    htftColumns: state.bmstatistics.htftColumns,
    goalsColumns: state.bmstatistics.goalsColumns,
    fhCorrectScoreColumns: state.bmstatistics.fhCorrectScoreColumns,
    hilpCornersColumns: state.bmstatistics.hilpCornersColumns,
    cornersHiloColumns: state.bmstatistics.cornersHiloColumns,
    teamToScoreColumns: state.bmstatistics.teamToScoreColumns,
    teamToWinColumns: state.bmstatistics.teamToWinColumns,
    marketsInfo: state.bmstatistics.marketsInfo,
    selectedFilter: state.bmstatistics.selectedFilter,
    staticKeyWords: state.app.staticKeyWords,
    loader: state.app.loader,
    allSeasons: state.match.allSeasons,
    selectedSeasonId: state.bmstatistics.selectedSeasonId,
    homeTeamId: state.match.homeTeamId,
    awayTeamId: state.match.awayTeamId,
    eventInfo: state.app.eventInfo,
    languageId: state.app.languageId,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(BMStatistics);

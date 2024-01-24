import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Route, Switch, NavLink } from "react-router-dom";
import Standings from "./standings/Standings";
import KeyIndicators from "./keyindicators/KeyIndicators";
import {
  getTablesList,
  bindLink,
  getFiltersData,
  highlightTab,
  setTableHeaders,
  resetTableData,
} from "./SeasonalStatsSlice";
// import { setEventId } from '../../AppSlice'
import {
  setLoader,
  setDisableLeagues,
  setDisplayMode,
  checkEdisplay,
  metaData,
} from "../../AppSlice";

class SeasonalStats extends Component {
  // componentWillMount(){
  //     this.props.dispatch(setEventId({
  //       countryId:this.props.match.params.countryId,
  //       competitionId:this.props.match.params.competitionId,
  //       eventId:this.props.match.params.eventId
  //     }))
  // }
  componentWillMount() {
    this.props.dispatch(setLoader(true));
    this.props.dispatch(resetTableData([]));
    if ((this.props.homeTeamId && this.props.awayTeamId) || this.props.type) {
      this.props.dispatch(
        getTablesList(
          this.props.tableAndRoutes,
          this.props.match.params.eventId,
          this.props.match.params.competitionId
            ? this.props.match.params.competitionId
            : this.props.match.params.leagueId,
          this.props.isTournament,
          this.props.type,
          this.props.languageId,
          this.props.homeTeamId,
          this.props.awayTeamId,
        ),
      );
      if (this.props.type === "team") {
        this.props.dispatch(
          metaData("TeamSeasonalStats", this.props.competitionName),
        );
      } else if (this.props.isTournament) {
        if (this.props.competitionName) {
          this.props.dispatch(
            metaData("TournamentSeasonalStats", this.props.competitionName),
          );
        }
      } else {
        if (this.props.homeTeamName && this.props.awayTeamName) {
          this.props.dispatch(
            metaData(
              "SeasonalStats",
              this.props.homeTeamName + " vs " + this.props.awayTeamName,
            ),
          );
        }
      }
    }

    if (
      this.props.staticKeyWords &&
      Object.keys(this.props.staticKeyWords).length > 0
    ) {
      this.props.dispatch(
        setTableHeaders({
          keyWords: this.props.staticKeyWords,
          type: this.props.type,
        }),
      );
    }
  }
  componentWillReceiveProps(nextProps) {
    if (
      ((this.props.homeTeamId !== nextProps.homeTeamId ||
        this.props.awayTeamId !== nextProps.awayTeamId) &&
        nextProps.homeTeamId &&
        ("" + nextProps.homeTeamId).length > 0 &&
        nextProps.awayTeamId &&
        ("" + nextProps.awayTeamId).length > 0) ||
      (nextProps.type && this.props.type != nextProps.type)
    ) {
      this.props.dispatch(setLoader(true));
      this.props.dispatch(
        getTablesList(
          nextProps.tableAndRoutes,
          nextProps.eventInfo.eventId,
          nextProps.eventInfo.competitionId
            ? nextProps.eventInfo.competitionId
            : nextProps.match.params.leagueId,
          nextProps.isTournament,
          nextProps.type,
          nextProps.languageId,
          nextProps.homeTeamId,
          nextProps.awayTeamId,
        ),
      );
      // this.props.dispatch(getTableData({table:this.props.selectedTable,
      //                                   eventId:nextProps.eventInfo.eventId,
      //                                   competitionId:nextProps.eventInfo.competitionId,
      //                                   languageId:this.props.languageId,
      //                                   homeTeamId:nextProps.homeTeamId,
      //                                   awayTeamId:nextProps.awayTeamId
      //                                 }));
      // this.props.dispatch(getFiltersData({table:this.props.selectedTable,
      //         eventId:nextProps.eventInfo.eventId,
      //         competitionId:nextProps.eventInfo.competitionId,
      //         languageId:this.props.languageId,
      //         homeTeamId:nextProps.homeTeamId,
      //         awayTeamId:nextProps.awayTeamId
      //       }));
    }
    if (nextProps.type === "team") {
      if (nextProps.competitionName !== this.props.competitionName) {
        this.props.dispatch(
          metaData("TeamSeasonalStats", nextProps.competitionName),
        );
      }
    } else if (nextProps.isTournament) {
      if (nextProps.competitionName !== this.props.competitionName) {
        this.props.dispatch(
          metaData("TournamentSeasonalStats", nextProps.competitionName),
        );
      }
    } else {
      if (
        this.props?.awayTeamName &&
        this.props?.awayTeamName &&
        nextProps.homeTeamName !== this.props.homeTeamName &&
        nextProps.awayTeamName !== this.props.awayTeamName
      ) {
        this.props.dispatch(
          metaData(
            "SeasonalStats",
            nextProps.homeTeamName + " vs " + nextProps.awayTeamName,
          ),
        );
      }
    }
    if (this.props.staticKeyWords !== nextProps.staticKeyWords) {
      this.props.dispatch(
        setTableHeaders({
          keyWords: nextProps.staticKeyWords,
          type: nextProps.type,
        }),
      );
    }
  }
  componentDidMount() {
    this.props.dispatch(setDisableLeagues({ disable: true, tab: "STATS" }));
    // this.props.dispatch(getTableData({table:this.props.selectedTable, eventId:this.props.match.params.eventId}));
    // this.props.dispatch(getFiltersData(this.props.selectedTable.tableId));
    if (checkEdisplay()) {
      this.props.dispatch(setDisplayMode(true));
    }
  }
  componentWillUnmount() {
    this.props.dispatch(setDisplayMode(false));
    this.props.dispatch(setDisableLeagues({ disable: false, tab: "STATS" }));
  }

  render() {
    // console.log("compname",this.props.competitionName)
    // console.log("fh",this.props.selectedBetTypeFilter)
    return (
      <div className="pageContent">
        <div className="seasonalStats">
          <div className="seasonalStats-tablesList">
            <div className="listItems">
              <ul>
                {/*<li><a className="active" href="seasonal-stats-standings.html"> Standings</a></li>
                        <li><a href="key-indicators.html">Key Indicators</a></li>*/}

                {this.props.tablesList &&
                  this.props.tablesList.map((table, index) => {
                    // if((this.props.isTournament && table.tableId!=1 && table.tableId!=2) || !this.props.isTournament){
                    if (
                      (this.props.isTournament && table.tableId != 2) ||
                      !this.props.isTournament
                    ) {
                      return (
                        <li
                          className={this.props.dispatch(
                            highlightTab(
                              table.tableId,
                              this.props.tableAndRoutes,
                              index,
                              this.props.isTournament,
                              this.props.type,
                            ),
                          )}
                          key={index}
                          onClick={() =>
                            // this.props.dispatch(getTableData({table:table,eventId:this.props.eventInfo.eventId,competitionId:this.props.eventInfo.competitionId?this.props.eventInfo.competitionId:this.props.match.params.leagueId,languageId:this.props.languageId,homeTeamId:this.props.homeTeamId,awayTeamId:this.props.awayTeamId}))
                            this.props.dispatch(
                              getFiltersData({
                                table: table,
                                eventId: this.props.eventInfo.eventId,
                                competitionId: this.props.eventInfo
                                  .competitionId
                                  ? this.props.eventInfo.competitionId
                                  : this.props.match.params.leagueId,
                                languageId: this.props.languageId,
                                homeTeamId: this.props.homeTeamId,
                                awayTeamId: this.props.awayTeamId,
                              }),
                            )
                          }
                        >
                          <NavLink
                            to={this.props.dispatch(
                              bindLink(
                                table.tableId,
                                this.props.tableAndRoutes,
                                index,
                              ),
                            )}
                          >
                            {table.tableName}
                          </NavLink>
                        </li>
                      );
                    }
                  })}
                {/*
                        <li>
                            <NavLink to="standings">
                                Standings
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="keyindicators">
                                Key Indicators
                            </NavLink>
                        </li>
                        <li><a href="first-half-had.html"> First Half HAD</a></li>
                        <li><a href="handicap.html">Handicap</a></li>
                        <li><a href="handicap-had.html">Handicap HAD </a></li>
                        <li><a href="hafu.html">HaFu</a></li>
                        <li><a href="hilo.html">HiLo</a></li>
                        <li><a href="fh-hilo.html">FH HiLo</a></li>
                        <li><a href="teams-to-score.html">Teams to Score & Odd/Even</a></li>
                        <li><a href="first-team-to-score.html">First Team to Score</a></li>
                        <li><a href="correct-score.html">Correct Score</a></li>
                        <li><a href="fh-correct.html">FH Correct Score</a></li>
                        <li><a href="corners-hilo.html">Corners HiLo</a></li>
                        <li><a href="total-goals.html">Total Goals</a></li>
                    */}
              </ul>
            </div>
          </div>
          {/*{!this.props.isTournament?<Switch>
                <Route exact path="/matchcenter/:countryId/:competitionId/:eventId/seasonalstats/standings/" render={(props)=><Standings {...props}/>}/> 
                <Route exact path="/matchcenter/:countryId/:competitionId/:eventId/seasonalstats/keyindicators" component={KeyIndicators}/> 
                <Route exact path="/matchcenter/:countryId/:competitionId/:eventId/seasonalstats/firsthalfhad" render={(props)=><Standings {...props}/>}/>
                <Route exact path="/matchcenter/:countryId/:competitionId/:eventId/seasonalstats/handicap" render={(props)=><Standings {...props}/>}/>
                <Route exact path="/matchcenter/:countryId/:competitionId/:eventId/seasonalstats/hafu" render={(props)=><Standings {...props}/>}/>
                <Route exact path="/matchcenter/:countryId/:competitionId/:eventId/seasonalstats/handicaphad" render={(props)=><Standings {...props}/>}/>
                <Route exact path="/matchcenter/:countryId/:competitionId/:eventId/seasonalstats/teamstoscoreoddoreven" render={(props)=><Standings {...props}/>}/>
                <Route exact path="/matchcenter/:countryId/:competitionId/:eventId/seasonalstats/hilo" render={(props)=><Standings {...props}/>}/>
                <Route exact path="/matchcenter/:countryId/:competitionId/:eventId/seasonalstats/fhhilo" render={(props)=><Standings {...props}/>}/>
                <Route exact path="/matchcenter/:countryId/:competitionId/:eventId/seasonalstats/cornershilo" render={(props)=><Standings {...props}/>}/>
                <Route exact path="/matchcenter/:countryId/:competitionId/:eventId/seasonalstats/totalgoals" render={(props)=><Standings {...props}/>}/>
                <Route exact path="/matchcenter/:countryId/:competitionId/:eventId/seasonalstats/firstteamtoscore" render={(props)=><Standings {...props}/>}/> 
                <Route exact path="/matchcenter/:countryId/:competitionId/:eventId/seasonalstats/correctscore" render={(props)=><Standings {...props}/>}/> 
                <Route exact path="/matchcenter/:countryId/:competitionId/:eventId/seasonalstats/fhcorrectscore" render={(props)=><Standings {...props}/>}/> 
            </Switch>:*/}
          <Switch>
            <Route
              exact
              path={this.props.match.path + "/standings"}
              render={(props) => (
                <Standings
                  {...props}
                  isTournament={this.props.isTournament}
                  type={this.props.type}
                  teamId={this.props.match.params.teamId}
                />
              )}
            />
            <Route
              exact
              path={this.props.match.path + "/keyindicators"}
              component={KeyIndicators}
            />
            {/*<Route exact path={this.props.match.path+"/firsthalfhad"} render={(props)=><Standings {...props} isTournament={this.props.isTournament} type={this.props.type} teamId={this.props.match.params.teamId}/>}/>*/}
            <Route
              exact
              path={this.props.match.path + "/handicap"}
              render={(props) => (
                <Standings
                  {...props}
                  rankingBasis={
                    this.props?.staticKeyWords?.RankingBasisHandicap
                  }
                  isTournament={this.props.isTournament}
                  type={this.props.type}
                  teamId={this.props.match.params.teamId}
                />
              )}
            />
            <Route
              exact
              path={this.props.match.path + "/hafu"}
              render={(props) => (
                <Standings
                  {...props}
                  isTournament={this.props.isTournament}
                  type={this.props.type}
                  teamId={this.props.match.params.teamId}
                />
              )}
            />
            <Route
              exact
              path={this.props.match.path + "/handicaphad"}
              render={(props) => (
                <Standings
                  {...props}
                  rankingBasis={
                    this.props?.staticKeyWords?.RankingBasisHandicapHAD
                  }
                  isTournament={this.props.isTournament}
                  type={this.props.type}
                  teamId={this.props.match.params.teamId}
                />
              )}
            />
            <Route
              exact
              path={this.props.match.path + "/teamstoscoreoddoreven"}
              render={(props) => (
                <Standings
                  {...props}
                  rankingBasis={this.props?.staticKeyWords?.RankingBasisOddEven}
                  isTournament={this.props.isTournament}
                  type={this.props.type}
                  teamId={this.props.match.params.teamId}
                />
              )}
            />
            <Route
              exact
              path={this.props.match.path + "/hilo"}
              render={(props) => (
                <Standings
                  {...props}
                  rankingBasiswlhalf={
                    this.props?.staticKeyWords?.RankingBasisFHHiLo
                  }
                  rankingBasisWL={this.props?.staticKeyWords?.RankingBasisHiLo}
                  isTournament={this.props.isTournament}
                  type={this.props.type}
                  teamId={this.props.match.params.teamId}
                />
              )}
            />
            {/* <Route exact path={this.props.match.path + "/fhhilo"} render={(props) => <Standings {...props} rankingBasis={this.props?.staticKeyWords?.RankingBasisFHHiLo} isTournament={this.props.isTournament} />} /> */}
            <Route
              exact
              path={this.props.match.path + "/cornershilo"}
              render={(props) => (
                <Standings
                  {...props}
                  rankingBasis={
                    this.props?.staticKeyWords?.RankingBasisCornersHiLo
                  }
                  isTournament={this.props.isTournament}
                  type={this.props.type}
                  teamId={this.props.match.params.teamId}
                />
              )}
            />
            <Route
              exact
              path={this.props.match.path + "/totalgoals"}
              render={(props) => (
                <Standings
                  {...props}
                  isTournament={this.props.isTournament}
                  type={this.props.type}
                  teamId={this.props.match.params.teamId}
                />
              )}
            />
            <Route
              exact
              path={this.props.match.path + "/firstteamtoscore"}
              render={(props) => (
                <Standings
                  {...props}
                  rankingBasis={
                    this.props?.staticKeyWords?.RankingBasisFirstTeamtoScore
                  }
                  isTournament={this.props.isTournament}
                  type={this.props.type}
                  teamId={this.props.match.params.teamId}
                />
              )}
            />
            <Route
              exact
              path={this.props.match.path + "/correctscore"}
              render={(props) => (
                <Standings
                  {...props}
                  correctScoreallTournament={
                    this.props.staticKeyWords.correctScoreTournament
                  }
                  isTournament={this.props.isTournament}
                  type={this.props.type}
                  teamId={this.props.match.params.teamId}
                />
              )}
            />
            {/*<Route exact path={this.props.match.path+"/fhcorrectscore"} render={(props)=><Standings {...props} isTournament={this.props.isTournament}/>}/> */}
          </Switch>
          {/* <div className="timeStamp">*Last updated on {this.props.lastUpdated}</div> */}
          {/*}*/}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    tablesList: state.seasonalstats.tablesList,
    eventInfo: state.app.eventInfo,
    selectedTable: state.seasonalstats.selectedTable,
    tableAndRoutes: state.seasonalstats.tableAndRoutes,
    staticKeyWords: state.app.staticKeyWords,
    languageId: state.app.languageId,
    homeTeamId: state.match.bannerData.homeTeamId,
    awayTeamId: state.match.bannerData.awayTeamId,
    lastUpdated: state.seasonalstats.lastUpdated,
    homeTeamName: state.match.homeTeamName,
    awayTeamName: state.match.awayTeamName,
    competitionName: state.tournamentleague.comepetitionAndDate.competitionName,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SeasonalStats);

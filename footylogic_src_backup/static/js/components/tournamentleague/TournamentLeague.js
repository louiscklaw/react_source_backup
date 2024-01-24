import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import TournamentStandings from "../tournamentstandings/TournamentStandings";
import TopScorer from "../topscorer/TopScorer";
import Players from "../players/Players";
import FixturesResults from "../fixturesresults/FixturesResults";
import { setSelectedTabId } from "../fixturesresults/FixturesResultsSlice";
import Rules from "../rules/Rules";
// import TeamsPageLayout from '../teamspagelayout/TeamsPageLayout';
import SeasonalStats from "../seasonalstats/SeasonalStats";
import {
  navigateTo,
  resetButtons,
  highlightButton,
} from "./TournamentLeagueSlice";
import { configurations } from "../../sharedfiles/constants";
import { formatDate } from "../../sharedfiles/helper";
class TournamentLeague extends Component {
  componentWillReceiveProps(nextProps) {}
  componentWillMount() {
    this.props.dispatch(resetButtons());
  }
  getScreen() {
    var url = window.location.pathname.split("/");

    if (url.includes("team")) {
      return "team";
    } else {
      return "league";
    }
  }

  goBack() {
    if (this.props.match && this.props.match.params) {
      var screen = this.getScreen();
      // if(screen === 'league'){
      //   this.props.history.push("/tournament/home/league");
      // }else if(screen === 'team'){
      //  this.props.history.push("/tournament/league/"+this.props.match.params.leagueId+'/standings');
      // }
      var lang = "en";
      if (
        this.props.match &&
        this.props.match.params.lang &&
        this.props.match.params.lang.length > 0
      ) {
        lang = this.props.match.params.lang;
      }
      if (screen === "league") {
        this.props.history.push(
          "/" + lang + "/tournament/home/" + this.props.match.params.leagueType,
        );
      } else if (screen === "team") {
        this.props.history.push(
          "/" +
            lang +
            "/tournament/" +
            this.props.match.params.leagueType +
            "/" +
            this.props.match.params.leagueId +
            "/standings",
        );
      }
      this.props.dispatch(resetButtons());
    }
  }
  render() {
    //console.log(this.props.match.params.leagueType)
    var screen = this.getScreen();
    //var internationalTap = window.location.href.includes("international");
    //const competitionId = this.props.bannerData.competitionId;
    const playerTab = this.props.teamPlayer;
    //console.log(this.props.match.params.leagueId);
    //console.log(this.props.playerAnalysis);
    //console.log(this.props.match.params.leagueId);
    // console.log(internationalTap);
    return (
      <div className="mainContent container">
        <div className="page-header">
          <div className="pageBack">
            <i className="icon-arrow-left" onClick={this.goBack.bind(this)}></i>
          </div>
          <div className="page-title">
            <img src="" alt="" />
            {this.props.competitionName}
          </div>
        </div>
        <div className="pageContent">
          <div className="tabSection">
            <div className="space-5"></div>
            {/*<ul className="tabsList" data-persist="true">
                    <li className="tabLinks active" onclick="openCity(event, 'leagueStandings')" id="defaultOpen">
                        <NavLink to="standings">
                          Standings 
                        </NavLink>
                    </li>
                    <li className="tabLinks">
                        <NavLink to="fixturesresults">
                          Fixtures/Results
                        </NavLink>
                    </li>
                    {screen==='league'?<li className="tabLinks" onclick="openCity(event, 'leagueTopScorer')">
                        <NavLink to="topscorer">
                          Top Scorer 
                        </NavLink>
                    </li>:<li className="tabLinks" >
                        <NavLink to="players">
                          Players
                        </NavLink>
                        </li>}
                    <li className="tabLinks" onclick="openCity(event, 'leagueStatistics')">
                        <NavLink to="statistics/standings">Statistics</NavLink></li>
                      {screen==='league'?<li className="tabLinks" onclick="openCity(event, 'leagueRules')">
                        <NavLink to="rules">
                          Rules
                        </NavLink>
                      </li>:""}
                </ul>*/}
            <ul className="tabsList" data-persist="true">
              {this.props.match.params.leagueType === "international" &&
              screen === "team" ? (
                ""
              ) : (
                <li
                  className={this.props.dispatch(
                    highlightButton("standings", this.props.selectedButton),
                  )}
                  onClick={() =>
                    this.props.dispatch(
                      navigateTo(
                        "standings",
                        this.props.match.params,
                        this.props.history,
                      ),
                    )
                  }
                  id="defaultOpen"
                >
                  <NavLink to="#">
                    {this.props.staticKeyWords.standings}
                  </NavLink>
                </li>
              )}
              <li
                className={this.props.dispatch(
                  highlightButton("fixturesresults", this.props.selectedButton),
                )}
                onClick={() => {
                  this.props.dispatch(
                    navigateTo(
                      "fixturesresults",
                      this.props.match.params,
                      this.props.history,
                    ),
                  );
                  this.props.dispatch(setSelectedTabId(2));
                }}
              >
                <NavLink to="#">
                  {this.props.staticKeyWords.fixturesResults}
                </NavLink>
              </li>
              {screen === "league" ? (
                this.props.topScorer.indexOf(
                  parseInt(this.props.match.params.leagueId),
                ) !== -1 ? (
                  <li
                    className={this.props.dispatch(
                      highlightButton("topscorer", this.props.selectedButton),
                    )}
                    onClick={() =>
                      this.props.dispatch(
                        navigateTo(
                          "topscorer",
                          this.props.match.params,
                          this.props.history,
                        ),
                      )
                    }
                  >
                    <NavLink to="#">
                      {this.props.staticKeyWords.topScorer}
                    </NavLink>
                  </li>
                ) : (
                  ""
                )
              ) : playerTab &&
                playerTab.indexOf(parseInt(this.props.match.params.leagueId)) ==
                  -1 ? (
                <li
                  className={
                    (this.props.teamPlayer.indexOf(
                      parseInt(this.props.match.params.leagueId),
                    ) !== -1
                      ? "d-none "
                      : "") +
                    this.props.dispatch(
                      highlightButton("players", this.props.selectedButton),
                    )
                  }
                  onClick={() =>
                    this.props.dispatch(
                      navigateTo(
                        "players",
                        this.props.match.params,
                        this.props.history,
                      ),
                    )
                  }
                >
                  <NavLink to="#">{this.props.staticKeyWords.players}</NavLink>
                </li>
              ) : (
                ""
              )}

              {this.props.match.params.leagueType === "international" &&
              screen === "team" ? (
                ""
              ) : (
                <li
                  className={
                    (screen === "league" &&
                    this.props.seasonalStats.indexOf(
                      parseInt(this.props.match.params.leagueId),
                    ) != -1
                      ? "d-none "
                      : "") +
                    this.props.dispatch(
                      highlightButton("statistics", this.props.selectedButton),
                    )
                  }
                  onClick={() =>
                    this.props.dispatch(
                      navigateTo(
                        "statistics",
                        this.props.match.params,
                        this.props.history,
                      ),
                    )
                  }
                >
                  <NavLink to="#">
                    {this.props.staticKeyWords.statistics}
                  </NavLink>
                </li>
              )}

              {/* {screen === 'league' ? <li className={this.props.dispatch(highlightButton('rules', this.props.selectedButton))} onClick={() => this.props.dispatch(navigateTo('rules', this.props.match.params, this.props.history))}>
                <NavLink to="rules">
                  {this.props.staticKeyWords.rules}
                </NavLink>
              </li> : ""} */}
            </ul>
            <div className="tabsContent">
              <Switch>
                <Route
                  exact
                  path={this.props.match.path + "/standings/:tabname?"}
                  render={(props) => (
                    <TournamentStandings
                      {...props}
                      isTournament={true}
                      type="league"
                    />
                  )}
                />
                <Route
                  exact
                  path={this.props.match.path + "/team/:teamId/standings"}
                  render={(props) => (
                    <TournamentStandings
                      {...props}
                      isTournament={true}
                      type="team"
                    />
                  )}
                />
                <Route
                  exact
                  path={this.props.match.path + "/topscorer"}
                  render={(props) => <TopScorer {...props} />}
                />
                <Route
                  exact
                  path={this.props.match.path + "/team/:teamId/players"}
                  render={(props) => <Players {...props} />}
                />
                <Route
                  exact
                  path={this.props.match.path + "/fixturesresults"}
                  render={(props) => (
                    <FixturesResults {...props} type="league" />
                  )}
                />
                <Route
                  exact
                  path={this.props.match.path + "/team/:teamId/fixturesresults"}
                  render={(props) => <FixturesResults {...props} type="team" />}
                />
                <Route
                  exact
                  path={this.props.match.path + "/rules"}
                  render={(props) => <Rules {...props} />}
                />
                <Route
                  path={this.props.match.path + "/statistics"}
                  render={(props) => (
                    <SeasonalStats
                      {...props}
                      isTournament={true}
                      type="league"
                    />
                  )}
                />
                <Route
                  path={this.props.match.path + "/team/:teamId/statistics"}
                  render={(props) => (
                    <SeasonalStats {...props} isTournament={true} type="team" />
                  )}
                />
                {/*<Route path={this.props.match.path+"/:teamType/:teamId"} render={(props)=><TeamsPageLayout {...props}/>} />*/}
              </Switch>
              <div className="timestamp-data">
                {this.props.corrections?.length ? (
                  <div className="correction">
                    {this.props.staticKeyWords.corrections}:
                    {this.props.corrections.map((team, idx) => {
                      return (
                        <div>
                          <span>
                            *{team.teamName}: {team.teamPoints}{" "}
                            {this.props.staticKeyWords.points}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div></div>
                )}
                <div className="timeStamp">
                  {this.props.lastUpdated != "" &&
                    this.props.lastUpdated != null &&
                    "*" +
                      this.props.staticKeyWords.lastUpdatedOn +
                      " : " +
                      formatDate(this.props.lastUpdated, "banner").date +
                      " " +
                      formatDate(this.props.lastUpdated, "banner").time}
                </div>
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
    bannerData: state.matchcenter.bannerData,
    selectedComp: state.tournament.selectedComp,
    selectedButton: state.tournamentleague.selectedButton,
    // comepetitionAndDate: state.tournamentleague.comepetitionAndDate,
    lastUpdated: state.tournamentleague.comepetitionAndDate.lastUpdated,
    competitionName: state.tournamentleague.comepetitionAndDate.competitionName,
    staticKeyWords: state.app.staticKeyWords,
    seasonalStats:
      state.app.configurations && state.app.configurations.seasonalStats
        ? state.app.configurations.seasonalStats
        : [],
    playerAnalysis:
      state.app.configurations && state.app.configurations.playerAnalysis
        ? state.app.configurations.playerAnalysis
        : [],
    teamPlayer:
      state.app.configurations && state.app.configurations.teamPlayer
        ? state.app.configurations.teamPlayer
        : [],
    topScorer:
      state.app.configurations && state.app.configurations.topScorer
        ? state.app.configurations.topScorer
        : [],
    corrections: state.tournamentleague.comepetitionAndDate.corrections,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TournamentLeague);

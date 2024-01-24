import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  getFiltersData,
  setFilter,
  getStandingsOpt,
  setTableHeaders,
  setLevel2Opt,
  getStandings,
  setSelLevel1Opt,
  setSelLevel2Opt,
  setLayOut,
  resetLevels,
  setGroupName,
} from "./TournamentStandingsSlice";
// import StandingsTable from '../standingstable/StandingsTable';
import TeamsGroupTable from "../teamsgrouptable/teamsGroupTable";
import RoundByRoundLeg from "./roundbyroundleg";
import RegularSeason from "./regularseason";
import KoTree from "./kotree";
import { NavLink } from "react-router-dom";
import Loading from "../loading/Loading";
import { engLangId } from "../../sharedfiles/constants";
class TournamentStandings extends Component {
  componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let params = this.getParams(this.props);
      if (Object.keys(params).length > 0) {
        this.props.dispatch(
          getFiltersData(
            params,
            this.props.match.params.leagueType,
            this.props.languageId,
          ),
        );
        // this.props.dispatch(getStandingsOpt(params, this.props.match.params.leagueType, this.props.languageId));
      }
    }
    if (
      this.props.staticKeyWords &&
      Object.keys(this.props.staticKeyWords).length > 0
    ) {
      this.props.dispatch(setTableHeaders(this.props.staticKeyWords));
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.staticKeyWords !== nextProps.staticKeyWords) {
      this.props.dispatch(setTableHeaders(nextProps.staticKeyWords));
    }
    // if (this.props.match &&
    //     this.props.match.params && JSON.stringify(this.props.match.params) !== JSON.stringify(nextProps.match.params)) {
    //     if ((window.location.pathname.includes('team') &&
    //         this.props.match.params.teamId !== nextProps.match.params.teamId) ||
    //         (window.location.pathname.includes('league') &&
    //             this.props.match.params.leagueId !== nextProps.match.params.leagueId) || (
    //             this.props.match.path !== nextProps.match.path
    //         )) {
    //             let params = this.getParams(nextProps);
    //             if(nextProps.type ==="league"){
    //                this.props.dispatch(getStandingsOpt(params, nextProps.type, nextProps.languageId));
    //             }
    //            else{
    //             this.props.dispatch(getStandings(params,nextProps.type,nextProps.languageId, true));
    //            }
    //                 // this.props.dispatch(getFiltersData(1, this.props.languageId,nextProps.match.params.leagueId));
    //                     // if (this.props.leagueType === "team") {
    //                     //     this.props.dispatch(getStandings(params, this.props.match.params.leagueType, this.props.languageId, true));
    //                     // } else {
    //                     //     this.props.dispatch(getStandingsOpt(params, this.props.match.params.leagueType, this.props.languageId, true));
    //                     // }
    //     }
    // }  code not using so commented.
    // if (nextProps.type && nextProps.type === "team" && this.props.type !== nextProps.type) {
    //    // this.props.dispatch(resetLevels());
    // }
  }
  componentWillUnmount() {
    // this.props.dispatch(setLevel2Opt(''));
    // this.props.dispatch(setLevel1Opt(''));
    // this.props.dispatch(setFilter({ "value": 1 }));
    this.props.dispatch(resetLevels());
  }
  getParams(props) {
    if (props.type === "league") {
      if (
        props.match &&
        props.match.params.leagueId &&
        props.match.params.leagueId > 0
      ) {
        return {
          optionId: props.selectedTab,
          seasonId: props.selectedSeasonFilter,
          isLeague: true,
          compId: Number(props.match.params.leagueId),
          teamId: "",
          roundId: props.level1SelOpt
            ? props.level1SelOpt.id
            : props.level2SelOpt
              ? props.level2SelOpt.id
              : "",
          layoutId: props.level1SelOpt
            ? props.level1SelOpt.layoutId
            : props.level2SelOpt
              ? props.level2SelOpt.layoutId
              : "",
          groupLetter: props.groupName
            ? props.groupName === "all"
              ? "all"
              : props.groupName.charAt(props.groupName.length - 1)
            : "all",
        };
      }
    } else {
      return {
        optionId: props.selectedTab,
        seasonId: props.selectedSeasonFilter,
        isLeague: false,
        compId: Number(props.match.params.leagueId),
        teamId: Number(props.match.params.teamId),
        roundId: props.level1SelOpt
          ? props.level1SelOpt.id
          : props.level2SelOpt
            ? props.level2SelOpt.id
            : "",
        layoutId: props.level1SelOpt
          ? props.level1SelOpt.layoutId
          : props.level2SelOpt
            ? props.level2SelOpt.layoutId
            : "",
        groupLetter: props.groupName
          ? props.groupName === "all"
            ? "all"
            : props.groupName.charAt(props.groupName.length - 1)
          : "all",
      };
    }
    return {};
  }
  componentWillReceiveProps(nextProps) {
    // console.log("next props==", nextProps);
    if (
      this.props.match &&
      this.props.match.params &&
      JSON.stringify(this.props.match.params) !==
        JSON.stringify(nextProps.match.params)
    ) {
      if (
        (window.location.pathname.includes("team") &&
          this.props.match.params.teamId !== nextProps.match.params.teamId) ||
        (window.location.pathname.includes("league") &&
          this.props.match.params.leagueId !==
            nextProps.match.params.leagueId) ||
        this.props.match.path !== nextProps.match.path
      ) {
        // this.props.dispatch(getFiltersData(1, this.props.languageId));
        let params = this.getParams(nextProps);
        this.props.dispatch(
          getStandingsOpt(
            params,
            this.props.match.params.leagueType,
            nextProps.languageId,
          ),
        );
      }
    }
  }

  seasonChanged(event) {
    var index = event.target.selectedIndex;
    var optionElement = event.target.childNodes[index];
    var comptetionId = optionElement.getAttribute("data-id");
    this.props.dispatch(setFilter({ value: event.target.value }));
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.leagueId &&
      this.props.match.params.leagueId > 0
    ) {
      // this.props.dispatch(getFiltersData(1, this.props.languageId));
      let params = this.getParams(this.props);
      params.seasonId = event.target.value;
      params.level1Id = this.props.level1SelOpt
        ? this.props.level1SelOpt.levelId
        : "";
      params.level2Id = this.props.level2SelOpt
        ? this.props.level2SelOpt.levelId
        : "";
      params.compId = comptetionId ? comptetionId : params.compId;
      this.props.dispatch(
        getStandingsOpt(
          params,
          this.props.match.params.leagueType,
          this.props.languageId,
        ),
      );
    }
    // this.props.dispatch(getStandingsData({optionId:this.props.selectedTab,
    //                                       seasonId:event.target.value}));
    //this.props.dispatch(getFiltersData(this.props.selectedTable.tableId))
  }
  // selectTab(tabId) {
  //     this.props.dispatch(setTab(tabId));
  //     if (this.props.match && this.props.match.params && this.props.match.params.leagueId && Number(this.props.match.params.leagueId) > 0) {
  //       //  this.props.dispatch(getFiltersData(1, this.props.languageId));
  //         let params = this.getParams(this.props);
  //         params.optionId = tabId;
  //         this.props.dispatch(getStandingsOpt(params, this.props.match.params.leagueType, this.props.languageId));
  //     }
  // this.props.dispatch(getStandingsData({optionId:tabId,
  //     seasonId:this.props.selectedSeasonFilter}));
  //this.props.dispatch(getFiltersData(this.props.selectedTable.tableId))

  // }
  level1OptClick(opt) {
    var pathValues = this.props.location.pathname.split("/");
    this.props.history.push(
      "/" +
        this.props.match.params.lang +
        "/tournament/" +
        this.props.match.params.leagueType +
        "/" +
        pathValues[4] +
        "/standings/" +
        opt.engName.replace(" ", "_"),
    );

    let params = this.getParams(this.props);
    params.roundId = opt.id;
    params.layoutId = opt.layoutId;
    this.props.dispatch(setSelLevel1Opt(opt));
    this.props.dispatch(setLayOut(opt.layoutName));
    if (opt.subLevels.length > 0) {
      this.props.dispatch(setLevel2Opt(opt.subLevels));
      params.roundId = opt.subLevels[0].id;
      params.layoutId = opt.subLevels[0].layoutId;
      this.props.dispatch(setSelLevel2Opt(opt.subLevels[0]));
      this.props.dispatch(
        getStandings(
          params,
          this.props.match.params.leagueType,
          this.props.languageId,
          false,
        ),
      );
    } else {
      this.props.dispatch(setLevel2Opt(""));
      this.props.dispatch(setSelLevel2Opt(""));
      this.props.dispatch(
        getStandings(
          params,
          this.props.match.params.leagueType,
          this.props.languageId,
          true,
        ),
      );
    }
  }
  level2OptClick(opt) {
    this.props.dispatch(setLayOut(opt.layoutName));
    let params = this.getParams(this.props);
    params.roundId = opt.id;
    params.layoutId = opt.layoutId;
    this.props.dispatch(setSelLevel2Opt(opt));
    this.props.dispatch(
      getStandings(
        params,
        this.props.match.params.leagueType,
        this.props.languageId,
        false,
      ),
    );
  }
  renderSwitch(layout, props) {
    let component = "";
    switch (layout.trim()) {
      case "LEAGUE_TABLE":
        component = (
          <RegularSeason
            standingsData={props.standingsData}
            match={props.match}
            params={this.getParams(props)}
            type={props.type}
            isRowClick={props.isRowClick}
            homeTeamId={props.homeTeamId}
            awayTeamId={props.awayTeamId}
            isTournament={props.isTournament}
            teamId={props.match.params.teamId}
          />
        );
        break;
      case "ROUND_BY_ROUND_LEG_1":
        component = (
          <RoundByRoundLeg
            standingsTableData={
              props.standingsData.hasOwnProperty("info") &&
              this.props.standingsData.info
            }
            leg={1}
            isWRDisplay={
              props.standingsData.hasOwnProperty("info") &&
              props.standingsData.isWRDisplay
            }
            isMatchReplay={
              props.standingsData.hasOwnProperty("info") &&
              props.standingsData.isMatchReplay
            }
            rowNavigation={
              (this.props.languageId === engLangId ? "/en" : "/zh") +
              "/tournament/league/" +
              (this.props.isTournament
                ? this.props.match.params.leagueId
                : this.props.eventInfo.competitionId) +
              "/team/[:id]/fixturesresults"
            }
            {...props}
          />
        );
        break;
      case "GROUP_TABLE":
        component = (
          <TeamsGroupTable
            {...props}
            standingsTableData={
              props.standingsData && props.standingsData.info
                ? props.standingsData.info
                : []
            }
            scheduleTable={
              props.standingsData && props.standingsData.groupFixtures
                ? props.standingsData.groupFixtures
                : []
            }
            screenfrom="standings"
            rowNavigation={
              (this.props.languageId === engLangId ? "/en" : "/zh") +
              "/tournament/league/" +
              (this.props.isTournament
                ? this.props.match.params.leagueId
                : this.props.eventInfo.competitionId) +
              "/team/[:id]/fixturesresults"
            }
          />
        );

        break;
      case "ROUND_BY_ROUND_LEG_2":
        component = (
          <RoundByRoundLeg
            standingsTableData={
              props.standingsData.hasOwnProperty("info") &&
              this.props.standingsData.info
            }
            leg={2}
            {...props}
            rowNavigation={
              (this.props.languageId === engLangId ? "/en" : "/zh") +
              "/tournament/league/" +
              (this.props.isTournament
                ? this.props.match.params.leagueId
                : this.props.eventInfo.competitionId) +
              "/team/[:id]/fixturesresults"
            }
          />
        );
        break;
      case "KO_TREE":
        component = (
          <KoTree
            standingsTableData={
              props.standingsData.hasOwnProperty("info") &&
              this.props.standingsData.info
            }
            staticKeyWords={this.props.staticKeyWords}
          />
        );
        break;
      default:
        component = (
          <RegularSeason
            standingsData={props.standingsData}
            match={props.match}
            params={this.getParams(props)}
            type={props.type}
            isRowClick={props.isRowClick}
            homeTeamId={props.homeTeamId}
            awayTeamId={props.awayTeamId}
            isTournament={props.isTournament}
            teamId={props.match.params.teamId}
          />
        );
        break;
    }
    return component;
  }
  groupChanged(event) {
    let params = this.getParams(this.props);
    params.groupLetter =
      event.target.value === "all"
        ? "all"
        : event.target.value.charAt(event.target.value.length - 1);
    if (params.groupLetter === " ") {
      this.props.dispatch(
        getStandings(
          params,
          this.props.match.params.leagueType,
          this.props.languageId,
        ),
      );
    }
    this.props.dispatch(
      getStandings(
        params,
        this.props.match.params.leagueType,
        this.props.languageId,
      ),
    );
    this.props.dispatch(setGroupName(event.target.value));
  }
  render() {
    var self = this;
    const standingsTableData =
      this.props.standingsData && this.props.standingsData.info
        ? this.props.standingsData.info
        : [];
    return (
      <React.Fragment>
        {/* {((this.props.match.params.leagueType=='league') || (this.props.match.params.leagueType!='league' && this.props.type=='team'))? */}
        {((this.props.level1Opt && this.props.level1Opt.length > 0) ||
          this.props.seasonFilterData.length > 0) && (
          <>
            <div className="tabSection">
              {this.props.level1Opt && this.props.level1Opt.length > 0 && (
                <ul className="tabsList" data-persist="true">
                  {this.props.level1Opt.map((option, index) => {
                    return (
                      <li
                        id="defaultOpen"
                        key={"opt_" + index}
                        className={
                          this.props.level1SelOpt.id === option.id
                            ? "active"
                            : ""
                        }
                        onClick={() => self.level1OptClick(option)}
                      >
                        <NavLink to="#">{option.name}</NavLink>
                      </li>
                    );
                  })}
                </ul>
              )}
              {
                <div className="sectionFilter">
                  <div
                    className={
                      "form-group " +
                      (this.props.screenfrom == "standings" &&
                      Object.keys(standingsTableData).length > 0
                        ? "form-inline-group-staging"
                        : "form-inline-group-staging-league")
                    }
                  >
                    {Object.keys(standingsTableData).length > 0 &&
                      this.props.layOut === "GROUP_TABLE" && (
                        <div className="form-control">
                          <select
                            className="mr-10"
                            value={this.props.groupName}
                            onChange={this.groupChanged.bind(this)}
                          >
                            <option value="all" key={"group_all"}>
                              {this.props.staticKeyWords.groupAll}
                            </option>
                            {this.props?.groupLetter?.map((item, index) => {
                              if (item) {
                                return (
                                  <option value={item.displayKey} key={index}>
                                    {item.displayValue}
                                  </option>
                                );
                              }
                            })}
                          </select>
                        </div>
                      )}
                    {this.props.seasonFilterData.length > 0 && (
                      <>
                        <div
                          className={
                            "" +
                            (this.props.level1Opt &&
                            this.props.level1Opt.length > 0
                              ? "form-inline-group-staging"
                              : "form-inline-group-staging-league")
                          }
                        >
                          <div className="form-control">
                            <select
                              value={this.props.selectedSeasonFilter}
                              onChange={this.seasonChanged.bind(this)}
                            >
                              {this.props.seasonFilterData.map(
                                (item, index) => {
                                  return (
                                    <option
                                      value={item.id}
                                      data-id={item.competitionId}
                                      key={"season_" + index}
                                    >
                                      {item.name}
                                    </option>
                                  );
                                },
                              )}
                            </select>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              }
              {/* {this.props.seasonFilterData.length > 0 && <div className="sectionFilter">
                                <div className={"form-group " + (this.props.level1Opt && this.props.level1Opt.length > 0 ? "form-inline-group-staging" : "form-inline-group-staging-league")}>
                                    <div className="form-control" >
                                        <select value={this.props.selectedSeasonFilter} onChange={this.seasonChanged.bind(this)}>
                                            {
                                                this.props.seasonFilterData.map((item, index) => {
                                                    return <option value={item.id} data-id={item.competitionId} key={"season_" + index}>{item.name}</option>
                                                })
                                            }

                                        </select>
                                    </div>
                                </div>
                            </div>} */}
            </div>
            {/* </div> */}
            {/* <div className="sectionHeading"> */}
            {/* </div> */}
            <div className="space-5"></div>
          </>
        )}
        {this.props.level2Opt && this.props.level2Opt.length > 0 && (
          <>
            {/* <div className="tabSection">
                        <ul className="tabsList" data-persist="true">
                            {this.props.level2Opt.map((option, index) => {
                                return (
                                    <li id="defaultOpen" key={"opt2_" + index} className={this.props.level2SelOpt.id === option.id ? "active" : ""}
                                    onClick={() => self.level2OptClick(option)}>
                                        <NavLink to="#">
                                            {option.name}
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                </div> */}
            <div className="seasonalStats-tablesList">
              <div className="listItems">
                <ul>
                  {this.props.level2Opt &&
                    this.props.level2Opt.map((option, index) => {
                      return (
                        <li
                          className={
                            this.props.level2SelOpt.id === option.id
                              ? "active"
                              : ""
                          }
                          key={index}
                          onClick={() => self.level2OptClick(option)}
                        >
                          <NavLink to={"#"}>{option.name}</NavLink>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div className="space-5"></div>
          </>
        )}

        {!this.props.loader &&
          Object.keys(this.props.standingsData).length > 0 &&
          this.renderSwitch(this.props.layOut, this.props)}
        {/* {this.props.layOut==="LEAGUE_TABLE" ? <RegularSeason standingsData={this.props.standingsData} match={this.props.match} params={this.getParams(this.props)}/> :
                    <RoundByRoundLeg standingsTableData={this.props.standingsData.hasOwnProperty('info') && this.props.standingsData.info}
                        {...this.props} />} */}
        {/* <KOTree/> */}
        <Loading
          isLoader={this.props.loader}
          isNoData={
            !this.props.loader &&
            (Object.keys(this.props.standingsData).length === 0 ||
              !this.props.standingsData.hasOwnProperty("info"))
          }
          temporarilyNoData={this.props.staticKeyWords.temporarilyNoData}
        />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    // optionsList: state.tournamentstandings.optionsList,
    seasonFilterData: state.tournamentstandings.seasonFilterData,
    selectedTab: state.tournamentstandings.selectedTab,
    selectedSeasonFilter: state.tournamentstandings.selectedSeasonFilter,
    standingsData: state.tournamentstandings.standingsData,
    // standingColumns: state.tournamentstandings.standingColumns,
    staticKeyWords: state.app.staticKeyWords,
    languageId: state.app.languageId,
    level1Opt: state.tournamentstandings.level1Opt,
    isRegSeas: state.tournamentstandings.isRegSeas,
    level2Opt: state.tournamentstandings.level2Opt,
    level1SelOpt: state.tournamentstandings.level1SelOpt,
    level2SelOpt: state.tournamentstandings.level2SelOpt,
    layOut: state.tournamentstandings.layOut,
    layoutId: state.tournamentstandings.layoutId,
    roundId: state.tournamentstandings.roundId,
    loader: state.app.loader,
    groupLetter: state.tournamentstandings.groupLetter,
    groupName: state.tournamentstandings.groupName,
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
)(TournamentStandings);

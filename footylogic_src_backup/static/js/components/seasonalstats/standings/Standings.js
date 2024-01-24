import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getTableData } from "../SeasonalStatsSlice";
import { setTab, setFilter, csGraphOptionChanged } from "./StandingsSlice";
import HaFuGraph from "../../hafugraph/HaFuGraph";
import StandingsTable from "../../standingstable/StandingsTable";
import KeyIndicatorsTable from ".././keyindicatorstable/KeyIndicatorsTable";
// import { destroyObjectProperties } from 'highcharts';
import FirstTOScoreGraph from "../../firsttoscoregraph/FirstToScoreGraph";
// import HiLoGraphs from '../../hiloGraphs/HiLoGraphs';
import HiLoGraphsDual from "../../hiloGraphs/HiLoGraphsDual";
// import HomeAwayDrawGraph from '../../homeawaydrawgraph/HomeAwayDrawGraph';
import PerGameGraph from "../../pergamegraph/PerGameGraph";
import { engLangId } from "../../../sharedfiles/constants";
class Standings extends Component {
  componentDidMount() {
    this.props.dispatch(setTab(1));
  }
  componentDidUpdate(prevProps, prevState) {}

  selectTab(tabId) {
    this.props.dispatch(setTab(tabId));
    this.props.dispatch(
      getTableData({
        table: this.props.selectedTable,
        eventId: this.props.eventInfo.eventId,
        competitionId: this.props.isTournament
          ? this.props.match.params.leagueId
          : this.props.eventInfo.competitionId,
        optionId: tabId,
        seasonId: this.props.selectedSeasonFilter,
        hdcTypeId: this.props.selectedHDCFilter,
        hiLoFtId: this.props.selectedHiLoFTFilter,
        hiLoHtId: this.props.selectedHiLoHTFilter,
        languageId: this.props.languageId,
        homeTeamId: this.props.homeTeamId,
        betTypeId: this.props.selectedBetTypeFilter,
        awayTeamId: this.props.awayTeamId,
      }),
    );
    //this.props.dispatch(getFiltersData(this.props.selectedTable.tableId))
  }
  seasonChanged(event) {
    var index = event.target.selectedIndex;
    var optionElement = event.target.childNodes[index];
    var competitionId = optionElement.getAttribute("data-id");
    competitionId = competitionId
      ? competitionId
      : this.props.match.params.leagueId;
    this.props.dispatch(
      setFilter({ filter: "season", value: event.target.value }),
    );
    this.props.dispatch(
      getTableData({
        table: this.props.selectedTable,
        eventId: this.props.eventInfo.eventId,
        competitionId:
          this.props.type === "team"
            ? competitionId
            : this.props.isTournament
              ? this.props.match.params.leagueId
              : this.props.eventInfo.competitionId,
        optionId: this.props.selectedTab,
        seasonId: event.target.value,
        hdcTypeId: this.props.selectedHDCFilter,
        hiLoFtId: this.props.selectedHiLoFTFilter,
        hiLoHtId: this.props.selectedHiLoHTFilter,
        languageId: this.props.languageId,
        homeTeamId: this.props.homeTeamId,
        // betTypeId: this.props.selectedBetTypeFilter,
        awayTeamId: this.props.awayTeamId,
      }),
    );
    //this.props.dispatch(getFiltersData(this.props.selectedTable.tableId))
  }
  hdcTypeChanged(event) {
    this.props.dispatch(
      setFilter({ filter: "hdcType", value: event.target.value }),
    );
    this.props.dispatch(
      getTableData({
        table: this.props.selectedTable,
        eventId: this.props.eventInfo.eventId,
        competitionId: this.props.isTournament
          ? this.props.match.params.leagueId
          : this.props.eventInfo.competitionId,
        optionId: this.props.selectedTab,
        seasonId: this.props.selectedSeasonFilter,
        hdcTypeId: event.target.value,
        hiLoFtId: this.props.selectedHiLoFTFilter,
        hiLoHtId: this.props.selectedHiLoHTFilter,
        languageId: this.props.languageId,
        homeTeamId: this.props.homeTeamId,
        awayTeamId: this.props.awayTeamId,
      }),
    );
    //this.props.dispatch(getFiltersData(this.props.selectedTable.tableId))
  }
  hiloFTChanged(event) {
    this.props.dispatch(
      setFilter({ filter: "hiloFT", value: event.target.value }),
    );
    this.props.dispatch(
      getTableData({
        table: this.props.selectedTable,
        eventId: this.props.eventInfo.eventId,
        competitionId: this.props.isTournament
          ? this.props.match.params.leagueId
          : this.props.eventInfo.competitionId,
        optionId: this.props.selectedTab,
        seasonId: this.props.selectedSeasonFilter,
        hdcTypeId: this.props.selectedHDCFilter,
        hiLoFtId: event.target.value,
        hiLoHtId: this.props.selectedHiLoHTFilter,
        languageId: this.props.languageId,
        homeTeamId: this.props.homeTeamId,
        awayTeamId: this.props.awayTeamId,
      }),
    );
    //this.props.dispatch(getFiltersData(this.props.selectedTable.tableId))
  }
  hiloHTChanged(event) {
    this.props.dispatch(
      setFilter({ filter: "hiloHT", value: event.target.value }),
    );
    this.props.dispatch(
      getTableData({
        table: this.props.selectedTable,
        eventId: this.props.eventInfo.eventId,
        competitionId: this.props.isTournament
          ? this.props.match.params.leagueId
          : this.props.eventInfo.competitionId,
        optionId: this.props.selectedTab,
        seasonId: this.props.selectedSeasonFilter,
        hiLoFtId: this.props.selectedHiLoFTFilter,
        hiLoHtId: event.target.value,
        languageId: this.props.languageId,
        homeTeamId: this.props.homeTeamId,
        awayTeamId: this.props.awayTeamId,
      }),
    );
    //this.props.dispatch(getFiltersData(this.props.selectedTable.tableId))
  }
  betTypeChanged(event) {
    var index = event.target.selectedIndex;
    var optionElement = event.target.childNodes[index];
    var competitionId = optionElement.getAttribute("byteType");
    this.props.dispatch(
      setFilter({ filter: "betType", value: event.target.value }),
    );
    this.props.dispatch(
      getTableData({
        table: this.props.selectedTable,
        eventId: this.props.eventInfo.eventId,
        competitionId: this.props.isTournament
          ? this.props.match.params.leagueId
          : this.props.eventInfo.competitionId,
        optionId: this.props.selectedTab,
        seasonId: this.props.selectedSeasonFilter,
        betTypeId: event.target.value,
        languageId: this.props.languageId,
        homeTeamId: this.props.homeTeamId,
        awayTeamId: this.props.awayTeamId,
      }),
    );
    //this.props.dispatch(getFiltersData(this.props.selectedTable.tableId))
  }
  structureGraphData(mainData, isOutcomeChange = false, key = "") {
    var graphData = [];
    for (var data of mainData) {
      graphData.push({
        outcomeName: isOutcomeChange ? data[key] : data.outcomeName,
        homeGoals: data.homeTeam,
        awayGoals: data.awayTeam,
      });
    }
    return graphData;
  }
  render() {
    var seasonalGraphData = [],
      firstHalfHADGraph = [],
      hafuGraphData = [],
      csHomeGraphData = [],
      csAwayGraphData = [],
      csDrawGraphData = [],
      FHcsGraphData = [];
    var all = [],
      positive = [],
      negative = [];
    var hadAll = [],
      hadPositive = [],
      hadNegative = [];
    //var hadGraphData=[],fhadGraphData=[];
    var teamToScore = [],
      TTSEven = { homeScoredFirst: null, awayScoredFirst: null },
      TTSOdd = { homeScoredFirst: null, awayScoredFirst: null };
    var FTSScored = { homeScoredFirst: null, awayScoredFirst: null },
      FTSConceded = { homeScoredFirst: null, awayScoredFirst: null };
    if (
      this.props.standingsChartData &&
      this.props.standingsChartData.length > 0 &&
      this.props.selectedTable.tableId === 11
    ) {
      //seasonalGraphData = this.structureGraphData(this.props.standingsChartData);
    } else if (this.props.selectedTable.tableId === 1) {
      // if(this.props.standingsHAD && Object.keys(this.props.standingsHAD).length>0){
      //     hadGraphData = [{
      //         outcomeName:this.props.staticKeyWords.win,
      //         homeGoals:this.props.standingsHAD.homeWin,
      //         awayGoals:this.props.standingsHAD.awayWin
      //     },
      //     {
      //         outcomeName:this.props.staticKeyWords.draw,
      //         homeGoals:this.props.standingsHAD.homeDraw,
      //         awayGoals:this.props.standingsHAD.awayDraw
      //     },
      //     {
      //         outcomeName:this.props.staticKeyWords.loss,
      //         homeGoals:this.props.standingsHAD.homeLoss,
      //         awayGoals:this.props.standingsHAD.awayLoss
      //     }]
      // }
      if (
        this.props.standingsFHHAD &&
        Object.keys(this.props.standingsFHHAD).length > 0
      ) {
        // fhadGraphData = [{
        //     outcomeName:this.props.staticKeyWords.win,
        //     homeGoals:this.props.standingsFHHAD.homeWin,
        //     awayGoals:this.props.standingsFHHAD.awayWin
        // },
        // {
        //     outcomeName:this.props.staticKeyWords.draw,
        //     homeGoals:this.props.standingsFHHAD.homeDraw,
        //     awayGoals:this.props.standingsFHHAD.awayDraw
        // },
        // {
        //     outcomeName:this.props.staticKeyWords.loss,
        //     homeGoals:this.props.standingsFHHAD.homeLoss,
        //     awayGoals:this.props.standingsFHHAD.awayLoss
        // }]
      }
    } else if (
      this.props.standingsChartData &&
      this.props.standingsChartData.length > 0 &&
      this.props.selectedTable.tableId === 3 &&
      false
    ) {
      //firstHalfHADGraph = this.structureGraphData(this.props.standingsChartData);
    } else if (
      this.props.standingsChartData &&
      this.props.standingsChartData.length > 0 &&
      this.props.selectedTable.tableId === 5
    ) {
      //hafuGraphData = this.structureGraphData(this.props.standingsChartData);
    } else if (
      this.props.handicapChartData &&
      Object.keys(this.props.handicapChartData).length > 0 &&
      this.props.selectedTable.tableId === 3
    ) {
      // if(this.props.handicapChartData.all && this.props.handicapChartData.all.length>0){
      //     all = this.structureGraphData(this.props.handicapChartData.all);
      // }
      // if(this.props.handicapChartData.positive && this.props.handicapChartData.positive.length>0){
      //     positive = this.structureGraphData(this.props.handicapChartData.positive);
      // }
      // if(this.props.handicapChartData.negative && this.props.handicapChartData.negative.length>0){
      //     negative = this.structureGraphData(this.props.handicapChartData.negative);
      // }
    } else if (
      this.props.handicapHadChartData &&
      Object.keys(this.props.handicapHadChartData).length > 0 &&
      this.props.selectedTable.tableId === 4
    ) {
      // if(this.props.handicapHadChartData.all && this.props.handicapHadChartData.all.length>0){
      //     hadAll = this.structureGraphData(this.props.handicapHadChartData.all);
      // }
      // if(this.props.handicapHadChartData.positive && this.props.handicapHadChartData.positive.length>0){
      //     hadPositive = this.structureGraphData(this.props.handicapHadChartData.positive);
      // }
      // if(this.props.handicapHadChartData.negative && this.props.handicapHadChartData.negative.length>0){
      //     hadNegative = this.structureGraphData(this.props.handicapHadChartData.negative);
      // }
    } else if (
      this.props.firstTeamToScoreGraphData &&
      this.props.firstTeamToScoreGraphData.length > 0 &&
      this.props.selectedTable.tableId === 8
    ) {
      // for(var data of this.props.firstTeamToScoreGraphData){
      //     if(data.outcomeName === "Scored First"){
      //         FTSScored.homeScoredFirst = data.homeTeam;
      //         FTSScored.awayScoredFirst = data.awayTeam;
      //     }else if(data.outcomeName === "Conceded First"){
      //         FTSConceded.homeScoredFirst = data.homeTeam;
      //         FTSConceded.awayScoredFirst = data.awayTeam;
      //     }
      // }
    } else if (
      this.props.correctScoreGraphData &&
      Object.keys(this.props.correctScoreGraphData).length > 0 &&
      this.props.selectedTable.tableId === 9
    ) {
      // if(this.props.correctScoreGraphData.hasOwnProperty('homeTeam') && this.props.correctScoreGraphData.homeTeam.length>0){
      //     csHomeGraphData = this.structureGraphData(this.props.correctScoreGraphData.homeTeam,true,"score");
      // }
      // if(this.props.correctScoreGraphData.hasOwnProperty('awayTeam') && this.props.correctScoreGraphData.awayTeam.length>0){
      //     csAwayGraphData = this.structureGraphData(this.props.correctScoreGraphData.awayTeam,true,"score");
      // }
      // if(this.props.correctScoreGraphData.hasOwnProperty('draw') && this.props.correctScoreGraphData.draw.length>0){
      //     csDrawGraphData = this.structureGraphData(this.props.correctScoreGraphData.draw,true,"score");
      // }
      // //csGraphData = this.structureGraphData(this.props.correctScoreGraphData,true,"score");
    } else if (
      this.props.FHCorretScoreGraphData &&
      this.props.FHCorretScoreGraphData.length > 0 &&
      this.props.selectedTable.tableId === 12
    ) {
      //FHcsGraphData = this.structureGraphData(this.props.FHCorretScoreGraphData,true,"score");
    } else if (
      this.props.teamToScoreOEGraphData &&
      Object.keys(this.props.teamToScoreOEGraphData).length > 0 &&
      this.props.selectedTable.tableId === 7
    ) {
      // if(this.props.teamToScoreOEGraphData.hasOwnProperty("teamToScore") && this.props.teamToScoreOEGraphData.teamToScore.length>0){
      //     teamToScore = this.structureGraphData(this.props.teamToScoreOEGraphData.teamToScore,true,"score");
      // }
      // if(this.props.teamToScoreOEGraphData.hasOwnProperty("oddEven") && this.props.teamToScoreOEGraphData.oddEven.length>0){
      //     for(var data of this.props.teamToScoreOEGraphData.oddEven){
      //         if(data.outcomeName === "Even"){
      //             TTSEven.homeScoredFirst = data.homeTeam;
      //             TTSEven.awayScoredFirst = data.awayTeam;
      //         }else if(data.outcomeName === "Odd"){
      //             TTSOdd.homeScoredFirst = data.homeTeam;
      //             TTSOdd.awayScoredFirst = data.awayTeam;
      //         }
      //     }
      // }
    }
    return (
      <>
        <div className="seasonalStats-container">
          <div className="sectionHeading">
            <div className="sectionTitle">
              {this.props.selectedTable.tableName}
            </div>
            <div className="sectionFilter">
              {this.props.selectedTable.tableId === 3 ? (
                <div className="form-group form-inline">
                  {/*<div class="form-label">HDC Type</div>*/}
                  <div className="form-control">
                    <select onChange={this.hdcTypeChanged.bind(this)}>
                      {this.props.HDCTypeFilterData.map((item, idx) => {
                        return (
                          <option key={"hdcType" + idx} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              ) : (
                ""
              )}
              {this.props.selectedTable.tableId === 1 ||
              this.props.selectedTable.tableId === 6 ||
              this.props.selectedTable.tableId === 9 ? (
                <div className="form-group form-inline">
                  {/*<div class="form-label">HiLo-HT</div>*/}
                  <div className="form-control">
                    <select
                      onChange={this.betTypeChanged.bind(this)}
                      value={this.props.selectedBetTypeFilter}
                    >
                      {this.props.betTypeFilterData &&
                        this.props.betTypeFilterData.map((item, index) => {
                          return (
                            <option
                              byteType={item.competitionId}
                              value={item.id}
                              key={index}
                            >
                              {item.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
              ) : (
                ""
              )}
              {/*
                    {this.props.selectedTable.tableId===7?<div class="form-group form-inline">
                        <div class="form-label">HiLo-FT</div>
                        <div class="form-control">
                            <select onChange={this.hiloFTChanged.bind(this)}>
                                {
                                    this.props.HiLoFTFilterData && this.props.HiLoFTFilterData.map((item)=>{
                                        return <option value={item.id}>{item.name}</option>
                                    })
                                }
                                
                            </select>
                        </div>
                    </div>:""}
                    {this.props.selectedTable.tableId===8?<div class="form-group form-inline">
                        <div class="form-label">HiLo-HT</div>
                        <div class="form-control">
                            <select onChange={this.hiloHTChanged.bind(this)}>
                                {
                                    this.props.HiLoHTFilterData && this.props.HiLoHTFilterData.map((item)=>{
                                        return <option value={item.id}>{item.name}</option>
                                    })
                                }
                                
                            </select>
                        </div>
                    </div>:""}
                    */}
              <div className="form-group form-inline">
                {/*<div class="form-label">Season</div>*/}
                <div className="form-control">
                  <select
                    onChange={this.seasonChanged.bind(this)}
                    value={this.props.selectedSeasonFilter}
                  >
                    {this.props.seasonFilterData.map((item, itemIndex) => {
                      return (
                        <option
                          data-id={item.competitionId}
                          key={itemIndex}
                          value={item.id}
                        >
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="seasonalStats-content">
            {this.props.type == "league" &&
            this.props.selectedTable.tableId == 9 ? (
              <></>
            ) : (
              <div className="btn-group">
                {this.props.optionsList.length > 1 &&
                  this.props.optionsList.map((option, optionIndex) => {
                    return (
                      <button
                        key={optionIndex}
                        className={
                          "buttonAll" +
                          (this.props.selectedTab === option.id
                            ? " active"
                            : "")
                        }
                        onClick={this.selectTab.bind(this, option.id)}
                      >
                        {option.name}
                      </button>
                    );
                  })}
              </div>
            )}
            {/*{(this.props.selectedTable.tableId == 1 || 
                  this.props.selectedTable.tableId == 3 || 
                  this.props.selectedTable.tableId == 4 || 
                  this.props.selectedTable.tableId == 6 || 
                  this.props.selectedTable.tableId == 14 || 
                  this.props.selectedTable.tableId == 10 ||
                  this.props.selectedTable.tableId == 11 ||
                  this.props.selectedTable.tableId == 12)?
                <StandingsTable standingColumns={this.props.selectedTable.tableId===4?this.props.handicapColumns:
                                                 this.props.selectedTable.tableId===6?this.props.hafuColumns:
                                                 this.props.selectedTable.tableId===14?this.props.toatalGoalsColumns:
                                                 this.props.selectedTable.tableId===10?this.props.firstTeamToScoreColumns:
                                                 this.props.selectedTable.tableId===11||this.props.selectedTable.tableId===12?this.props.correctScoreColumns:
                                                 this.props.standingColumns} 
                                                 standingsTableData={this.props.standingsTableData}/>:
                <KeyIndicatorsTable standingColumns={this.props.selectedTable.tableId===5?this.props.handicapHadColumns:
                                                    (this.props.selectedTable.tableId===7 || this.props.selectedTable.tableId===8)?this.props.hiloColumns:
                                                    this.props.selectedTable.tableId===9?this.props.teamsToScoreOddOrEvenColumns:
                                                    this.props.selectedTable.tableId===13?this.props.cornersHiloColumns:''}
                                                standingsTableData={this.props.standingsTableData}/>
                }*/}
            {this.props.selectedTable.tableId == 1 ||
            this.props.selectedTable.tableId == 3 ||
            this.props.selectedTable.tableId == 5 ||
            this.props.selectedTable.tableId == 11 ||
            this.props.selectedTable.tableId == 8 ||
            (this.props.selectedTable.tableId == 9 &&
              !this.props.isTournament) ? (
              <StandingsTable
                {...this.props}
                standingColumns={
                  this.props.selectedTable.tableId === 3
                    ? this.props.handicapColumns
                    : this.props.selectedTable.tableId === 5
                      ? this.props.hafuColumns
                      : this.props.selectedTable.tableId === 11
                        ? this.props.toatalGoalsColumns
                        : this.props.selectedTable.tableId === 8
                          ? this.props.firstTeamToScoreColumns
                          : this.props.selectedTable.tableId === 9
                            ? this.props.correctScoreColumns
                            : this.props.standingColumns
                }
                standingsTableData={this.props.standingsTableData}
                isTournament={this.props.isTournament}
                seasonalStats={this.props.staticKeyWords.seasonalStats}
                type={this.props.type}
                teamId={this.props.teamId}
                isViewAll={true}
                isRowClick={true}
                paramKey="teamId"
                rowNavigation={
                  (this.props.languageId === engLangId ? "/en" : "/zh") +
                  "/tournament/league/" +
                  (this.props.isTournament
                    ? this.props.match.params.leagueId
                    : this.props.eventInfo.competitionId) +
                  "/team/[:id]/fixturesresults"
                }
              />
            ) : (
              <KeyIndicatorsTable
                standingColumns={
                  this.props.selectedTable.tableId === 4
                    ? this.props.handicapHadColumns
                    : this.props.selectedTable.tableId === 6
                      ? this.props.hiloColumns
                      : this.props.selectedTable.tableId === 7
                        ? this.props.teamsToScoreOddOrEvenColumns
                        : this.props.selectedTable.tableId === 10
                          ? this.props.cornersHiloColumns
                          : this.props.selectedTable.tableId === 9 &&
                              this.props.isTournament
                            ? this.props.tourCorrectScoreColumns
                            : ""
                }
                standingsTableData={this.props?.standingsTableData}
                isTournament={this.props.isTournament}
                type={this.props.type}
                teamId={this.props.teamId}
                isViewAll={true}
                paramKey="teamId"
                isRowClick={
                  this.props.selectedTable.tableId !== 9 ? true : false
                }
                paramKey="teamId"
                history={this.props.history}
                rowNavigation={
                  (this.props.languageId === engLangId ? "/en" : "/zh") +
                  "/tournament/league/" +
                  (this.props.isTournament
                    ? this.props.match.params.leagueId
                    : this.props.eventInfo.competitionId) +
                  "/team/[:id]/fixturesresults"
                }
              />
            )}
            <span className="seasonalstate-clr-white">
              {this.props.selectedTable.tableId == 1 ||
              this.props.selectedTable.tableId == 6
                ? this.props.selectedBetTypeFilter == 1
                  ? this.props?.rankingBasiswlhalf
                  : this.props?.rankingBasisWL
                : this.props?.rankingBasis}
            </span>
            <span className="seasonalstate-clr-white">
              {this.props.selectedTable.tableId == 9
                ? this.props.correctScoreallTournament
                : ""}
            </span>
          </div>
        </div>
        {!this.props.isEdisplay &&
          !this.props.isTournament &&
          !this.props.loader && (
            <div className="graphSection">
              <div className="sectionHeading">
                <div className="sectionTitle">
                  {this.props.selectedTable.tableId === 1
                    ? this.props.staticKeyWords.hadComparison
                    : this.props.selectedTable.tableId === 3
                      ? this.props.staticKeyWords.hdcTypeComparison
                      : this.props.selectedTable.tableId === 4
                        ? this.props.staticKeyWords.handicapHADComparison
                        : this.props.selectedTable.tableId === 5
                          ? this.props.staticKeyWords.hafuComparison
                          : this.props.selectedTable.tableId === 6
                            ? this.props.staticKeyWords.hiLo
                            : this.props.selectedTable.tableId === 7
                              ? this.props.staticKeyWords.ttsOEComparison
                              : this.props.selectedTable.tableId === 8
                                ? this.props.staticKeyWords.ffsComparison
                                : this.props.selectedTable.tableId === 9
                                  ? this.props.staticKeyWords
                                      .correctScoreComparision
                                  : this.props.selectedTable.tableId === 10
                                    ? this.props.staticKeyWords
                                        .cornersComparision
                                    : this.props.selectedTable.tableId === 11
                                      ? this.props.staticKeyWords
                                          .totalGoalsComparison
                                      : this.props.staticKeyWords
                                          .seasonRankingTrend}
                </div>
                {this.props.selectedTable.tableId === 9 && false ? (
                  <div className="form-group form-inline">
                    <div className="form-control">
                      <select
                        onChange={(event) =>
                          this.props.dispatch(
                            csGraphOptionChanged(event.target.value),
                          )
                        }
                        value={this.props.selectedCSGOptionId}
                      >
                        <option value={1}>Home wins</option>
                        <option value={2}>Draws</option>
                        <option value={3}>Away wins</option>
                      </select>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="graphContainer">
                <div className="graphContent TwoInRow">
                  {/*<div><img src="images/GRAPH.png" alt="img"/></div>*/}

                  {this.props.selectedTable.tableId === 1 ? (
                    this.props.selectedBetTypeFilter == 2 ? (
                      <>
                        <HaFuGraph
                          data={this.props.standingsFHHAD}
                          maxValue={this.props.hadMaxValue}
                          loadin="had"
                          isDirect={true}
                          title={this.props.staticKeyWords.fullTime}
                          graphHeight="300px"
                          graphWidth="85%"
                        />
                        {/*<HomeAwayDrawGraph homeTeamName={this.props.homeTeamName} 
                            awayTeamName={this.props.awayTeamName} 
                            had={this.props.standingsHAD} 
                            loadin='had'
                        title={this.props.staticKeyWords.fullTime}/>*/}
                        <div className="goalsPer-game-margin">
                          {this.props.standingsFHGPG &&
                          Object.keys(this.props.standingsFHGPG).length > 0 ? (
                            <PerGameGraph
                              homeTeamName={this.props.homeTeamName}
                              awayTeamName={this.props.awayTeamName}
                              home={this.props.standingsFHGPG.homeTeam}
                              away={this.props.standingsFHGPG.awayTeam}
                              title={
                                this.props.languageId === engLangId
                                  ? `${this.props.staticKeyWords.goals} <br/><span>${this.props.staticKeyWords.per}</span> ${this.props.staticKeyWords.game}`
                                  : `${this.props.staticKeyWords.goalsPerGame}`
                              }
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      </>
                    ) : this.props.selectedBetTypeFilter == 1 ? (
                      <>
                        <HaFuGraph
                          data={this.props.standingsFHHAD}
                          maxValue={this.props.fhHadMaxValue}
                          loadin="fhad"
                          isDirect={true}
                          title={this.props.staticKeyWords.halfTime}
                          graphHeight="300px"
                          graphWidth="650px"
                        />
                        {/* <HomeAwayDrawGraph homeTeamName={this.props.homeTeamName} 
                            awayTeamName={this.props.awayTeamName} 
                            had={this.props.standingsFHHAD} 
                            loadin='had'
                    title={this.props.staticKeyWords.halfTime}/>*/}
                        {this.props.standingsFHGPG &&
                        Object.keys(this.props.standingsFHGPG).length > 0 ? (
                          <PerGameGraph
                            homeTeamName={this.props.homeTeamName}
                            awayTeamName={this.props.awayTeamName}
                            home={this.props.standingsFHGPG.homeTeam}
                            away={this.props.standingsFHGPG.awayTeam}
                            // title={`${this.props.staticKeyWords.firstHalf} <br/><span>${this.props.staticKeyWords.gpg}</span>`}
                            title={this.props.staticKeyWords.firstHalfGpg}
                          />
                        ) : (
                          ""
                        )}
                      </>
                    ) : (
                      ""
                    )
                  ) : this.props.selectedTable.tableId === 3 ? (
                    <>
                      {/* {
                           Object.keys(this.props.handicapChartData).length>0?<div className="singleCentered-graph"><HaFuGraph  isDirect={true} data={this.props.handicapChartData} noradious={false} loadin="all" graphWidth="800px" graphHeight="350px"/></div>:<></> 
                        } */}
                      <div className="ThreeInRow">
                        {Object.keys(this.props.handicapChartData.all).length >
                        0 ? (
                          <div className="handiCap-leftcolumn">
                            <HaFuGraph
                              title={this.props.staticKeyWords.all}
                              data={this.props.handicapChartData.all}
                              isDirect={true}
                              noradious={false}
                              loadin="all"
                              graphWidth="100%"
                              graphHeight="350px"
                            />
                          </div>
                        ) : (
                          <></>
                        )}

                        {Object.keys(this.props.handicapChartData.positive)
                          .length > 0 ? (
                          <div
                            className={
                              !this.props.isHandicapChartsMul
                                ? "singleCentered-graph"
                                : "handiCap-midcolumn"
                            }
                          >
                            <HaFuGraph
                              title={this.props.staticKeyWords.plus}
                              data={this.props.handicapChartData.positive}
                              isDirect={true}
                              noradious={false}
                              loadin="hadPositive"
                              graphWidth={
                                !this.props.isHandicapChartsMul
                                  ? "800px"
                                  : "100%"
                              }
                              graphHeight="350px"
                            />
                          </div>
                        ) : (
                          <></>
                        )}
                        {Object.keys(this.props.handicapChartData.negative)
                          .length > 0 ? (
                          <div
                            className={
                              !this.props.isHandicapChartsMul
                                ? "singleCentered-graph"
                                : "handiCap-rightcolumn"
                            }
                          >
                            <HaFuGraph
                              title={this.props.staticKeyWords.minus}
                              data={this.props.handicapChartData.negative}
                              isDirect={true}
                              noradious={false}
                              loadin="hadNegative"
                              graphWidth={
                                this.props.isHandicapChartsMul
                                  ? "100%"
                                  : "800px"
                              }
                              graphHeight="350px"
                            />
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                      {Object.keys(this.props.handicapChartData.zero).length >
                      0 ? (
                        <div
                          className={
                            !this.props.isHandicapChartsMul
                              ? "singleCentered-graph"
                              : ""
                          }
                        >
                          <HaFuGraph
                            title={this.props.staticKeyWords.zero}
                            data={this.props.handicapChartData.zero}
                            isDirect={true}
                            noradious={false}
                            loadin="hadZero"
                            graphWidth={
                              this.props.isHandicapChartsMul ? "400px" : "800px"
                            }
                            graphHeight="350px"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                    </>
                  ) : this.props.selectedTable.tableId === 5 ? (
                    <div className="singleCentered-graph">
                      <HaFuGraph
                        data={this.props.hafuGraphData}
                        isDirect={true}
                        noradious={false}
                        loadin="hafu"
                        iscolumn={true}
                        graphWidth="85%"
                        graphHeight="300px"
                      />
                    </div>
                  ) : this.props.selectedTable.tableId === 4 ? (
                    <div className="ThreeInRow">
                      {Object.keys(this.props.handicapHadChartData.all).length >
                      0 ? (
                        <div className="handiCap-leftcolumn">
                          <HaFuGraph
                            title={this.props.staticKeyWords.all}
                            data={this.props.handicapHadChartData.all}
                            isDirect={true}
                            noradious={false}
                            loadin="all"
                            graphWidth="100%"
                            graphHeight="350px"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                      {Object.keys(this.props.handicapHadChartData.positive)
                        .length > 0 ? (
                        <div className="handiCap-midcolumn">
                          <HaFuGraph
                            title={this.props.staticKeyWords.plus}
                            data={this.props.handicapHadChartData.positive}
                            isDirect={true}
                            noradious={false}
                            loadin="hadPositive"
                            graphWidth="100%"
                            graphHeight="350px"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                      {Object.keys(this.props.handicapHadChartData.negative)
                        .length > 0 ? (
                        <div className="handiCap-rightcolumn">
                          <HaFuGraph
                            title={this.props.staticKeyWords.minus}
                            data={this.props.handicapHadChartData.negative}
                            isDirect={true}
                            noradious={false}
                            loadin="hadNegative"
                            graphWidth="100%"
                            graphHeight="350px"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : this.props.selectedTable.tableId === 6 ? (
                    this.props.selectedBetTypeFilter == 2 &&
                    this.props.hiLoChartData ? (
                      <HiLoGraphsDual
                        data={this.props.hiLoChartData}
                        homeTeamName={this.props.homeTeamName}
                        awayTeamName={this.props.awayTeamName}
                        title=""
                      />
                    ) : this.props.selectedBetTypeFilter == 1 &&
                      this.props.hiLoChartData ? (
                      <HiLoGraphsDual
                        data={this.props.hiLoChartData}
                        homeTeamName={this.props.homeTeamName}
                        awayTeamName={this.props.awayTeamName}
                        title=""
                      />
                    ) : (
                      ""
                    )
                  ) : this.props.selectedTable.tableId === 8 && false ? (
                    <HiLoGraphsDual
                      data={this.props.fhHiLoChartData}
                      homeTeamName={this.props.homeTeamName}
                      awayTeamName={this.props.awayTeamName}
                      title=""
                    />
                  ) : this.props.selectedTable.tableId === 7 ? (
                    <div className="singleCentered-graph">
                      {/*<div>
                        <HaFuGraph 
                            data={teamToScore} 
                            title={this.props.staticKeyWords.tts}
                            noradious={false} 
                            loadin="teamtoscore" 
                            graphWidth="300px" 
                            graphHeight="200px"/>
                    </div>*/}
                      <HaFuGraph
                        data={this.props.teamToScoreOEGraphData}
                        maxValue={8}
                        loadin="had"
                        isDirect={true}
                        title={this.props.staticKeyWords.oddOREven}
                        graphHeight="200px"
                        graphWidth="85%"
                      />
                    </div>
                  ) : this.props.selectedTable.tableId === 8 ? (
                    <>
                      <div className="leftColumn">
                        <FirstTOScoreGraph
                          homeTeamName={this.props.homeTeamName}
                          awayTeamName={this.props.awayTeamName}
                          mainData={
                            this.props.firstTeamToScoreGraphData.FTSScored
                          }
                          data={this.props.firstTeamToScoreGraphData.FTSScored}
                          isDirect={true}
                          colors={["#29d6d4", "#e57374"]}
                          title={this.props.staticKeyWords.scoredFirst}
                          loadin="scored"
                          graphHeight="150px"
                          graphWidth="85%"
                        />
                      </div>
                      <div className="rightColumn">
                        <FirstTOScoreGraph
                          homeTeamName={this.props.homeTeamName}
                          awayTeamName={this.props.awayTeamName}
                          mainData={
                            this.props.firstTeamToScoreGraphData.FTSConceded
                          }
                          data={
                            this.props.firstTeamToScoreGraphData.FTSConceded
                          }
                          isDirect={true}
                          colors={["#29d6d4", "#e57374"]}
                          title={this.props.staticKeyWords.concededFirst}
                          loadin="conceded"
                          graphHeight="150px"
                          graphWidth="85%"
                        />
                      </div>
                    </>
                  ) : this.props.selectedTable.tableId === 9 ? (
                    <div className="singleCentered-graph">
                      <HaFuGraph
                        data={this.props.correctScoreGraphData}
                        noradious={false}
                        loadin="csh"
                        iscolumn={true}
                        isDirect={true}
                        isLegend={false}
                        graphWidth="85%"
                        homeLegend={this.props.homeTeamName}
                        awayLegend={this.props.awayTeamName}
                      />
                      {/* this.props.selectedBetTypeFilter==2?
                            this.props.selectedCSGOptionId ===1?
                                <HaFuGraph data={this.props.correctScoreGraphData.csHomeGraphData} 
                                           noradious={false} 
                                           loadin="csh" 
                                           iscolumn={true} 
                                           isDirect={true}
                                           isLegend={false} 
                                           graphWidth="800px"
                                           homeLegend={this.props.homeTeamName+" "+this.props.staticKeyWords.wins}
                                           awayLegend={this.props.awayTeamName+" "+this.props.staticKeyWords.losses}/>:
                            this.props.selectedCSGOptionId ===2?
                                <HaFuGraph data={this.props.correctScoreGraphData.csDrawGraphData} 
                                           noradious={false} 
                                           loadin="csd" 
                                           iscolumn={true} 
                                           isDirect={true}
                                           isLegend={false}
                                           graphWidth="800px"
                                           homeLegend={this.props.homeTeamName+" "+this.props.staticKeyWords.draws}
                                           awayLegend={this.props.awayTeamName+" "+this.props.staticKeyWords.draws}/>:
                            this.props.selectedCSGOptionId ===3?
                                <HaFuGraph data={this.props.correctScoreGraphData.csAwayGraphData} 
                                           noradious={false} 
                                           loadin="csa" 
                                           iscolumn={true} 
                                           isLegend={false}
                                           isDirect={true}
                                           graphWidth="800px"
                                           homeLegend={this.props.homeTeamName+" "+this.props.staticKeyWords.losses}
                                           awayLegend={this.props.awayTeamName+" "+this.props.staticKeyWords.wins}/>:""
                        :""*/}
                      {/* this.props.selectedBetTypeFilter==1?
                            this.props.selectedCSGOptionId ===1?
                                <HaFuGraph data={this.props.correctScoreGraphData.csHomeGraphData} 
                                           noradious={false} 
                                           loadin="fhcsh" 
                                           iscolumn={true} 
                                           isLegend={true} 
                                           isDirect={true}
                                           graphWidth="800px"
                                           homeLegend={this.props.homeTeamName+" "+this.props.staticKeyWords.wins}
                                           awayLegend={this.props.awayTeamName+" "+this.props.staticKeyWords.losses}/>:
                            this.props.selectedCSGOptionId ===2?
                                <HaFuGraph data={this.props.correctScoreGraphData.csDrawGraphData} 
                                           noradious={false} 
                                           loadin="fhcsd" 
                                           iscolumn={true} 
                                           isLegend={true}
                                           isDirect={true}
                                           graphWidth="800px"
                                           homeLegend={this.props.homeTeamName+" "+this.props.staticKeyWords.draws}
                                           awayLegend={this.props.awayTeamName+" "+this.props.staticKeyWords.draws}/>:
                            this.props.selectedCSGOptionId ===3?
                                <HaFuGraph data={this.props.correctScoreGraphData.csAwayGraphData} 
                                           noradious={false} 
                                           loadin="fhcsa" 
                                           iscolumn={true} 
                                           isLegend={true}
                                           isDirect={true}
                                           graphWidth="800px"
                                           homeLegend={this.props.homeTeamName+" "+this.props.staticKeyWords.losses}
                                           awayLegend={this.props.awayTeamName+" "+this.props.staticKeyWords.wins}/>:""
                        :""*/}
                    </div>
                  ) : this.props.selectedTable.tableId === 12 ? (
                    <div>
                      <HaFuGraph
                        data={FHcsGraphData}
                        noradious={false}
                        loadin="cs"
                        iscolumn={true}
                      />
                    </div>
                  ) : this.props.selectedTable.tableId === 10 ? (
                    <HiLoGraphsDual
                      data={this.props.cornersHiLoChartData}
                      homeTeamName={this.props.homeTeamName}
                      awayTeamName={this.props.awayTeamName}
                      title=""
                    />
                  ) : this.props.selectedTable.tableId === 11 ? (
                    <div className="singleCentered-graph">
                      <HaFuGraph
                        data={this.props.standingsChartData}
                        isDirect={true}
                        iscolumn={true}
                        noradious={false}
                        loadin="hafucomp11"
                        graphHeight="300px"
                        graphWidth="85%"
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          )}
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    standingsTableData: state.seasonalstats.standingsTableData,
    standingsChartData: state.seasonalstats.standingsChartData,
    standingColumns: state.seasonalstats.standingColumns,
    handicapColumns: state.seasonalstats.handicapColumns,
    handicapHadColumns: state.seasonalstats.handicapHadColumns,
    teamsToScoreOddOrEvenColumns:
      state.seasonalstats.teamsToScoreOddOrEvenColumns,
    cornersHiloColumns: state.seasonalstats.cornersHiloColumns,
    hiloColumns: state.seasonalstats.hiloColumns,
    toatalGoalsColumns: state.seasonalstats.toatalGoalsColumns,
    selectedTable: state.seasonalstats.selectedTable,
    eventInfo: state.app.eventInfo,
    selectedTab: state.standings.selectedTab,
    seasonFilterData: state.seasonalstats.seasonFilterData,
    selectedSeasonFilter: state.standings.selectedSeasonFilter,
    selectedHDCFilter: state.standings.selectedHDCFilter,
    selectedBetTypeFilter: state.standings.selectedBetTypeFilter,
    homeTeamId: state.match.bannerData.homeTeamId,
    awayTeamId: state.match.bannerData.awayTeamId,
    HDCTypeFilterData: state.seasonalstats.HDCTypeFilterData,
    handicapChartData: state.seasonalstats.handicapChartData,
    hafuColumns: state.seasonalstats.hafuColumns,
    HiLoFTFilterData: state.seasonalstats.HiLoFTFilterData,
    HiLoHTFilterData: state.seasonalstats.HiLoHTFilterData,
    betTypeFilterData: state.seasonalstats.betTypeFilterData,
    selectedHiLoFTFilter: state.standings.selectedHiLoFTFilter,
    selectedHiLoHTFilter: state.standings.selectedHiLoHTFilter,
    handicapHadChartData: state.seasonalstats.handicapHadChartData,
    optionsList: state.seasonalstats.optionsList,
    firstTeamToScoreColumns: state.seasonalstats.firstTeamToScoreColumns,
    firstTeamToScoreGraphData: state.seasonalstats.firstTeamToScoreGraphData,
    correctScoreColumns: state.seasonalstats.correctScoreColumns,
    homeTeamName: state.match.homeTeamName,
    awayTeamName: state.match.awayTeamName,
    correctScoreGraphData: state.seasonalstats.correctScoreGraphData,
    FHCorretScoreGraphData: state.seasonalstats.FHCorretScoreGraphData,
    teamToScoreOEGraphData: state.seasonalstats.teamToScoreOEGraphData,
    hiLoChartData: state.seasonalstats.hiLoChartData,
    fhHiLoChartData: state.seasonalstats.fhHiLoChartData,
    cornersHiLoChartData: state.seasonalstats.cornersHiLoChartData,
    staticKeyWords: state.app.staticKeyWords,
    languageId: state.app.languageId,
    standingsHAD: state.seasonalstats.standingsHAD,
    standingsGPG: state.seasonalstats.standingsGPG,
    standingsFHHAD: state.seasonalstats.standingsFHHAD,
    standingsFHGPG: state.seasonalstats.standingsFHGPG,
    selectedCSGOptionId: state.standings.selectedCSGOptionId,
    loader: state.app.loader,
    hafuGraphData: state.seasonalstats.hafuGraphData,
    fhHadMaxValue: state.seasonalstats.fhHadMaxValue,
    hadMaxValue: state.seasonalstats.hadMaxValue,
    isHandicapChartsMul: state.seasonalstats.isHandicapChartsMul,
    tourCorrectScoreColumns: state.seasonalstats.tourCorrectScoreColumns,
    isEdisplay: state.app.isEdisplay,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({ getTableData }, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Standings);

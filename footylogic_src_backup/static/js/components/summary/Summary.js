import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// import SummaryLastResults from '../summarylastresults/SummaryLastResults';
import GoalTimesGraph from "../goaltimesgraph/GoalTimesGraph";
import {
  getMarketsInfo,
  getLast8Results,
  setTableHeaders,
} from "./SummarySlice";
// import DynamicHADGraph from '../dynamichadgraph/DynamicHADGraph';
import SummaryMarketInfo from "../summarymarketinfo/SummaryMarketInfo";
// import GoalScoreTimeGraph from '../goalscoringtimegraph/GoalScoreTimeGraph';
import SummaryLastResultsTable from "../summarylastresultstable/SummaryLastResultsTable";
import { toggleMode } from "../../layouts/matchSlice";
// import {engLangId} from '../../sharedfiles/constants';
import HToHTab from "../htohtab/HToHTab";
import { getWinBest } from "../matchcenter/MatchCenterSlice";
import { metaData, setDisableLeagues } from "../../AppSlice";
import { summary } from "../../sharedfiles/EndpointConfig";

class Summary extends Component {
  componentWillMount() {
    this.props.dispatch(toggleMode(false));
    if (
      this.props.eventInfo &&
      this.props.eventInfo.eventId &&
      ("" + this.props.eventInfo.eventId).length > 0
    ) {
      //this.props.dispatch(getLastResults(this.props.eventInfo.eventId,this.props.languageId));
    }
    if (
      this.props.homeTeamId &&
      this.props.homeTeamId > 0 &&
      this.props.awayTeamId &&
      this.props.awayTeamId > 0 &&
      this.props.eventInfo &&
      this.props.eventInfo.eventId &&
      ("" + this.props.eventInfo.eventId).length > 0
    ) {
      this.props.dispatch(
        getMarketsInfo(
          this.props.eventInfo.eventId,
          this.props.languageId,
          this.props.homeTeamId,
          this.props.awayTeamId,
          this.props.eventInfo.competitionId,
        ),
      );
    }
    if (
      this.props.homeTeamId &&
      this.props.homeTeamId > 0 &&
      this.props.awayTeamId &&
      this.props.awayTeamId > 0
    ) {
      this.props.dispatch(
        getLast8Results(
          this.props.homeTeamId,
          this.props.awayTeamId,
          this.props.languageId,
          this.props.eventInfo.competitionId,
        ),
      );
    }
    if (
      this.props.eventInfo.eventId &&
      "" + this.props.eventInfo.eventId.length > 0
    ) {
      this.props.dispatch(
        getWinBest(this.props.eventInfo.eventId, this.props.languageId),
      );
    }
    if (
      this.props.staticKeyWords &&
      Object.keys(this.props.staticKeyWords).length > 0
    ) {
      this.props.dispatch(setTableHeaders(this.props.staticKeyWords));
    }
    this.props.dispatch(metaData("default"));
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.homeTeamId &&
      nextProps.homeTeamId > 0 &&
      nextProps.awayTeamId &&
      nextProps.awayTeamId > 0
    ) {
      if (
        this.props.homeTeamId !== nextProps.homeTeamId ||
        this.props.awayTeamId !== nextProps.awayTeamId
      ) {
        this.props.dispatch(
          getLast8Results(
            nextProps.homeTeamId,
            nextProps.awayTeamId,
            this.props.languageId,
            nextProps.eventInfo.competitionId,
          ),
        );
      }
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
          nextProps.languageId,
          nextProps.homeTeamId,
          nextProps.awayTeamId,
          nextProps.eventInfo.competitionId,
        ),
      );
    }
    if (
      this.props.eventInfo.eventId !== nextProps.eventInfo.eventId &&
      nextProps.eventInfo.eventId > 0
    ) {
      this.props.dispatch(
        getWinBest(nextProps.eventInfo.eventId, nextProps.languageId),
      );
    }
    if (
      nextProps.staticKeyWords &&
      Object.keys(nextProps.staticKeyWords).length > 0 &&
      JSON.stringify(this.props.staticKeyWords) !==
        JSON.stringify(nextProps.staticKeyWords)
    ) {
      this.props.dispatch(setTableHeaders(nextProps.staticKeyWords));
    }
  }
  componentDidMount() {
    this.props.dispatch(setDisableLeagues({ disable: true, tab: "SUMMARY" }));
  }
  componentWillUnmount() {
    this.props.dispatch(setDisableLeagues({ disable: false, tab: "SUMMARY" }));
  }
  render() {
    // var goalScoringData = this.props.goalScoringTimesData;
    // var goalScoringHomeData = [];
    // var goalScoringHomeCat = [];
    // var goalScoringAwayData = [];
    // var goalScoringAwayCat = [];
    // if( goalScoringData.homeTeam && goalScoringData.homeTeam.length>0){
    //     for(var item of  goalScoringData.homeTeam){
    //         goalScoringHomeData.push(item.teamGoals);
    //         goalScoringHomeCat.push(item.goalMinutes);
    //     }
    // }
    // if( goalScoringData.awayTeam && goalScoringData.awayTeam.length>0){
    //     for(var item of  goalScoringData.awayTeam){
    //         goalScoringAwayData.push(item.teamGoals);
    //         goalScoringAwayCat.push(item.goalMinutes);
    //     }
    // }
    return (
      <div className="pageContent headTo-headHKJC">
        <div className="tableTwo-column tableTwo-column">
          {this.props.last8Results && this.props.last8Results.homeTeam ? (
            <SummaryLastResultsTable
              isHome={true}
              title={this.props.homeTeamName}
              subTitle={this.props.staticKeyWords.last8HomeResultsLFL}
              data={this.props.last8Results.homeTeam}
            />
          ) : (
            ""
          )}
          {this.props.last8Results && this.props.last8Results.awayTeam ? (
            <SummaryLastResultsTable
              isHome={false}
              title={this.props.awayTeamName}
              subTitle={this.props.staticKeyWords.last8AwayResultsLFL}
              data={this.props.last8Results.awayTeam}
            />
          ) : (
            ""
          )}
        </div>

        <div className="graphSection">
          {/*<div class="sectionHeading">
                            <div class="sectionMain-title">
                                <div class="sectionTitle">
                                    {this.props.languageId === engLangId?<div class="tableHeading">{this.props.staticKeyWords.headToHead} 
                                    <span><small> (8 {this.props.staticKeyWords.recentEncounters})</small></span>
                                    </div>:<div class="tableHeading">{this.props.staticKeyWords.headToHead8RE}</div>}

                                </div>
                                <div class="form-group">
                                    <div class="form-control">
                                        <select>
                                            <option value="value">{this.props.staticKeyWords.matchResult}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>*/}
          <div>
            {/*<div class="tabTable-content">
                                <div class="tableTwo-column p-0 mt-20">
                                    <div class="tableHome">
                                        <div class="tableFull-width">
                                           <SummaryLastResults/>
                                           
                                        </div>

                                    </div>
                                    <div class="tableAway">
                                        <div class="tableFull-width">
                                            <div class="internalGraph">
                                                <div class="dualGrah">
                                                    {this.props.homeTeamName.length>0 &&
                                                    this.props.awayTeamName.length>0 &&
                                                    Object.keys(this.props.hadGraphData).length>0?
                                                    <DynamicHADGraph 
                                                    categories={[this.props.homeTeamName,this.props.staticKeyWords.draw,this.props.awayTeamName]}
                                                    had={this.props.hadGraphData && Object.keys(this.props.hadGraphData).length>0?{
                                                        first:this.props.hadGraphData.homeTeam,
                                                        middle:this.props.hadGraphData.draw,
                                                        last:this.props.hadGraphData.awayTeam
                                                        }:{}}
                                                    type="bar" 
                                                    loadin='had'
                                                    colors={[
                                                        '#29d6d4',
                                                        '#666666',
                                                        '#e57374',
                                                        ]}
                                                    width="390px"
                                                    title={this.props.staticKeyWords.home+"/"+this.props.staticKeyWords.away+"/"+this.props.staticKeyWords.draw}/>:""}
                                                    
                                                    
                                                </div>
                                                <div class="dualGrah">
                                                    
                                                    {this.props.homeTeamName.length>0 &&
                                                    this.props.awayTeamName.length>0 &&
                                                    Object.keys(this.props.hadGraphData).length>0?
                                                    <DynamicHADGraph 
                                                    categories={[this.props.homeTeamName,this.props.awayTeamName,this.props.staticKeyWords.total]}
                                                    had={this.props.goalsPerGame && Object.keys(this.props.goalsPerGame).length>0?{
                                                        first:this.props.goalsPerGame.homeTeam,
                                                        last:this.props.goalsPerGame.total,
                                                        middle:this.props.goalsPerGame.awayTeam
                                                        }:{}}
                                                    type="bar" 
                                                    loadin='gpg'
                                                    colors={[
                                                        '#29d6d4',
                                                        '#e57374',
                                                        '#666666',
                                                        ]}
                                                    width="275px"
                                                    title={this.props.staticKeyWords.goalsPerGame}/>:""}
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                                    </div>*/}
            <Route
              render={(props) => (
                <HToHTab
                  {...props}
                  isBasic={true}
                  hidetabs={true}
                  hideOptions={true}
                  pagename={"summary"}
                />
              )}
            />
          </div>
        </div>
        {/*<SummaryMarketInfo 
                        heading={`${this.props.staticKeyWords.firstHalf} <span>${this.props.staticKeyWords.hiLo}</span>`}
                        graphData = {this.props.fhHiLoGraphData}
                    tableData = {this.props.fhHiLoTablesData}/>*/}

        {this.props.hiLoTablesData && (
          <SummaryMarketInfo
            heading={`<span>${this.props.staticKeyWords.hiLo}</span>`}
            graphData={this.props.hiLoGraphData}
            secondGraphData={this.props.fhHiLoGraphData}
            hiloCornersColumns={this.props.hiloCornersColumns}
            isHilo={true}
            tableData={this.props.hiLoTablesData}
          />
        )}
        {this.props.cornorsHiLoTablesData && (
          <SummaryMarketInfo
            heading={this.props.staticKeyWords.cornersHiLo}
            graphData={this.props.cornorsHiLoGraphData}
            isCornersHilo={true}
            cornersHiloColumns={this.props.cornersHiloColumns}
            tableData={this.props.cornorsHiLoTablesData}
          />
        )}

        {this.props.goalScoringTimesData && (
          <div className="graphSection">
            <div className="sectionHeading">
              <div className="sectionTitle">
                {this.props.staticKeyWords.goalScoringTimeAnalysis}
              </div>
            </div>
            <div className="graphContainer">
              <div className="graphContent">
                <div className="singleCentered-graph">
                  <GoalTimesGraph
                    data={this.props.goalScoringTimesData}
                    //title={this.props.staticKeyWords.goalTimes}
                    showLine={false}
                    homeTeamName={this.props.homeTeamName}
                    awayTeamName={this.props.awayTeamName}
                    loadin="goalstime"
                    showTable={true}
                    staticKeyWords={this.props.staticKeyWords}
                    width="710px"
                    isSummaryGT={true}
                  />
                </div>
                {/*<div class="dualGrah">
                                    <div class="mainTitle medium home-text">{this.props.homeTeamName}<small> ({this.props.staticKeyWords.Recent8Homeleaguematches})</small></div>
                                    {
                                        goalScoringHomeData.length>0 && goalScoringHomeCat.length>0?
                                        <GoalScoreTimeGraph
                                            loadin="homegraph"
                                            color="#29d6d4"
                                            data={goalScoringHomeData.reverse()}
                                            categories={goalScoringHomeCat.reverse()}
                                        />:""
                                    }
                                </div>
                                <div class="dualGrah">
                                    <div class="mainTitle medium away-text">{this.props.awayTeamName} <small>({this.props.staticKeyWords.Recent8AwayLeagueMatches})</small></div>
                                    
                                    {
                                        goalScoringHomeData.length>0 && goalScoringHomeCat.length>0?
                                        
                                        <GoalScoreTimeGraph
                                            loadin="awaygraph"
                                            color="#e57374"
                                            data={goalScoringAwayData}
                                            categories={goalScoringAwayCat}
                                        />:""
                                    }
                                </div>*/}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    h2hLastResultsTableData: state.summary.h2hLastResultsTableData,
    homeTeamName: state.match.homeTeamName,
    awayTeamName: state.match.awayTeamName,
    homeTeamId: state.match.homeTeamId,
    awayTeamId: state.match.awayTeamId,
    hadGraphData: state.summary.hadGraphData,
    goalsPerGame: state.summary.goalsPerGame,
    fhHiLoGraphData: state.summary.fhHiLoGraphData,
    fhHiLoTablesData: state.summary.fhHiLoTablesData,
    hiLoGraphData: state.summary.hiLoGraphData,
    hiLoTablesData: state.summary.hiLoTablesData,
    cornorsHiLoGraphData: state.summary.cornorsHiLoGraphData,
    cornorsHiLoTablesData: state.summary.cornorsHiLoTablesData,
    goalScoringTimesData: state.summary.goalScoringTimesData,
    last8Results: state.summary.last8Results,
    staticKeyWords: state.app.staticKeyWords,
    languageId: state.app.languageId,
    eventInfo: state.app.eventInfo,
    hiloCornersColumns: state.summary.hiloCornersColumns,
    cornersHiloColumns: state.summary.cornersHiloColumns,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Summary);

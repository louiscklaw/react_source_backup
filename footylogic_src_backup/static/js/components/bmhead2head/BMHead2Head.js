import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route } from "react-router-dom";
import {
  getEventInfo,
  setTableHeaders,
  getPastSeason,
} from "./BMHead2HeadSlice";
// import BMRecentformsTable from '../bmrecentformstable/BMRecentformsTable';
import { toggleMode } from "../../layouts/matchSlice";
import { setDisplayMode, checkEdisplay } from "../../AppSlice";
import HToHTab from "../htohtab/HToHTab";
import { getWinBest } from "../matchcenter/MatchCenterSlice";

class BMHead2Head extends Component {
  componentWillMount() {
    if (this.props.staticKeyWords && Object.keys(this.props.staticKeyWords)) {
      this.props.dispatch(setTableHeaders(this.props.staticKeyWords));
    }
    // if(this.props.match && this.props.match.params.eventId && Number(this.props.match.params.eventId)>0){
    //     this.props.dispatch(getPastSeason(this.props.eventInfo.eventId))
    // }
    if (this.props.eventInfo.eventId && this.props.eventInfo.eventId !== 0) {
      this.props.dispatch(
        getWinBest(this.props.eventInfo.eventId, this.props.languageId),
      );
    }
  }
  componentDidMount() {
    this.props.dispatch(toggleMode(false));
    if (
      this.props.homeTeamId &&
      this.props.homeTeamId > 0 &&
      this.props.awayTeamId &&
      this.props.awayTeamId > 0
    ) {
      //this.props.dispatch(getEventInfo(this.props.homeTeamId,this.props.awayTeamId));
    }
    if (checkEdisplay()) {
      this.props.dispatch(setDisplayMode(true));
    }
  }
  componentWillUnmount() {
    this.props.dispatch(setDisplayMode(false));
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.homeTeamId &&
      this.props.homeTeamId > 0 &&
      this.props.homeTeamId !== prevProps.homeTeamId &&
      this.props.awayTeamId &&
      this.props.awayTeamId > 0 &&
      this.props.awayTeamId !== prevProps.awayTeamId
    ) {
      this.props.dispatch(
        getEventInfo(this.props.homeTeamId, this.props.awayTeamId),
      );
    }
    if (
      JSON.stringify(this.props.staticKeyWords) !==
      JSON.stringify(prevProps.staticKeyWords)
    ) {
      this.props.dispatch(setTableHeaders(this.props.staticKeyWords));
    }
    if (
      this.props.eventInfo.eventId !== prevProps.eventInfo.eventId &&
      this.props.eventInfo.eventId > 0
    ) {
      this.props.dispatch(
        getWinBest(this.props.eventInfo.eventId, this.props.languageId),
      );
    }
  }
  render() {
    return (
      <div class="pageContent headTo-headHKJC">
        {/* <div class="sectionHeading">
        <div class="sectionTitle">{this.props.staticKeyWords.past3Seasons}</div>
        </div>
        <div class="pastSeasons">
            <div class="pastSeasons-block homeWins">{this.props.homeTeamName} {this.props.staticKeyWords.wins}
                <div>{this.props.pastSeasons.homeTeamWin}</div>
            </div>
            <div class="pastSeasons-block draws">{this.props.staticKeyWords.draws}
                <div>{this.props.pastSeasons.awayTeamWin}</div>
            </div>
            <div class="pastSeasons-block awayWins">{this.props.awayTeamName} {this.props.staticKeyWords.wins}
                <div>{this.props.pastSeasons.draw}</div>
            </div>
        </div> */}
        <Route render={(props) => <HToHTab {...props} isBasic={true} />} />
        {/*<div class="tableTwo-column">
            <div class="tableHome">
                <div class="tableFull-width">
                    <div class="tableHeader-home">
                        <div class="tableHeading">{this.props.staticKeyWords.headToHead} <span>(8 {this.props.staticKeyWords.recentEncounters})</span>
                        </div>
                        <div class="tableHeading-rightSection">
                            <div class="form-group">
                                <div class="form-control">
                                    <select class="leagueDropdown" onChange={(event)=> this.props.dispatch(getTeamInfo('home',this.props.homeTeamId,event.target.value))}>
                                        <option value="1">{this.props.staticKeyWords.hadHandicap} </option>
                                        <option value="2">{this.props.staticKeyWords.hiLoCorners}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                            this.props.homeTeamTableData && this.props.homeTeamTableData.hasOwnProperty('results')?
                            <div class="pastSeasons pastSeasons-grid">
                        
                                <div class="pastSeasons-block homeWins small">
                                    <div>{this.props.homeTeamName} {this.props.staticKeyWords.wins}</div>
                                    <div>{this.props.homeTeamTableData.results.homeTeamWin}</div>
                                </div>
                                <div class="pastSeasons-block draws small">
                                    {this.props.staticKeyWords.draws}
                                    <div>{this.props.homeTeamTableData.results.draw}</div>
                                </div>
                                <div class="pastSeasons-block awayWins small">
                                    {this.props.awayTeamName} {this.props.staticKeyWords.wins}
                                    <div>{this.props.homeTeamTableData.results.awayTeamWin}</div>
                                </div>
                            </div>:""
                    }
                    {this.props.homeTeamTableData && this.props.homeTeamTableData.hasOwnProperty('encounters')?
                    <BMRecentformsTable columns={(this.props.homeMarketGroupId==1?this.props.handicapColumns:[])} 
                    data={this.props.homeTeamTableData.encounters} isHome={true}/>:""}
                </div>

            </div>
            <div class="tableAway">
                <div class="tableFull-width">
                    <div class="tableHeader-away">
                        <div class="tableHeading">Head to Head <span>(8 Recent Encounters for Home Team)</span>
                        </div>
                        <div class="tableHeading-rightSection">
                            <div class="form-group">
                                <div class="form-control">
                                    <select class="select-margin" onChange={(event)=> this.props.dispatch(getTeamInfo('away',this.props.awayTeamId,event.target.value))}>
                                        <option value="1">{this.props.staticKeyWords.hadHandicap} </option>
                                        <option value="2">{this.props.staticKeyWords.hiLoCorners}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                            this.props.awayTeamTableData && this.props.awayTeamTableData.hasOwnProperty('results')?
                            <div class="pastSeasons pastSeasons-grid">
                        
                                <div class="pastSeasons-block homeWins small">
                                    <div>{this.props.homeTeamName} Wins</div>
                                    <div>{this.props.awayTeamTableData.results.homeTeamWin}</div>
                                </div>
                                <div class="pastSeasons-block draws small">
                                    Draws
                                    <div>{this.props.awayTeamTableData.results.draw}</div>
                                </div>
                                <div class="pastSeasons-block awayWins small">
                                    {this.props.awayTeamName} Wins
                                    <div>{this.props.awayTeamTableData.results.awayTeamWin}</div>
                                </div>
                            </div>:""
                    }
                    {this.props.awayTeamTableData && this.props.awayTeamTableData.hasOwnProperty('encounters')?
                    <BMRecentformsTable columns={(this.props.homeMarketGroupId==1?this.props.handicapColumns:[])} 
                    data={this.props.awayTeamTableData.encounters} isHome={true}/>:""}
                </div>
            </div>
        </div>*/}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    homeTeamName: state.match.bannerData.homeTeamName,
    awayTeamName: state.match.bannerData.awayTeamName,
    homeTeamId: state.match.bannerData.homeTeamId,
    awayTeamId: state.match.bannerData.awayTeamId,
    pastSeasons: state.bmh2h.pastSeasons,
    homeTeamTableData: state.bmh2h.homeTeamTableData,
    awayTeamTableData: state.bmh2h.awayTeamTableData,
    handicapColumns: state.bmh2h.handicapColumns,
    homeMarketGroupId: state.bmh2h.homeMarketGroupId,
    staticKeyWords: state.app.staticKeyWords,
    languageId: state.app.languageId,
    eventInfo: state.app.eventInfo,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(BMHead2Head);

import React, { Component } from "react";
import { Route } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SummaryLastResultsTable from "../summarylastresultstable/SummaryLastResultsTable";
//import SummaryLastResults from '../summarylastresults/SummaryLastResults';
import { setMarketGroupId, setTableHeaders } from "./BMRecentFormsSlice";
//import BMRecentformsTable from '../bmrecentformstable/BMRecentformsTable';
import { getLast8Results } from "../summary/SummarySlice";
import { toggleMode } from "../../layouts/matchSlice";
import RecentFromTab from "../recentformtab/RecentFormTab";
import {
  loadData,
  selectDefaultHomeOptionId,
  selectDefaultAwayOptionId,
} from "../recentformtab/RecentFormTabSlice";
import { getWinBest } from "../matchcenter/MatchCenterSlice";
import { checkEdisplay, setDisplayMode } from "../../AppSlice";
class BMRecentForms extends Component {
  componentWillMount() {
    this.props.dispatch(toggleMode(false));
    this.props.dispatch(setMarketGroupId({ text: "home", id: 1 }));
    this.props.dispatch(setMarketGroupId({ text: "away", id: 1 }));
    this.props.dispatch(
      getWinBest(this.props.eventInfo.eventId, this.props.languageId),
    );
    if (Object.keys(this.props.bannerData).length) {
      let tabname = this.props?.match?.params?.tabname
        ? this.props.match.params.tabname
        : "had";

      this.props.dispatch(
        loadData(
          tabname,
          "",
          "",
          this.props.bannerData.homeTeamId,
          this.props.bannerData.awayTeamId,
          this.props.languageId,
          {},
        ),
      );
      // this.props.dispatch(getRecentResultsEvent('',1,this.props.bannerData));
      this.props.dispatch(
        getLast8Results(
          this.props.bannerData.homeTeamId,
          this.props.bannerData.awayTeamId,
          this.props.languageId,
          this.props.bannerData.competitionId,
        ),
      );
    }
    if (this.props.staticKeyWords && Object.keys(this.props.staticKeyWords)) {
      this.props.dispatch(setTableHeaders(this.props.staticKeyWords));
    }
    if (checkEdisplay()) {
      this.props.dispatch(setDisplayMode(true));
    }
  }
  componentWillUnmount() {
    this.props.dispatch(setDisplayMode(false));
  }
  componentWillReceiveProps(nextProps) {
    if (
      this.props.bannerData != nextProps.bannerData &&
      window.location.pathname.split("/").includes("bmrecentforms")
    ) {
      // this.props.dispatch(getRecentResultsEvent('',1,nextProps.bannerData));
      this.props.dispatch(selectDefaultHomeOptionId(this.props.homeOption));
      this.props.dispatch(selectDefaultAwayOptionId(this.props.awayOption));
      let tabname = this.props?.match?.params?.tabname
        ? this.props.match.params.tabname
        : "had";
      // debugger;
      this.props.dispatch(
        loadData(
          tabname,
          "",
          "",
          nextProps.bannerData.homeTeamId,
          nextProps.bannerData.awayTeamId,
          this.props.languageId,
          {
            selectedHomeOptionId: this.props.homeOption,
            selectedAwayOptionId: this.props.awayOption,
          },
        ),
      );
      this.props.dispatch(
        getLast8Results(
          nextProps.bannerData.homeTeamId,
          nextProps.bannerData.awayTeamId,
          this.props.languageId,
          nextProps.bannerData.competitionId,
        ),
      );
    }
    if (
      this.props.eventInfo.eventId !== nextProps.eventInfo.eventId &&
      nextProps.eventInfo.eventId > 0
    ) {
      this.props.dispatch(
        getWinBest(this.props.eventInfo.eventId, this.props.languageId),
      );
    }
    if (
      JSON.stringify(this.props.staticKeyWords) !==
      JSON.stringify(nextProps.staticKeyWords)
    ) {
      this.props.dispatch(setTableHeaders(nextProps.staticKeyWords));
    }
  }
  render() {
    return (
      <div className="pageContent headTo-headHKJC">
        <div class="tableTwo-column tableTwo-column">
          {this.props.last8Results && this.props.last8Results.homeTeam ? (
            <SummaryLastResultsTable
              isHome={true}
              title={this.props.bannerData.homeTeamName}
              subTitle={this.props.staticKeyWords.last8HomeResultsLFL}
              data={this.props.last8Results.homeTeam}
            />
          ) : (
            ""
          )}
          {this.props.last8Results && this.props.last8Results.awayTeam ? (
            <SummaryLastResultsTable
              isHome={false}
              title={this.props.bannerData.awayTeamName}
              subTitle={this.props.staticKeyWords.last8AwayResultsLFL}
              data={this.props.last8Results.awayTeam}
            />
          ) : (
            ""
          )}
        </div>
        {/*<div className="tableTwo-column">
                <div className="tableHome">
                    <div className="tableFull-width">
                        <div className="tableHeader-home">
                            <div className="tableHeading">{this.props.bannerData.homeTeamName} <span>(8 Recent Results)</span>
                            </div>
                            <div className="tableHeading-rightSection">
                                <div className="form-group">
                                    <div className="form-control">
                                        <select className="select-margin" onChange={(event)=> this.props.dispatch(getRecentResultsEvent('home',event.target.value,this.props.bannerData))}>
                                            <option value="1">{this.props.staticKeyWords.hadHandicap} </option>
                                            <option value="2">{this.props.staticKeyWords.hiLoCorners}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BMRecentformsTable columns={(this.props.homeMarketGroupId==1?this.props.handicapColumns:this.props.cornersColumns)} data={this.props.tableData.homeTeam} isHome={true}/>
                    </div>

                </div>
                <div className="tableAway">
                    <div className="tableFull-width">
                        <div className="tableHeader-away">
                            <div className="tableHeading">{this.props.bannerData.awayTeamName} <span>(8 Recent Results)</span>
                            </div>
                            <div className="tableHeading-rightSection">
                                <div className="form-group">
                                    <div className="form-control">
                                        <select className="select-margin" onChange={(event)=> this.props.dispatch(getRecentResultsEvent('away',event.target.value,this.props.bannerData))}>
                                            <option value="1">{this.props.staticKeyWords.hadHandicap} </option>
                                            <option value="2">{this.props.staticKeyWords.hiLoCorners}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BMRecentformsTable columns={(this.props.awayMarketGroupId==1?this.props.handicapColumns:this.props.cornersColumns)} data={this.props.tableData.awayTeam} isHome={false}/>
                    </div>
                </div>
            </div>*/}
        <Route
          render={(props) => (
            <RecentFromTab isAdvancedMode={false} {...props} />
          )}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bannerData: state.match.bannerData,
    tableData: state.bmrecentforms.tableData,
    handicapColumns: state.bmrecentforms.handicapColumns,
    cornersColumns: state.bmrecentforms.cornersColumns,
    homeMarketGroupId: state.bmrecentforms.homeMarketGroupId,
    awayMarketGroupId: state.bmrecentforms.awayMarketGroupId,
    last8Results: state.summary.last8Results,
    staticKeyWords: state.app.staticKeyWords,
    languageId: state.app.languageId,
    eventInfo: state.app.eventInfo,
    defaultHomeOptionId: state.recentfromtab.defaultHomeOptionId,
    defaultAwayOptionId: state.recentfromtab.defaultAwayOptionId,
    homeOption: state.recentfromtab.homeOption,
    awayOption: state.recentfromtab.awayOption,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(BMRecentForms);

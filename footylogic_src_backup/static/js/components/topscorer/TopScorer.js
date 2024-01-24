import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getTopScorerData, setTableHeaders } from "./TopScorerSlice";
import StandingsTable from "../standingstable/StandingsTable";
import TeamsGroupTable from "../teamsgrouptable/teamsGroupTable";
import { Route } from "react-router-dom";
import {
  setDisplayMode,
  checkEdisplay,
  setDisableLeagues,
} from "../../AppSlice";

class TopScorer extends Component {
  componentWillMount() {
    if (
      this.props.match &&
      this.props.match.params.leagueId &&
      Number(this.props.match.params.leagueId) > 0
    ) {
      this.props.dispatch(
        getTopScorerData(
          this.props.match.params.leagueId,
          this.props.languageId,
        ),
      );
    }
    if (this.props.staticKeyWords && Object.keys(this.props.staticKeyWords)) {
      this.props.dispatch(setTableHeaders(this.props.staticKeyWords));
    }
  }
  componentWillReceiveProps(nextProps) {
    if (
      JSON.stringify(this.props.staticKeyWords) !==
      JSON.stringify(nextProps.staticKeyWords)
    ) {
      this.props.dispatch(setTableHeaders(nextProps.staticKeyWords));
    }
  }
  componentDidMount() {
    if (checkEdisplay()) {
      this.props.dispatch(setDisplayMode(true));
    }
    this.props.dispatch(setDisableLeagues({ disable: true, tab: "TopScorer" }));
  }
  componentWillUnmount() {
    this.props.dispatch(setDisplayMode(false));
    this.props.dispatch(
      setDisableLeagues({ disable: false, tab: "TopScorer" }),
    );
  }

  render() {
    return (
      <React.Fragment>
        <Route
          render={(props) => (
            <TeamsGroupTable
              {...this.props}
              standingsTableData={
                this.props.topScorerData.hasOwnProperty("info")
                  ? this.props.topScorerData.info
                  : []
              }
              screenfrom="topscorer"
              rowNavigation="team/[:id]/fixturesresults"
            />
          )}
        />
        {this.props.topScorerData.hasOwnProperty("info") &&
          this.props.topScorerData.info.length >= 11 &&
          !this.props.isEdisplay && (
            <div id="leagueTopScorer" className="tabContent">
              <div className="tournament-content p-0">
                <StandingsTable
                  {...this.props}
                  standingColumns={this.props.topScorerColumns}
                  standingsTableData={
                    this.props.topScorerData.hasOwnProperty("info") &&
                    this.props.topScorerData.info
                  }
                  isWhiteBG={true}
                  isTournament={true}
                  //isRowClick={true}
                  paramKey="playerClubId"
                  //rowNavigation="team/[:id]/standings"
                  screenfrom="topscorer"
                />
              </div>
            </div>
          )}
      </React.Fragment>
    );
  }
}
{
  /*<div id="leagueTopScorer" className="tabContent">
            <div className="tournament-content">
             <StandingsTable standingColumns={this.props.topScorerColumns} 
                                standingsTableData={this.props.topScorerData.hasOwnProperty('info') && this.props.topScorerData.info}
                                isWhiteBG={true}/>
            </div>
        </div> */
}

function mapStateToProps(state) {
  return {
    topScorerData: state.topscorer.topScorerData,
    topScorerColumns: state.topscorer.topScorerColumns,
    staticKeyWords: state.app.staticKeyWords,
    languageId: state.app.languageId,
    isEdisplay: state.app.isEdisplay,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TopScorer);

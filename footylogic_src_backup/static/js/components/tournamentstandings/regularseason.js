import React, { Component } from "react";
import { Route } from "react-router-dom";
import StandingsTable from "../standingstable/StandingsTable";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setTab, getStandings } from "./TournamentStandingsSlice";
import { setDisplayMode, checkEdisplay } from "../../AppSlice";
import { engLangId } from "../../sharedfiles/constants";
class RegularSeason extends Component {
  selectTab(tabId) {
    this.props.dispatch(setTab(tabId));
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.leagueId &&
      Number(this.props.match.params.leagueId) > 0
    ) {
      //  this.props.dispatch(getFiltersData(1, this.props.languageId));
      let params = this.props.params;
      params.optionId = tabId;
      params.compId = this.props.compId;
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
  componentDidMount() {
    if (checkEdisplay()) {
      this.props.dispatch(setDisplayMode(true));
    }
  }
  componentWillUnmount() {
    this.props.dispatch(setDisplayMode(false));
  }
  render() {
    return (
      <div id="leagueStandings" className="tabContent">
        <div className="tournament-content">
          {/* {((this.props.match.params.leagueType == 'league') || (this.props.match.params.leagueType != 'league' && this.props.type == 'team')) && */}
          <div className="btn-group pt-0">
            {this.props.optionsList.map((option, index) => {
              return (
                <button
                  className={
                    "buttonAll" +
                    (this.props.selectedTab === option.id ? " active" : "")
                  }
                  onClick={this.selectTab.bind(this, option.id)}
                  key={"btnOption_" + index}
                >
                  {option.name}
                </button>
              );
              //
            })}
          </div>
          {/* // } */}
          {/* <div className="sectionHeading">
                        <div></div>
                        <div className="sectionFilter">
                            <div className="form-group form-inline">

                                <div className="form-control" onChange={this.seasonChanged.bind(this)}>
                               
                                    <select > 
                                        {
                                            this.props.seasonFilterData.map((item, index) => {
                                                return <option value={item.id} key={"season_" + index}>{item.name}</option>
                                            })
                                        }

                                    </select>
                                </div>
                            </div>
                        </div>
                    </div> */}

          {/* {((this.props.match.params.leagueType == 'league') || (this.props.match.params.leagueType != 'league' && this.props.type == 'team')) && */}
          <Route
            render={(props) => (
              <StandingsTable
                {...props}
                standingColumns={this.props.standingColumns}
                standingsTableData={
                  this.props.standingsData.hasOwnProperty("info") &&
                  this.props.standingsData.info
                }
                isWhiteBG={true}
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
                isTournament={this.props.isTournament}
                type={this.props.type}
                teamId={this.props.teamId}
                splitIndex={this.props.standingsData.splitIndex}
              />
            )}
          />
          {/* } */}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    optionsList: state.tournamentstandings.optionsList,
    standingColumns: state.tournamentstandings.standingColumns,
    selectedTab: state.tournamentstandings.selectedTab,
    languageId: state.app.languageId,
    compId: state.tournamentstandings.compId,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(RegularSeason);

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route } from "react-router-dom";
import { selectTab } from "./HToHTabSlice";
import HADHandicapTab from "../hadhandicaptab/HADHandicapTab";
import HiloCorners from "../hilocornerstab/HiloCornersTab";
import HTOHOutput from "../htohoutput/htohOutput";
import { metaData } from "../../AppSlice";
import { summary } from "../../sharedfiles/EndpointConfig";

class HToHTab extends Component {
  componentWillMount() {
    if (this.props?.match?.params?.tabname) {
      this.props.dispatch(selectTab(this.props.match.params.tabname));
    } else {
      this.props.dispatch(selectTab("had"));
    }
    if (
      this.props?.homeTeamName &&
      this.props?.awayTeamName &&
      this.props.pagename != "summary"
    ) {
      this.props.dispatch(
        metaData(
          "HtoH",
          this.props.homeTeamName + " vs " + this.props.awayTeamName,
        ),
      );
    }
  }
  // componentDidMount(){

  // }
  componentDidUpdate(prevProps, prevState) {
    //     if(prevProps?.match?.params?.tabname &&this.props?.match?.params?.tabname &&
    //         this.props.match.params.tabname!=prevProps.match.params.tabname){
    //     if(this.props?.match?.params?.tabname){
    //         this.props.dispatch(selectTab(this.props.match.params.tabname))

    //     }
    //     else{
    //         this.props.dispatch(selectTab('had'))
    //     }
    // }
    if (
      this.props?.homeTeamName &&
      this.props?.awayTeamName &&
      prevProps.homeTeamName != this.props.homeTeamName &&
      prevProps.awayTeamName != this.props.awayTeamName &&
      this.props.pagename != "summary"
    ) {
      this.props.dispatch(
        metaData(
          "HtoH",
          this.props.homeTeamName + " vs " + this.props.awayTeamName,
        ),
      );
    }
  }
  handleTabClickChange(tab) {
    if (this.props.isAdvancedMode) {
      this.props.history.push(
        "/" +
          this.props.match.params.lang +
          "/matchcenter/" +
          this.props.match.params.countryId +
          "/" +
          this.props.match.params.competitionId +
          "/" +
          this.props.match.params.eventId +
          "/htoh/head2head/" +
          tab,
      );
    } else {
      this.props.history.push(
        "/" +
          this.props.match.params.lang +
          "/matchcenter/" +
          this.props.match.params.countryId +
          "/" +
          this.props.match.params.competitionId +
          "/" +
          this.props.match.params.eventId +
          "/bmhead2head/" +
          tab,
      );
    }
    this.props.dispatch(selectTab(tab));
  }
  render() {
    return (
      <div className="tabSection">
        {window.location.pathname.split("/").includes("htohoutput") ||
        this.props.hidetabs ? (
          ""
        ) : (
          <ul className="tabsList" data-persist="true">
            <li
              className={
                "tabLinks" + (this.props.selectedTab === "had" ? " active" : "")
              }
              onClick={() => this.handleTabClickChange("had")}
              id="defaultOpen"
            >
              <a>{this.props.staticKeyWords.hadHandicap}</a>
            </li>
            <li
              className={
                "tabLinks" +
                (this.props.selectedTab === "hilo" ? " active" : "")
              }
              onClick={() => this.handleTabClickChange("hilo")}
            >
              <a>{this.props.staticKeyWords.hiLoCorners}</a>
            </li>
          </ul>
        )}
        <div className="tabsContent">
          {window.location.pathname.split("/").includes("htohoutput") ? (
            <Route
              render={(props) => (
                <HTOHOutput
                  {...props}
                  lastEncountersOptions={this.props.lastEncountersOptions}
                />
              )}
            />
          ) : (
            <React.Fragment>
              {this.props.selectedTab === "had" ? (
                <Route
                  render={(props) => (
                    <HADHandicapTab
                      {...props}
                      lastEncountersOptions={this.props.lastEncountersOptions}
                      isBasic={this.props.isBasic}
                      hideOptions={this.props.hideOptions}
                    />
                  )}
                />
              ) : (
                <Route
                  render={(props) => (
                    <HiloCorners
                      {...props}
                      lastEncountersOptions={this.props.lastEncountersOptions}
                      isBasic={this.props.isBasic}
                    />
                  )}
                />
              )}
            </React.Fragment>
          )}
        </div>
        {/*<HADHandicapTab lastEncountersOptions={this.props.lastEncountersOptions}/><HiloCorners lastEncountersOptions={this.props.lastEncountersOptions}/>*/}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    selectedTab: state.htohtab.selectedTab,
    lastEncountersOptions: state.matchcenter.lastEncountersOptions,
    staticKeyWords: state.app.staticKeyWords,
    isAdvancedMode: state.match.isAdvancedMode,
    homeTeamName: state.match.homeTeamName,
    awayTeamName: state.match.awayTeamName,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({ selectTab }, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HToHTab);
